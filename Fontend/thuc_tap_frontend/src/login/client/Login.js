import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getStaffByIdAction } from "../../redux/action/staffActions";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý đăng nhập tại đây
        console.log('Email:', email);
        console.log('Password:', password);
    };
    const dispatch = useDispatch();
    const {staff} = useSelector(
        (state) => state.staff
    )
  
    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={4}>
                    <h3>Đăng nhập</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Nhập email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="mb-3">
                            <Form.Label>Mật khẩu</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Nhập mật khẩu"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Link to="/admin">
                            <Button variant="primary" type="submit" className="w-100">
                                Đăng nhập
                            </Button>
                        </Link>
                    </Form>

                    <div className="mt-3 text-center">
                        <Link to="/forgot-password" className="d-block">
                            Quên mật khẩu?
                        </Link>
                        <span>Bạn chưa có tài khoản? </span>
                        <Link to="/register">Đăng ký</Link>
                    </div>
                    
                </Col>
            </Row>
        </Container>
    );
};
export default Login;
