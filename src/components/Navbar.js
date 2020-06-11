import React from 'react';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap'

export default function NavigationBar () {
    return (
        <Navbar bg="white" expand="lg" className='shadow fixed-top'>
            <Navbar.Brand href="#home">Emoji Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Happiness" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

