import React from "react";
import "./Styles/Login.css"
import {Button, InputGroup, FormControl, Form} from "react-bootstrap";



export default function Login() {
    function login(e) {


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
                    <Form.Label className="primary-text">Username</Form.Label>
                    <Form.Control type="text" placeholder="@" name="userName"/>
                </Form.Group>
                <br/>
                <br/>

                <Form.Group className="mb-3">
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

