import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logoReact from "/logo192.png";

export default class Navbars extends Component {
  render() {
    return (
      <div>
        <>
          <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
              <Navbar.Brand href="#home">
                <img src={logoReact} />
                React-IoT
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Monitoring</Nav.Link>
                <Nav.Link href="#">Controlling</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
      </div>
    );
  }
}
