import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Table, ButtonToolbar } from "react-bootstrap";
import './AddNhanVien.scss'
import dayjs from "dayjs";
import { FaPlus, FaFileExport, FaEdit, FaTrash } from "react-icons/fa";
import { Link, useOutletContext } from "react-router-dom";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

import InputGroup from 'react-bootstrap/InputGroup';
import { addNewUserNv } from "../../../../services/nhanVien/NhanVienService";

const AddNhanVien = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        hinhAnh: "",
        ma: "",
        ten: "",
        email: "",
        sdt: "",
        diaChi: "",
        cccd: "",
        ngaySinh: dayjs().format("YYYY-MM-DD"),
        gioiTinh: "Nam",
        chucVu: "",
        trangThai: "",
        deleted: 0,
    });

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        console.log("ok");

    };

    const data = new FormData();
    const mapFormDataToFormAddData = async (formData) => {
        try {
            let validNgaySinh = formData.ngaySinh && dayjs(formData.ngaySinh).isValid();
            let ngaySinhISO = validNgaySinh ? dayjs(formData.ngaySinh).toISOString() : null;
            try {

                data.append("ma", formData.ma)
                data.append("ten", formData.ten)
                data.append("email", formData.email)
                data.append("matKhau", "a1234bc")
                data.append("sdt", formData.sdt)
                data.append("diaChi", formData.diaChi)
                data.append("cccd", formData.cccd)
                data.append("ngaySinh", ngaySinhISO)
                data.append("gioiTinh", formData.gioiTinh)
                data.append("trangThai", "Hoạt động")
                data.append("chucVu", "nhanvien")
                data.append("deleted", 0)

                data.append('hinhAnh', formData.hinhAnh || "");


                console.log(data)


            } catch (error) {
                console.error("Lỗi khi thêm sản phẩm:", error);
                toast.error('Thêm user thất bại: ');
            }
        } catch {

        }
    };



    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Lấy tệp đầu tiên được chọn
        console.log("File đã chọn:", file);
        setFormData((prev) => ({
            ...prev,
            hinhAnh: file, // Lưu tệp hình ảnh trong formData
        }));
    };
    const handleSubmitNhanvien = async (e) => {
        e.preventDefault();

        console.log("ok");
        try {

            mapFormDataToFormAddData(formData)
            const res = await addNewUserNv(data);

            toast.success("them thanh cong")
            navigate("/admin/nhan-vien");

        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    // const { onTitleChange } = useOutletContext();
    useEffect(() => {

    }, [formData]);
    return (
        <>
            <div className="container">
                <Form onSubmit={handleSubmitNhanvien}>
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
                                *Họ và Tên
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

                                </Row>
                                {/* hết */}




                            </Col>
                        </Row>
                    </div>
                    <Row className="buttonAdd">
                        <button type="submit" className="btn btn-outline-warning">Thêm Nhân Viên</button>
                    </Row>
                </Form>
            </div>

        </>
    );
};
export default AddNhanVien;