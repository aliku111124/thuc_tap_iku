import { useEffect, useState } from "react";
import { Row, Col, Form, Button, Table } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import dayjs from "dayjs";
import InputGroup from 'react-bootstrap/InputGroup';


const FormUpdateKhachHang = (props) => {
    const { onTitleChange } = useOutletContext();
    const { handleInputChange, formData, handleImageChange, previewImage } = props;
    return (
        <>
            <div className="container">
                <Form>
                    <div className="backgroud">
                        <Row className="mt-1" >
                            <Col className="col-md-12">
                                <h4>Thông tin khách hàng</h4>
                                <hr></hr>
                            </Col>
                        </Row>

                        <Row className="md-3">
                            <Form.Group as={Col} controlId="formHinhAnh">
                                *Hình ảnh
                                <div className="mb-3">
                                    <Form.Control
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageChange(e)}
                                    />
                                    {formData.hinhAnh && (
                                        // <img
                                        //     src={formData.hinhAnh}
                                        //     alt="Preview"
                                        //     style={{
                                        //         marginTop: '10px',
                                        //         maxWidth: '200px',
                                        //         maxHeight: '200px'
                                        //     }}
                                        // />
                                        <div>
                                            {previewImage && <img src={previewImage} alt="Preview" style={{ width: "150px", height: "150px", objectFit: "cover" }} />}
                                        </div>
                                    )}
                                </div>

                            </Form.Group>
                        </Row>
                        <Row className="md-3">
                            <Form.Group as={Col} controlId="formMa">
                                *Mã khách hàng
                                <Form.Control
                                    placeholder="Nhập mã khách hàng"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    name="ma"
                                    value={formData.ma}
                                    onChange={handleInputChange}
                                />

                            </Form.Group>

                            <Form.Group as={Col} controlId="formTen">
                                *Họ và tên
                                <Form.Control
                                    placeholder="Nhập họ và tên"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    name="ten"
                                    value={formData.ten}
                                    onChange={handleInputChange}
                                />

                            </Form.Group>
                        </Row>

                        <Row className="md-3">
                            <Form.Group as={Col} controlId="formEmail">
                                *Email
                                <Form.Control
                                    placeholder="Nhập email khách hàng"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />

                            </Form.Group>

                            <Form.Group as={Col} controlId="formSDT">
                                *Số điện thoại
                                <Form.Control
                                    placeholder="Nhập số đện thoại"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    name="sdt"
                                    value={formData.sdt}
                                    onChange={handleInputChange}
                                />

                            </Form.Group>
                        </Row>

                        <Row className="md-3">
                            <Form.Group as={Col} controlId="formNgaysinh">
                                *Ngày sinh
                                <Form.Control
                                    //  placeholder="mm/dd/yyyy"
                                    //  labelText="Date Picker label"
                                    //  id="date-picker-single"
                                    //  onChange={date => {
                                    //    console.log(date);}}

                                    type="date"
                                    name="ngaySinh"
                                    value={formData.ngaySinh}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGioitinh">
                                *Giới tính
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
                        </Row>

                        <Row className="md-3">
                            <Form.Group as={Col} controlId="formDiaChi">
                                *Địa chỉ
                                <Form.Control
                                    placeholder="Nhập địa chỉ khách hàng"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    name="diaChi"
                                    value={formData.diaChi}
                                    onChange={handleInputChange}

                                />

                            </Form.Group>

                            <Form.Group as={Col} controlId="formSDT">
                                *Trạng thái
                                <Form.Control
                                    as="select"
                                    name="trangThai"
                                    value={formData.trangThai}
                                    onChange={handleInputChange}

                                >
                                    <option value="Hoạt động">Hoạt động</option>
                                    <option value="Ngừng hoạt động">Ngừng hoạt động</option>
                                </Form.Control>
                            </Form.Group>
                        </Row>
                    </div>
                </Form>

            </div>
        </>
    );
};
export default FormUpdateKhachHang;