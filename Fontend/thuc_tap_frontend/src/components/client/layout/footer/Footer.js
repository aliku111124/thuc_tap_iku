// src/components/Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h4>Amity Shop</h4>
            <p>Địa chỉ: 123 Đường ABC, Quận 1, TP. HCM</p>
            <p>Email: contact@amityshop.com</p>
            <p>Điện thoại: 0123 456 789</p>
          </Col>
          <Col md={4}>
            <h4>Liên kết nhanh</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-white">
                  Trang Chủ
                </a>
              </li>
              <li>
                <a href="#products" className="text-white">
                  Sản Phẩm
                </a>
              </li>
              <li>
                <a href="#about" className="text-white">
                  Giới Thiệu
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white">
                  Liên Hệ
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h4>Theo dõi chúng tôi</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#facebook" className="text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#instagram" className="text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#twitter" className="text-white">
                  Twitter
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>© 2024 Amity Shop. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
