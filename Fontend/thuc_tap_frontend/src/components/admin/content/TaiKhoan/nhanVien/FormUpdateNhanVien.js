import { useEffect, useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import dayjs from "dayjs";
import InputGroup from 'react-bootstrap/InputGroup';
const FormUpdateNhanVien = (props) => {
    const { onTitleChange } = useOutletContext();
    const { handleInputChange, formData, handleFileChange } = props;

    return (
        <>
            <div className="container">
                <Form >
                    <div className="backgroud">
                        <Row className="mt-1" >
                            <Col className="col-md-4">
                                <h4>Thông Tin Nhân Viên</h4>
                                <hr></hr>
                            </Col>
                            <Col className="col-md-8">
                                <h4>Thông tin chi tiết</h4>
                                <hr></hr>
                            </Col>
                        </Row>
                        <Row className="col-md-12">
                            <Col className="col-md-4">

                                <h2>Chờ Big Update</h2>
                                *Mã nhân viên
                                <InputGroup className="md-3">
                                    <Form.Control
                                        placeholder="Nhập Mã Nhân Viên"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        name="ma"
                                        value={formData.ma}
                                        onChange={handleInputChange}
                                    />
                                </InputGroup>
                                *Họ và tên
                                <InputGroup className="md-3">
                                    <Form.Control
                                        placeholder="Nhập Họ Và Tên"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        name="ten"
                                        value={formData.ten}
                                        onChange={handleInputChange}
                                    />
                                </InputGroup>
                                <Form.Group>
                                    <Form.Label>Hình ảnh</Form.Label>
                                    <Form.Control
                                        type="file"
                                        accept="image/*"
                                        name="hinhAnh"
                                        onChange={(e) => handleFileChange(e)}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col className="col-md-8">

                                <Row className="nhap-du-lieu">
                                    <Col>
                                        *Số CCCD
                                        <InputGroup className="md-3">
                                            <Form.Control
                                                placeholder="Nhập "
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                                name="cccd"
                                                value={formData.cccd}
                                                onChange={handleInputChange}
                                            />
                                        </InputGroup>
                                    </Col>



                                    <Col>
                                        *Giới Tính
                                        <Form.Group>
                                            <div className="mb-3">
                                                <Form.Check
                                                    inline
                                                    label="Nam"
                                                    name="gioiTinh"
                                                    type={"radio"}
                                                    value="Nam"
                                                    checked={formData.gioiTinh === "Nam"}
                                                    onChange={handleInputChange}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="Nữ"
                                                    name="gioiTinh"
                                                    type={"radio"}
                                                    value="Nữ"
                                                    checked={formData.gioiTinh === "Nữ"}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                {/* hàng 2 */}


                                <Row className="nhap-du-lieu">
                                    <Col>
                                        *Ngày Sinh
                                        <Form.Group controlId="formStartDate" className="mx-2">
                                            <Form.Control
                                                type="date"
                                                name="ngaySinh"
                                                value={formData.ngaySinh}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        *Email
                                        <InputGroup className="md-3">
                                            <Form.Control
                                                placeholder="Nhập Email"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                        </InputGroup>
                                    </Col>
                                </Row>

                                {/* hàng 3 */}

                                <Row className="nhap-du-lieu">
                                    <Col>
                                        *Số Điện Thoại
                                        <InputGroup className="md-3">
                                            <Form.Control
                                                placeholder="Nhập SDT"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                                name="sdt"
                                                value={formData.sdt}
                                                onChange={handleInputChange}
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        *Địa Chỉ
                                        <InputGroup className="md-3">
                                            <Form.Control
                                                placeholder="Nhập Địa Chỉ"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                                name="diaChi"
                                                value={formData.diaChi}
                                                onChange={handleInputChange}
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        *Trạng thái
                                        <Form.Control
                                            as="select"
                                            name="trangThai"
                                            value={formData.trangThai}
                                            onChange={handleInputChange}

                                        >
                                            <option value="Hoạt động">Hoạt động</option>
                                            <option value="Không hoạt động">Không hoạt động</option>
                                        </Form.Control>
                                    </Col>
                                </Row>
                                {/* hết */}




                            </Col>
                        </Row>
                    </div>

                </Form>
            </div>

        </>
    );
};
export default FormUpdateNhanVien;
