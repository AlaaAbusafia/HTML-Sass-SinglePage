import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

//import NavigationItems from '../NavigationItems/navigationItems';
import './toolbar.css';
import Logo from '../Logo/Logo';


const toolbar = ( props ) => (
    
    <Navbar collapseOnSelect expand="lg" variant="dark">
        <Logo />
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#header">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
             <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#careers">Careers</Nav.Link>
             <Nav.Link href="#team">Our Team</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>

        </Navbar.Collapse>
    </Navbar>
    
);

export default toolbar;