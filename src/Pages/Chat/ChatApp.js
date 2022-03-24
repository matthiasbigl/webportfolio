import React, {useEffect, useRef} from "react";
import "../Styles/Login.css"
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";

import socketClient from "socket.io-client";
import AutolinkerWrapper from 'react-autolinker-wrapper'



const socket = socketClient("http://172.18.8.52:9001");
const initialList = [];
var username;
let addedUser;

export default function ChatApp() {


    const [list, setList] = React.useState(initialList);
    const [show, setShow] = React.useState(true);
    const [loggedIn, setloggedIn] = React.useState(false)
    const [messsage, setMesssage] = React.useState('');


    useEffect(() => {
        handleSocket();
    });


    function login(e) {
        e.preventDefault();

        username = e.target.userName.value;

        console.log(e.target.confirmation.checked)

        if (username && e.target.confirmation.checked === true) {

//hallo
            socket.emit('add user', username);
            e.target.reset()
            setShow(false)
        }

        console.log(username);
    }

    function handleChange(event) {
        setMesssage(event.target.value);
    }

    function log() {
        if (list.length >= 25) {
            // list.shift();

        }
        const newList = list.concat({user: username, message: messsage});

        setList(newList);
        setMesssage("");
    }

    function addChatMessage(data) {


        if (list.length >= 25) {
            //     list.shift();
        }
        const UsernameReceived = (data.username);
        const MessageReceived = (data.message);

        setList(list.concat({user: UsernameReceived, message: MessageReceived}));


    }

    function sendMessage() {
        if (messsage !== "") {
            socket.emit('new message', messsage);
            log()
        }


    }

    const handleSocket = () => {
        socket.on('new message', function (data) {
            addChatMessage(data)
        });
        socket.on('login', function (data) {
            if (!addedUser) {
                addChatMessage({
                    username: "SERVER",
                    message: "Willkommen beim chat!"
                })
                setloggedIn(true)
            }

        });
        socket.on('user joined', function (data) {
            addChatMessage({
                username: "SERVER",
                message: data + " joined the channel"
            })
        });
        socket.on('user left', function (data) {
            addChatMessage({
                username: "SERVER",
                message: data + "left the channel"
            });
        });

    };


    function handleKeyDown(event) {
        if (event.keyCode === 13) {
            sendMessage(event);
        }
    }


    return (

        <div className="ChatAppContainer">
            <div className="ChatApp">
                {
                    /* */
                    show && !loggedIn ? <div className="Login">

                            <div className="background">

                                <div className="Login-Container">

                                    <div className="Form-Parent">

                                        <Form onSubmit={login}>
                                            <h1>
                                                Enter Username <br/>to join the chat
                                            </h1>
                                            <Form.Group className="mb-3" controlId="login.username">
                                                <Form.Label className="primary-text" name="username">Username</Form.Label>
                                                <Form.Control id="userName" className="input-text" type="text"
                                                              placeholder="@"
                                                              name="userName"/>
                                                <Form.Check className="checkbox"
                                                            id="checkbox"
                                                            type="checkbox"
                                                            label="By checking this you accept the terms and conditions"
                                                            name="confirmation"
                                                />
                                            </Form.Group>


                                            <div className="submitBtn">

                                                <Button id="login" type="submit" className='btn primary-btn'>
                                                    Submit
                                                </Button>


                                            </div>

                                        </Form>
                                    </div>
                                </div>

                            </div>

                        </div> :
                        <div className="Chat-Container-Parent">
                            <div className="ChatApp-Container">
                                <br/>
                                <h1>Welcome to the Chat</h1>

                                <ul className="Messages">
                                    {list.map((item) => (
                                        <li>{item.user}: <AutolinkerWrapper tagName="span"
                                                                            text={item.message}
                                                                            options={{
                                                                                newWindow: true,
                                                                                stripPrefix: false,
                                                                            }}/></li>
                                    ))}

                                </ul>


                                <div className="ChatInput">

                                    <InputGroup className="mb-3">
                                        <FormControl
                                            id="inputMessageID"
                                            placeholder="Enter message"
                                            name="input"
                                            value={messsage}
                                            onChange={handleChange}
                                            onKeyDown={handleKeyDown}
                                        />

                                        <input className="sendButton" onClick={sendMessage} type="button" value="Send"/>
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

