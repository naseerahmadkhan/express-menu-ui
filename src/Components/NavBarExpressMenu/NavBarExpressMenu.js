import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBarExpressMenu.css"
import logo from '../../static/img/logo.svg'


const NavBarExpressMenu = () => {
  return (
      <Navbar bg="bg-white" expand="lg" fixed="top" className="shadow-sm p-3 mb-5 bg-white  sidebar">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="/">
          <div className="d-flex">
          <Image className="logo" src={logo}/>
          <h1 className="brand-text">Express Menu</h1>
          </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey={window.location.pathname} className="" >
              <Nav.Link  href="/">Home</Nav.Link>
              <Nav.Link  href="/partner-with-us">Partner with us</Nav.Link>
              <Nav.Link href="/order">Order</Nav.Link>
              <Nav.Link href="/contact-us">Contact us</Nav.Link>
              <Nav.Link href="/login">Login or Signup</Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavBarExpressMenu;
