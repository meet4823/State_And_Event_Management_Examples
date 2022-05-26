
import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./ListN.css";
class Navi extends Component {
  render() {
    return (
      <div id="nav">
        <Navbar>
          <Navbar.Brand href="#home">
           
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/" id="text">
                Home
              </Nav.Link>
              <Nav.Link href="/state" id="text">
                About US
              </Nav.Link>
              <Nav.Link href="/click" id="text">
                Function
              </Nav.Link>
              <Nav.Link href="/play" id="text">
                More
              </Nav.Link>
              <Nav.Link href="/mouse" id="text">
                Our Work
              </Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Navi;