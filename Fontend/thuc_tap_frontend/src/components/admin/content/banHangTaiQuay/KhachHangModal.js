import dayjs from 'dayjs';
import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addCustomerAction } from '../../../../redux/action/customerActions';
import { toast } from 'react-toastify';
import { toastError, toastSuccess } from '../../../../configs/ToastConfig';

function KhachHangModal(props) {

    const { handleClose, show } = props
    const [formData, setFormData] = useState({
        ma: "",
        ten: "",
        email: "",
        sdt: "",
        ngaySinh: dayjs().format("YYYY-MM-DD"),
        gioiTinh: "Nam",
        diaChi: "",
        deleted: 0,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const dispatch = useDispatch();

    const handleSubmitFormCustomer=(e)=>{
        const formAdd = {
            ma: formData.ma,
            ten: formData.ten,
            email: formData.email,
            sdt: formData.sdt,
            ngaySinh: dayjs(formData.ngaySinh).toISOString(),
            gioiTinh: formData.gioiTinh,
            diaChi: formData.diaChi,
            trangThai: formData.trangThai,
            deleted: formData.deleted,
        }
        e.preventDefault();
        try{
            dispatch(addCustomerAction(formAdd))
            toastSuccess("Thêm thành công")
            handleClose()
        }catch(error){
            toastError("Thêm thất bại")
            console.log(error)
        }
        
    }

    

    return (
        <>


            <Modal
                show={show} onHide={handleClose}
                size='xl'
                backdrop='static'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Thêm khách hàng</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form
                    // onSubmit={hanldeSubmitKhachHang}

                    >
                        <div className="backgroud">


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
                        <Row className="buttonAdd mt-3">

                            <Col className='col-10'>

                            </Col>
                            <Col className='col-2'>

                                <button type="submit" className="btn btn-outline-danger" onClick={handleSubmitFormCustomer}>Thêm Khách Hàng</button>
                            </Col>

                        </Row>
                    </Form>



                </Modal.Body>

            </Modal>
        </>
    );
}

export default KhachHangModal;