import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Image,
} from "react-bootstrap";

const User = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    avatar: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Lấy thông tin người dùng từ API hoặc local storage
    // const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedUser = {
      id: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      avatar:
        "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
    };
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      setUser({ ...user, avatar: e.target.files[0] });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const handleSave = () => {
    // Lưu thông tin người dùng vào API hoặc local storage
    localStorage.setItem("user", JSON.stringify(user));
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <Container>
      <h2>Thông tin người dùng</h2>
      <Card>
        <Card.Body>
          <Form>
            <Form.Group as={Row} controlId="formAvatar">
              <Form.Label column sm={2}>
                Ảnh đại diện:
              </Form.Label>
              <Col sm={10}>
                {user.avatar ? (
                  <Image src={user.avatar} alt="Avatar" thumbnail />
                ) : (
                  <Button variant="secondary" as="label" htmlFor="avatar-input">
                    Tải ảnh
                  </Button>
                )}
                <Form.Control
                  type="file"
                  name="avatar"
                  id="avatar-input"
                  accept="image/*"
                  disabled={!isEditing}
                  onChange={handleChange}
                  style={{ display: "none" }}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formId">
              <Form.Label column sm={2}>
                ID:
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  name="id"
                  value={user.id}
                  disabled={!isEditing}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formName">
              <Form.Label column sm={2}>
                Họ và tên:
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  name="name"
                  value={user.name}
                  disabled={!isEditing}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formEmail">
              <Form.Label column sm={2}>
                Email:
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="email"
                  name="email"
                  value={user.email}
                  disabled={!isEditing}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPhone">
              <Form.Label column sm={2}>
                Số điện thoại:
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={user.phone}
                  disabled={!isEditing}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formAddress">
              <Form.Label column sm={2}>
                Địa chỉ:
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="textarea"
                  name="address"
                  value={user.address}
                  disabled={!isEditing}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            {isEditing ? (
              <Button variant="primary" onClick={handleSave}>
                Lưu
              </Button>
            ) : (
              <Button variant="primary" onClick={handleEdit}>
                Chỉnh sửa
              </Button>
            )}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default User;
