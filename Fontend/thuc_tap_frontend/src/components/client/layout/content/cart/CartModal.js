// CartModal.js
import React from "react";
import { Modal, Button, ListGroup } from "react-bootstrap";

const CartModal = ({ show, handleClose, cartItems }) => {
  // Tính tổng giá trị giỏ hàng
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Giỏ hàng của bạn</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length > 0 ? (
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id}>
                {item.name} - {item.quantity} x {item.price}k
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <p>Giỏ hàng trống</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <h5>Tổng cộng: {totalAmount}k</h5>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
        <Button variant="primary">Thanh toán</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
