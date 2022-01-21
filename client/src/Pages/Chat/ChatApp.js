import React from "react";
import "../Styles/Login.css"
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";

import socketClient from "socket.io-client";


export default function ChatApp() {

    const [show, setShow] = React.useState(true);

    const socket = socketClient("http://172.18.8.52:9001");
    let connected = false;


    function login(e) {
        e.preventDefault();

        const username = e.target.userName.value;

        console.log(e.target.confirmation.checked)

        if (username && e.target.confirmation.checked === true) {

//hallo
            socket.emit('add user', username);
            e.target.reset()
            setShow(false)


        }

        console.log(username);
    }


    /*


    socket.on('login', function (data) {
        connected = true;
        log("Willkommen beim Chat!");
    });

    // Server schickt "new message": Neue Nachricht zum Chat-Protokoll hinzufügen
    socket.on('new message', function (data) {
        addChatMessage(data);
    });

    // Server schickt "user joined": Neuen Benutzer im Chat-Protokoll anzeigen
    socket.on('user joined', function (data) {
        log(data + ' joined the channel');
    });

    // Server schickt "user left": Benutzer, der gegangen ist, im Chat-Protokoll anzeigen
    socket.on('user left', function (data) {
        log(data + ' left the channel');
    });
    function sendMessage() {
        // Nachricht aus Eingabefeld holen (ohne Leerzeichen am Anfang oder Ende).
        var message =

        // Prüfen, ob die Nachricht nicht leer ist und wir verbunden sind.
        if (message && connected) {
            // Eingabefeld auf leer setzen
            $inputMessage.val('');

            // Chat-Nachricht zum Chatprotokoll hinzufügen
            addChatMessage({username: username, message: message});

            // Server über neue Nachricht informieren. Der Server wird die Nachricht
            // an alle anderen Clients verteilen.
            socket.emit('new message', message);
        }
    }
    function addChatMessage(data) {


    }

*/




return (

    <div className="ChatAppContainer">
        <div className="ChatApp">
            {
                show ? <div className="Login">

                    <div className="background">

                        <div className="Login-Container">

                            <div className="Form-Parent">

                                <Form onSubmit={login}>
                                    <h1>
                                        Enter User name to join the chat
                                    </h1>
                                    <Form.Group className="mb-3" controlId="login.username">
                                        <Form.Label className="primary-text" name="username">Username</Form.Label>
                                        <Form.Control className="input-text" type="text" placeholder="@"
                                                      name="userName"/>
                                        <Form.Check className="checkbox"
                                                    type="checkbox"
                                                    label="By checking this you accept the terms and conditions"
                                                    name="confirmation"
                                        />
                                    </Form.Group>


                                    <div className="submitBtn">

                                        <Button type="submit" className='btn primary-btn'>
                                            Submit
                                        </Button>


                                    </div>

                                </Form>
                            </div>
                        </div>

                    </div>

                </div> : <div className="Chat-Container-Parent">
                    <div className="ChatApp-Container">
                        <br/>
                        <h1>Welcome to the Chat</h1>
                        <ul className="Messages">
                        </ul>


                        <div className="ChatInput">

                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Enter message"
                                    name="input"
                                />
                                <input className="sendButton" type="button" value="Send"/>
                            </InputGroup>


                        </div>


                    </div>
                </div>


            }


        </div>
    </div>


)
    ;
}

