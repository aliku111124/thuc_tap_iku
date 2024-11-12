import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup, Card, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import VouchourModal from './VouchourModal';

function PaymentInfo(props) {

    const { totalAmount, handleCompletePayment,onSelectVoucher ,discount,handleVoucher} = props
    
    const [customerMoney, setCustomerMoney] = useState(0);
    const [change, setChange] = useState(0);
    const [showAlert, setShowAlert] = useState(false);
    const [showModalVouchour, setShowModalVouchour] = useState(false)//show modal giam gia

    //xu li tien thua cua khach
    const handleCustomerMoneyChange = (e) => {
        const customerMoney = parseFloat(e.target.value) || 0;
        const changeAmount = customerMoney - (totalAmount - discount);

        setCustomerMoney(customerMoney);
        setChange(changeAmount > 0 ? changeAmount : 0);
        setShowAlert(changeAmount < 0);
    };



    return (
        <Container>
            <h4>Thông tin thanh toán</h4>
            <Row className="my-4">
            
                <Col md={6}>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <strong>Phiếu giảm giá</strong>
                        <Button size="sm" onClick={() => setShowModalVouchour(true)}>Chọn hoặc nhập mã &gt;</Button>
                    </div>
                    <div className="mb-2">
                        <strong>Tạm tính:</strong> <span>{totalAmount} đ</span>
                    </div>
                    <div className="mb-2">
                        <strong>Giảm giá:</strong> <span>{discount} đ</span>
                    </div>
                    <div className="mb-2">
                        <strong>Tổng tiền:</strong> <span style={{ color: 'red' }}>{totalAmount - discount} đ</span>
                    </div>
                    <InputGroup className="mb-2">
                        <Form.Control
                            type="number"
                            placeholder="Tiền khách đưa"
                            value={customerMoney}
                            onChange={handleCustomerMoneyChange}
                        />
                        <InputGroup.Text>VNĐ</InputGroup.Text>
                    </InputGroup>
                    {showAlert && (
                        <Alert variant="danger">Vui lòng nhập đủ tiền khách đưa!</Alert>
                    )}
                    <div className="mb-2">
                        <strong>Tiền thừa:</strong> <span>{change} đ</span>
                    </div>
                    <div className="mt-3">
                        <strong>Chọn phương thức thanh toán:</strong>
                    </div>
                    <div className="d-flex mt-2">
                        <Button variant="warning" className="me-2" onClick={handleCompletePayment}>
                            Thanh toán bằng tiền mặt
                        </Button>
                        <Button variant="outline-primary" className="me-2">
                            Chuyển khoản
                        </Button>
                        {/* <Button variant="outline-dark">
                            Tiền mặt & Chuyển khoản
                        </Button> */}
                    </div>
                    {/* <Form.Control as="textarea" rows={3} placeholder="Nhập ghi chú..." className="mt-3" /> */}

                    {/* <div>
                        <Button className="btn btn-success" onClick={handleCompletePayment}>
                            Hoàn tất thanh toán
                        </Button>
                    </div> */}
                </Col>
            </Row>
            <VouchourModal
                show={showModalVouchour}
                setShow={setShowModalVouchour}
                onSelectVoucher={onSelectVoucher}
                handleVoucher={handleVoucher}

            />
        </Container>


    );
}

export default PaymentInfo;
