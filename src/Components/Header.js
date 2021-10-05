import { Container, Nav, Navbar } from "react-bootstrap";
import React from "react";

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
            <Nav.Link href="/introduce">소개</Nav.Link>
            <Nav.Link href="/project">프로젝트</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
