import re
# für url requests an youtube
import threading
import urllib.request
# für aktuelles datum
from datetime import datetime
import pandas as pd
import discord
import praw as praw
import pyowm
from selenium.common.exceptions import StaleElementReferenceException
from selenium.webdriver.common.keys import Keys
from translate import Translator
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from prawcore import NotFound

import requests

global messageready
global pause
global resume
resume = False
pause = False
messageready = False
command = ""

browser = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
url = r'http://172.18.8.52:3000/webportfolio/chat'
browser.get(url)
name = browser.find_element(By.ID, 'userName')
name.send_keys("BOT")
name.send_keys(Keys.ENTER)

agree = browser.find_element(By.ID, 'checkbox')
agree.click()

button = browser.find_element(By.ID, 'login')
button.click()

reddit1 = praw.Reddit(
    client_id="bLyS4JMrQYTjLdkGXucLvg",
    client_secret="T6sc03TScs1BmrG9q7ySFThTFJGbyg",
    user_agent="MatthiasBiglJarvisBot"
)


async def get_MessageWeb():
    oldmessage = ""
    while True:
        try:
            messages = browser.find_element(By.XPATH, "//ul[@class='Messages']//li[last()]")
            newmessage = messages.text
        except StaleElementReferenceException as e:
            pass

        if newmessage != oldmessage:
            on_WebMessage(newmessage)
            await send_Message(newmessage)
        oldmessage = newmessage


getMessage = threading.Thread(target=get_MessageWeb)




def on_WebMessage(WebMessage):
    skills(WebMessage)
    global channel
    global messageready
    global output

    if messageready == True:
        messageWeb = browser.find_element(By.ID, 'inputMessageID')
        messageWeb.send_keys(output)
        messageWeb.send_keys(Keys.ENTER)
        messageready = False

    output = ""


pd.set_option("display.max_rows", None, "display.max_columns", None)
APIKEY = "3324a713430369f2ef0b6ba85401bd0f"  # API Key
OpenWMap = pyowm.OWM(APIKEY)
base_url = "http://api.openweathermap.org/data/2.5/weather?"
translator = Translator(from_lang="en", to_lang="de")


# skills

def wetter(command):
    global messageready
    location = command.split("in ", 1)[1]
    location = location.replace(" ", "+")
    # url aus location und apikey erstellen
    URL = base_url + "q=" + location + "&appid=" + APIKEY
    print(URL)
    response = requests.get(URL)
    if response.status_code == 200:
        data = response.json()
        # daten aus diconary holen
    main = data['main']
    temperature = main['temp']
    temperature = temperature - 273
    humidity = main['humidity']
    pressure = main['pressure']
    report = data['weather']
    print(main)
    temperature = round(temperature)
    global output
    output = "  "
    output = "".join([(str(f"{location:-^30}""\n")),
                      (str(f"Temperature: {temperature}""\n")),
                      (str(f"Humidity: {humidity}""\n")),
                      (str(f"Pressure: {pressure}""\n")),
                      (str(f"Weather Report: {report[0]['description']}""\n"))])
    weather = (report[0]['description'])
    temperaturestr = str(temperature)
    # weather = translator.translate(weather)
    output = output + (
        str("The weather in " + location + " is " + weather + " and it has " + temperaturestr + " degrees.""\n"))
    messageready = True


def uhrzeit():
    global output
    global messageready
    now = datetime.now()
    current_time = now.strftime("%H""uhr""%M")
    output = ("Die aktuelle Uhrzeit beträgt " + str(now.strftime("%H"":""%M")))
    messageready = True


def youtube(command):
    global output
    global messageready
    global channel
    global player
    global resume
    if pause == False and resume == False:

        my_string = command
        print("Searching for " + my_string.split("spiele ", 1)[1])
        titel = my_string.split("spiele ", 1)[1]
        titelohneleehrzeichen = titel.replace(" ", "_")
        print(titelohneleehrzeichen)
        # nur für das suchen der url
        html = urllib.request.urlopen("https://www.youtube.com/results/?search_query=" + titelohneleehrzeichen)
        video_ids = re.findall(r"watch\?v=(\S{11})", html.read().decode())
        # video streamen
        url = ("https://www.youtube.com/watch?v=" + video_ids[0])
        output = str(url)
        messageready = True
        print(output)

        if messageready:
            print("true")
        global channel
        channel.send(output)


def reddit(command):
    subreddit_name = command.split("nach ", 1)[1]

    # Create an instance of reddit class
    if sub_exists(subreddit_name):
        random_submission = reddit1.subreddit(subreddit_name).random().permalink
    else:
        random_submission = reddit1.subreddit("r/all").search(subreddit_name, sort="comments", limit=None).permalink


    link = "reddit.com" + random_submission
    global messageready
    global output
    output = link
    messageready = True
    channel.send(output)


def sub_exists(sub):
    exists = True
    try:
        reddit.subreddits.search_by_name(sub, exact=True)
    except NotFound:
        exists = False
    return exists


def skills(command):
    try:

        # with sr.Microphone() as source:
        # talk("Hallo Matthias wie kann ich helfen")
        # voice = listener.listen(source)
        # command = listener.recognize_google(voice)
        if command:
            print(command)

        # if "hey" in command:

        if "wetter" in command or "weather" in command:
            wetter(command)
        else:
            if "uhrzeit" in command or "time" in command or "spät" in command:
                uhrzeit()
            else:
                if "spiele" in command or "spieler" in command or "play" in command:
                    youtube(command)
                else:
                    if "rdt" in command or "reddit" in command:
                        reddit(command)
                    else:
                        return

        # else:

        #   talk("Ein Fehler ist aufgetretten oder das feature ist noch nicht verfügbar")

    except:
        pass


client = discord.Client()


async def send_Message(newmessage):
    await channel.send(newmessage)


@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))
    getMessage.start()


# discord on message is used when a discord message is  sent
@client.event
async def on_message(message):
    if message.author == client.user:
        return

    global channel
    channel = message.channel

    # print(message.channel)

    command = str(message.content)
    messageWeb = browser.find_element(By.ID, 'inputMessageID')
    messageWeb.send_keys(message.author.display_name + " on discord sayed: " + command)
    messageWeb.send_keys(Keys.ENTER)

    skills(command)
    global messageready
    global output
    channel = message.channel
    if (message.content == "pause"):
        global pause
        pause = True
        youtube(command)
    if (message.content == "resume"):
        global resume
        resume = True
        youtube(command)
    if (messageready == True):
        messageWeb = browser.find_element(By.ID, 'inputMessageID')
        messageWeb.send_keys(output)
        messageWeb.send_keys(Keys.ENTER)

        await message.channel.send(output)
        messageready = False

    output = ""


client.run('ODg3NjIzNTgzNzc2NTA5OTYy.YUG14Q.kmIASAZIpt6U1H6YJhC-xzXQKao')
