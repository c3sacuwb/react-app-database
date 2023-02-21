import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <Navbar bg="light" variant="light" fixed="top">
    <Container>
      <Navbar.Brand>Project Name</Navbar.Brand>
      <Nav className="me-auto">
        <NavLink exact to="/">
          <span>Home</span>
        </NavLink>
      </Nav>
    </Container>
  </Navbar>
);

export default Header;
