import React from "react";
import "../css/navbar.css";
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';




import logo_uai from '../images/logo.svg';
import { FaChalkboardTeacher } from "react-icons/fa"
import { AiOutlineHome } from "react-icons/ai";
import { FaRegListAlt } from "react-icons/fa";

function Navpanel() {
    
    return (
    <>
    <Navbar collapseOnSelect expand="lg" sticky="top" className="Barra_de_navegacion">
        <Container>
            <Navbar.Brand href="/Inicio"><img src={logo_uai} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link style={{ color: 'white' }} href="/Inicio">Inicio</Nav.Link>
                    <Nav.Link style={{ color: 'white' }} href="/Inscripcion">Inscripción</Nav.Link>
                    <Nav.Link style={{ color: 'white' }} href="/ProfeGuia">Profesor Guía</Nav.Link>
                    <Nav.Link style={{ color: 'white' }} href="/">Cerrar Sesión</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    );
}

export {Navpanel};