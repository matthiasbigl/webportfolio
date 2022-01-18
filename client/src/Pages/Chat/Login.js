import React from "react";
import "../Styles/Login.css"
import {Button, Form} from "react-bootstrap";

import socketClient from "socket.io-client";



export default function Login() {

    const socket = socketClient(process.env.WEBPORTFOLIO_CHATSERVER);
    var username;




    function login(e) {
        e.preventDefault();
        console.log(e.target.userName.value)

       socket.emit('add user', e.target.userName.value);
        e.target.reset()

        
    }




    return (
        <div className="background">
            <div className="LoginContainer">

                <div className="Form-Parent">

                    <Form onSubmit={login}>
                        <h1>
                            Enter User name to join the chat
                        </h1>
                        <Form.Group className="mb-3" controlId="login.username">
                            <Form.Label className="primary-text" name="username">Username</Form.Label>
                            <Form.Control type="text" placeholder="@" name="userName"/>
                            <Form.Check
                                type="checkbox"
                                label="By checking this you accept the terms and conditions"
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


    )
        ;
}

