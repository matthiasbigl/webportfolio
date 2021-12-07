import React from 'react';
import './navbar.css'
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

export default function navbar() {
    return (
        <>
            <div className="navbar-container">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            Matthias Bigl&emsp;
                            <i className="fa fa-code"></i>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#Skills">Skills</Nav.Link>
                                <Nav.Link href="#Contact-Me">Contact Me</Nav.Link>
                                <Nav.Link href="#References">References</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

        </>


    )
}
