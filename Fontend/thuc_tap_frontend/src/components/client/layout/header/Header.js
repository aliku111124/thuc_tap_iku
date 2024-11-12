// src/components/Header.js
import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
