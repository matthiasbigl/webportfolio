import React from "react";
import * as emailjs from "emailjs-com";
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";
import "./ContactMe.css"

const SERVICE_ID = "service_0v7etgc";
const TEMPLATE_ID = "template_76bhk81";
const USER_ID = "user_S2EFRasWeJBpGtvAoLiCb";



export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'youtube_template', e.target, 'user_JABO21I8Gm6sxByJH17Nu')
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
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="primary-text">Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={5} />
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

export default ContactMe;