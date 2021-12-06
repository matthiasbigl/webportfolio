import React from "react";
import * as emailjs from "emailjs-com";
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";
import "./ContactMe.css"




export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_xpqw3ri', 'template_b9xnr48', e.target, 'user_S2EFRasWeJBpGtvAoLiCb')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }


    return (
        <div className="ContactMe-container">

            <div className="Form-Parent">

                <Form onSubmit={sendEmail}>
                    <h1>
                        Enquire about my Services
                    </h1>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="primary-text">Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" name="email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="primary-text">Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={5} name="message"/>
                    </Form.Group>
                    <div className="submitBtn">
                        <Button type="submit" className='btn primary-btn'>
                            Submit
                        </Button>
                    </div>

                </Form>
            </div>
        </div>)



}

