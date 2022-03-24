import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import "./navbar.css"

export default function navbar() {
    return (
        <>
            <div className="navbar-container">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>

                        <Navbar.Brand href="/webportfolio/start">
                            <div className="name"> Matthias Bigl&emsp;
                                <i className="fa fa-code">
                                </i>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className={"items"}/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <div>
                                <Nav>
                                    <Nav.Link href="#Skills">Skills</Nav.Link>
                                    <Nav.Link href="#Contact-Me">Contact Me</Nav.Link>
                                    <Nav.Link href="../chat">Chat</Nav.Link>
                                </Nav>
                            </div>

                        </Navbar.Collapse>
                    </Container>

                </Navbar>
            </div>

        </>


    )
}
