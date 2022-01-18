import React from "react";
import "../Styles/Login.css"
import {Button, InputGroup, FormControl, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import socketClient from "socket.io-client";


export default function Login() {

    const socket = socketClient(process.env.WEBPORTFOLIO_CHATSERVER);



    function login(e) {
        // Benutzername aus Eingabefeld holen (ohne Leerzeichen am Anfang oder Ende).

        alert("user loged in");

        // Prüfen, ob der Benutzername nicht leer ist


            socket.emit('add user', "user");



    }

    return (
        <div className="background">
            <div className="LoginContainer">

                <div className="Form-Parent">

                    <Form onSubmit={login}>
                        <h1>
                            Enter User name to join the chat
                        </h1>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="primary-text" name="username">Username</Form.Label>
                            <Form.Control type="text" value={this.state.val} placeholder="@" name="userName"/>
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

