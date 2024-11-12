import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function ForgotPasswordForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý yêu cầu quên mật khẩu tại đây, ví dụ gửi email khôi phục mật khẩu
    console.log('Email:', email);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={4}>
          <h3>Quên mật khẩu</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Nhập email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Gửi yêu cầu
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ForgotPasswordForm;
