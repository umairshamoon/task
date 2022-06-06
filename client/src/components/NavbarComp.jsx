import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
const NavbarComp = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
    >
      <Container>
        <Navbar.Brand href='#home'>Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#allproducts'>
              Your Products
            </Nav.Link>
            <Nav.Link href='#myproducts'>Add Product</Nav.Link>
            <Nav.Link href='#addproduct'>Admin Request</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='#logout'>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
