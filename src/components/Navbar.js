import React from 'react';
import {
    Navbar,
    Nav,
} from 'react-bootstrap'

export default function NavigationBar () {
    return (
        <Navbar bg="white" expand="lg" className='shadow fixed-top'>
            <Navbar.Brand href="#home">Emoji Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

