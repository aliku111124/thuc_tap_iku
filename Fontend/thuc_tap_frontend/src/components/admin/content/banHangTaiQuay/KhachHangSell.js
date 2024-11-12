import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import KhachHangModal from "./KhachHangModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCustomerBySDT, searchCustomers } from "../../../../redux/action/customerActions";

const KhachHangSell = () => {


    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const dispatch = useDispatch();
    const { selectedCustomer } = useSelector((state) => state.customer || {})

    const getAlllKH = () => {
        dispatch(searchCustomers())
    }

    const [sdt, setSdt] = useState("");
    const handleSearchChange = (e) => {
        const value = e.target.value
        setSdt(value)
        dispatch(searchCustomerBySDT(value))
    }

    // const selectedCustomerBySdt = () => {
    //     alert(selectedCustomer.id)
    // }
    return (

        <>
            <Container>
                <h2 className="mb-4">Thông tin khách hàng</h2>
                <Row>
                    <Col>
                        <div>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    value={sdt}
                                    onChange={handleSearchChange}
                                    placeholder="Nhập  SDT "
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="primary"
                                    onClick={handleShow}
                                >
                                    Thêm khách hàng
                                </Button>
                            </InputGroup>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            {selectedCustomer ? (<table className="table table-bordered" >
                                <tbody>
                                    <tr>
                                        <th>Tên khách hàng</th>
                                        <th>Email</th>
                                        <th>Địa chỉ</th>
                                    </tr>
                                    <tr>
                                        <td>{selectedCustomer.ten}</td>
                                        <td>{selectedCustomer.email}</td>
                                        <td>{selectedCustomer.diaChi}</td>
                                    </tr>
                                </tbody>
                            </table>) : (
                                <div>
                                    Vui lòng chọn hoặc thêm mới khách hàng
                                </div>
                            )}
                            {/* <button>test</button> */}
                        </div>
                    </Col>
                </Row>


            </Container>

            <KhachHangModal
                handleShow={handleShow}
                show={show}
                handleClose={handleClose}
            />
        </>
    )
}

export default KhachHangSell;