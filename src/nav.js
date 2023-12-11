import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

function nav() {
    const navbarStyle = {
        backgroundColor: '#50237d',
    };

    return (
        <Navbar expand="lg" style={navbarStyle} data-bs-theme="dark">
            <Container className="d-flex justify-content-center">
                < Navbar.Brand href="/#/home" >
                    <img src="/logo.png" alt="logo" width="30" height="30" className="d-inline-block align-text-top pe-1" />
                    Wishsong
                </Navbar.Brand >
                <Navbar.Toggle aria-controls="basic-navbar-nav " />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className='ms-auto'>
                        <Nav.Link href="/#/home" className='text-white'>Home</Nav.Link>
                        <Nav.Link href="/#/search" className='text-white'>Search</Nav.Link>
                        <Nav.Link href="/#/profile" className='text-white'>Profile</Nav.Link>
                        <Nav.Link href="/#/login" className='text-white'>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    )
}

export default nav;