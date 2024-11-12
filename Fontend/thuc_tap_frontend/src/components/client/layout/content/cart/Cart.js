import React, { useState } from "react";
import {
  Table,
  Button,
  InputGroup,
  FormControl,
  Container,
} from "react-bootstrap";
import { IoMdTrash } from "react-icons/io";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  return (
    <div>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sản Phẩm</th>
              <th>Đơn Giá</th>
              <th>Số Lượng</th>
              <th>Số Tiền</th>
              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Dép Nữ MWC 8347 - Dép Nữ Q uài Ngang Bản To Nhựa Cách Nhiệt...
              </td>
              <td>250.000 đ</td>
              <td>
                <InputGroup>
                  <Button
                    variant="outline-secondary"
                    onClick={() => handleQuantityChange(quantity - 1)}
                  >
                    -
                  </Button>
                  <FormControl
                    type="number"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(e.target.value)}
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => handleQuantityChange(quantity + 1)}
                  >
                    +
                  </Button>
                </InputGroup>
              </td>
              <td>250.000 đ</td>
              <td>
                <Button variant="danger">
                  <IoMdTrash />
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>

        <div className="d-flex justify-content-between align-items-center">
          <div>Mã Coupon</div>
          <div>--Chon--</div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div>Sử dụng điểm (Điểm của bạn: 00)</div>
          <div>00 đ</div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div>Tổng tiền hàng</div>
          <div>250.000 đ</div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div>Giảm giá sản phẩm</div>
          <div>- 00 đ</div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div>Giảm giá coupon</div>
          <div>- 00 đ</div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div>Phí vận chuyển</div>
          <div>00 đ</div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div>TỔNG</div>
          <div>250.000 đ</div>
        </div>

        <Button variant="danger" className="w-100">
          Đặt Hàng
        </Button>
      </Container>
    </div>
  );
};

export default Cart;
