// src/components/Navigation.js
import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CartModal from "../content/cart/CartModal";
import { Link } from "react-router-dom";

const Navigation = () => {
  // Khai báo các state bên trong hàm component Navigation
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Sản phẩm A", price: 100, quantity: 1 },
    { id: 2, name: "Sản phẩm B", price: 200, quantity: 2 },
  ]);
  const [showCartModal, setShowCartModal] = useState(false);

  const handleOpenCart = () => setShowCartModal(true);
  const handleCloseCart = () => setShowCartModal(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Thương hiệu</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Trang Chủ</Nav.Link>
          <Nav.Link href="/products">Sản Phẩm</Nav.Link>
          <Nav.Link href="#about">Giới Thiệu</Nav.Link>
          <Nav.Link href="#contact">Liên Hệ</Nav.Link>
        </Nav>
        <Form className="d-flex mx-auto">
          <FormControl
            type="search"
            placeholder="Tìm kiếm"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Tìm kiếm</Button>
        </Form>
        <Nav className="ms-auto">
          <Nav.Link href="#register">Đăng Ký</Nav.Link>
          <Nav.Link href="#login"><Link to="/admin">Đăng nhập</Link></Nav.Link>
          <Button variant="primary" onClick={handleOpenCart}>
            Giỏ hàng
          </Button>
          <Nav.Link href="/cart">Giỏ hàng</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <CartModal
        show={showCartModal}
        handleClose={handleCloseCart}
        cartItems={cartItems}
      />
    </Navbar>
  );
};

export default Navigation;
