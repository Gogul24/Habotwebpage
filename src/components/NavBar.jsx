import React from 'react';
import logo from "../assets/logo.png";
import "../style/navbar.css";
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img className='logo' src={logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle className='aria' aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="me-2" href="#find-suppliers">Find Suppliers</Nav.Link>
            <NavDropdown title="Find Service Tag" id="basic-nav-dropdown" className="me-5">
              <NavDropdown.Item href="#action/4.1">Service Tag 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.2">Service Tag 2</NavDropdown.Item>
            </NavDropdown>
            <Button variant="outline-success">
              <Link style={{textDecoration:'none', color:'black'}} to={"/log"}>login/signup</Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
