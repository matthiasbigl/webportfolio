import React from "react";
import "../Styles/Login.css"
import {Button, Form} from "react-bootstrap";

import socketClient from "socket.io-client";


let hiddeLogin=true;


export default function ChatApp() {


    function login(e) {
        e.preventDefault();

        const username = e.target.userName.value;

        console.log(e.target.confirmation.checked)

        if (username && e.target.confirmation.checked === true) {

            const socket = socketClient("http://172.18.8.52:9001");
//hallo
            socket.on('connection', () => {
                console.log("connected to the backend")
                socket.emit('add user', username);
                e.target.reset()

            });
        }

        console.log(username);
        hiddeLogin=false;





    }


    return (

        <div className="ChatAppContainer" style={hiddeLogin ? {} : { display: 'none' }} >
            <div className="ChatApp">
                <div className="Login">

                    <div className="background">

                        <div className="LoginContainer">

                            <div className="Form-Parent">

                                <Form onSubmit={login}>
                                    <h1>
                                        Enter User name to join the chat
                                    </h1>
                                    <Form.Group className="mb-3" controlId="login.username">
                                        <Form.Label className="primary-text" name="username">Username</Form.Label>
                                        <Form.Control className="input-text" type="text" placeholder="@" name="userName"/>
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

                </div>

            </div>
        </div>


    )
        ;
}

