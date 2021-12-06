import React from 'react';
import './navbar.css'
import {Container, Nav, Navbar} from "react-bootstrap";

export default function navbar() {
    return (
        <>
            <div className="navbar-container">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            Matthias Bigl&emsp;
                            <i className="fa fa-code"></i>
                        </Navbar.Brand>
                        <div className="Navbar-Items">
                            <Nav className="me-auto">
                                <Nav.Link href="">Home</Nav.Link>
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                        </div>

                    </Container>
                </Navbar>
            </div>

        </>


    )
}
