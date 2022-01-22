import React from "react";
import "../Styles/Login.css"
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";

import socketClient from "socket.io-client";


const socket = socketClient("http://127.0.0.1:9001");
const initialList = [
];
let username="";


export default function ChatApp() {


    const [list, setList] = React.useState(initialList);
    const [show, setShow] = React.useState(true);
    const [messsage, setMesssage] = React.useState('');




    let connected = false;




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

    function log(message) {
        if(list.length>=25){
            list.shift();

        }
        const newList = list.concat(message);

        setList(newList);
        setMesssage("");
    }
    function sendMessage(){
        socket.emit('new message',messsage);

    }
    socket.on('new messages', function(data) {
        alert("new message received")
        console.log(data);
        log(data)

    });










    socket.on('login', function (data) {
        connected = true;

    });
    function handleKeyDown(event) {
        if(event.keyCode === 13) {
            sendMessage(event);
        }
    }





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

                </div> :
                    <div className="Chat-Container-Parent">
                    <div className="ChatApp-Container">
                        <br/>
                        <h1>Welcome to the Chat</h1>
                        <ul className="Messages">
                            {list.map((item) => (
                                <li key={item.id}>{item.message}</li>
                            ))}

                        </ul>


                        <div className="ChatInput">

                            <InputGroup className="mb-3">
                                <FormControl
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

