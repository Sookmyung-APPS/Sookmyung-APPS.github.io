import { Container, Nav, Navbar } from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

function Header(props) {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={require("../Assets/apps_logo.png").default}
            width="150"
            height="75"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/introduce">소개</Link></Nav.Link>
            <Nav.Link><Link to="/project">프로젝트</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
