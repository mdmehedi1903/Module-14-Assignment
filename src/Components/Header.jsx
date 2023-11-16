import React from 'react';
import logo from '../assets/img/DesignAGENCY.png'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'; 
import { NavLink } from 'react-router-dom';

const Header = () => {

    const navLinkStyle = {
        color: 'black', 
        textDecoration: 'none', 
        marginRight: '15px',
        fontSize: '16px' 

    };

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <img className='mt-2' src={logo} alt="Design Agency" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarResponsive" />
                    <Navbar.Collapse id="navbarResponsive">
                        <Nav className="me-auto">
                            <NavLink to='/' style={navLinkStyle}>Home</NavLink>
                            <NavLink to='/team' style={navLinkStyle}>Team</NavLink>
                            <NavLink to='/service' style={navLinkStyle}>Service</NavLink>
                            <NavLink to='/project' style={navLinkStyle}>Project</NavLink>
                            <NavLink to='/testimonial' style={navLinkStyle}>Testimonial</NavLink>
                        </Nav>
                        <Nav className="ms-auto">
                            <Button variant="outline-success" className="me-2">Login</Button>
                            <Button variant="danger">Register</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
