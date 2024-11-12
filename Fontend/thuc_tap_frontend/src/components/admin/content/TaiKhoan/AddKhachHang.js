import { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import './AddKhachHang.scss'
import { useOutletContext } from "react-router-dom";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { addNewCustomer } from "../../../../services/khachHang/KhachHangService";
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
const AddKhachHang = () => {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({

        hinhAnh: "",
        ma: "",
        ten: "",
        email: "",
        sdt: "",
        ngaySinh: dayjs().format("YYYY-MM-DD"),
        gioiTinh: "Nam",
        diaChi: "",
        chucVu:"khachhang",
        trangThai:""
        // deleted: 0,
    });

    // const [formAdd, setFormAdd] = useState({
    //     hinhAnh: "",
    //     ma: "",
    //     ten: "",
    //     email: "",
    //     sdt: "",
    //     ngaySinh: dayjs().format("YYYY-MM-DD"),
    //     gioiTinh: "Nam",
    //     diaChi: "",
    //     deleted: 0,
    // });
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
                data.append("sdt", formData.sdt)
                data.append("diaChi", formData.diaChi)
                data.append("ngaySinh", ngaySinhISO)
                data.append("gioiTinh", formData.gioiTinh)
                data.append("chucVu", "khachhang")
                data.append("trangThai", "Hoạt động")
                // data.append("deleted", 0)

                // data.append('hinhAnh', formData.hinhAnh || "");

                // console.log(data)
                if (formData.hinhAnh !== data.hinhAnh) {
                    data.append("hinhAnh", formData.hinhAnh); 
                }

            } catch (error) {
                console.error("Lỗi khi thêm :", error);
                toast.error('Thêm thất bại: ');
            }
        } catch {

        }
    };

    // const handleInputChange = (e) => {

    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    //     mapFormDataToFormAdd();
    // };

    // const mapFormDataToFormAdd = () => {
    //     setFormAdd({
    //         hinhAnh:formData.hinhAnh,
    //         ma: formData.ma,
    //         ten: formData.ten,
    //         email: formData.email,
    //         sdt: formData.sdt,
    //         ngaySinh: dayjs(formData.ngaySinh).toISOString(),
    //         gioiTinh: formData.gioiTinh,
    //         diaChi: formData.diaChi,
    //         trangThai: formData.trangThai,
    //         deleted: formData.deleted,
    //     });
    // };

    const hanldeSubmitKhachHang = async (e) => {
        e.preventDefault();
        console.log("ok");
       // console.log("formData");
        try {
            mapFormDataToFormAddData(formData)
            const response = await addNewCustomer(data);
            navigate("/admin/khach-hang");
            toast.success("Thêm thành công")
           // console.log(response.data);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
       
    };
   // const { onTitleChange } = useOutletContext();
    useEffect(() => {
        // const title = "Thêm khách hàng";
        // onTitleChange(title);
        // mapFormDataToFormAddData();
    }, [formData]);

    // Add image handling function
    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setFormData({
    //                 ...formData,
    //                 hinhAnh: reader.result
    //             });
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };
    const [previewImage, setPreviewImage] = useState(formData?.hinhAnh || "");
    const handleImageChange = (e) => {
         const file = e.target.files[0]; // Lấy tệp đầu tiên được chọn
         if (file) {
            setPreviewImage(URL.createObjectURL(file));
            setFormData((prev) => ({
                ...prev,
                hinhAnh: file,
            }));
        }
         // console.log("File đã chọn:", file);
        // setFormData((prev) => ({
        //     ...prev,
        //     hinhAnh: file, // Lưu tệp hình ảnh trong formData
        // }));
    };

    return (
        <>
            <div className="container">
                <Form onSubmit={hanldeSubmitKhachHang}>
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
                                        onChange={handleImageChange}
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
                    <Row className="buttonAdd">
                        <button type="submit" class="btn btn-outline-danger">Thêm Khách Hàng</button>
                    </Row>
                </Form>

            </div>
        </>
    );
};
export default AddKhachHang;