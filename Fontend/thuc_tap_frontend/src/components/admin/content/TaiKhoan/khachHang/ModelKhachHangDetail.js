import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import dayjs from "dayjs";
import FormUpdateKhachHang from './FormUpdateKhachHang';
import { updateCustomer } from '../../../../../services/khachHang/KhachHangService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ModalKhachHangDetail(props) {
    const { khachHang, show, handleClose, onUpdate, fatchListKhachHang } = props;
    const navigate = useNavigate();

    // Khởi tạo formData với giá trị từ khachHang và ảnh mặc định là khachHang.hinhAnh
    const [formData, setFormData] = useState({
        hinhAnh: khachHang?.hinhAnh || "",
        ma: khachHang?.ma || "",
        ten: khachHang?.ten || "",
        email: khachHang?.email || "",
        sdt: khachHang?.sdt || "",
        ngaySinh: khachHang ? dayjs(khachHang.ngaySinh).format("YYYY-MM-DD") : "",
        gioiTinh: khachHang?.gioiTinh || "",
        diaChi: khachHang?.diaChi || "",
        trangThai: khachHang?.trangThai ? "Hoạt động" : "Ngưng hoạt động",
    });

    const [previewImage, setPreviewImage] = useState(khachHang?.hinhAnh || "");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreviewImage(URL.createObjectURL(file));
            setFormData((prev) => ({
                ...prev,
                hinhAnh: file,
            }));
        }
    };

    const handleSubmitKhachhang = async () => {
        const data = new FormData();
        data.append("ma", formData.ma);
        data.append("ten", formData.ten);
        data.append("email", formData.email);
        data.append("matKhau", "a1234bc");
        data.append("sdt", formData.sdt);
        data.append("diaChi", formData.diaChi);
        data.append("ngaySinh", dayjs(formData.ngaySinh).toISOString());
        data.append("gioiTinh", formData.gioiTinh);
        data.append("trangThai", formData.trangThai);
        data.append("chucVu", "khachhang");

        // Kiểm tra nếu có ảnh mới thì dùng ảnh mới, nếu không thì giữ nguyên ảnh hiện tại
        if (formData.hinhAnh !== khachHang.hinhAnh) {
            data.append("hinhAnh", formData.hinhAnh); 
        }

        try {
            await updateCustomer(data, khachHang.id);
            toast.success("Cập nhật thành công!");
            fatchListKhachHang();
            handleClose();
            navigate("/admin/khach-hang");
        } catch (error) {
            console.error("Error updating khách hàng:", error);
            toast.error("Cập nhật khách hàng thất bại.");
        }
    };

    useEffect(() => {
        if (khachHang) {
            setFormData({
                hinhAnh: khachHang.hinhAnh,
                ma: khachHang.ma,
                ten: khachHang.ten,
                email: khachHang.email,
                sdt: khachHang.sdt,
                ngaySinh: dayjs(khachHang.ngaySinh).format("YYYY-MM-DD"),
                gioiTinh: khachHang.gioiTinh,
                diaChi: khachHang.diaChi,
                trangThai: khachHang.trangThai ? "Hoạt động" : "Ngưng hoạt động",
            });
            setPreviewImage(khachHang.hinhAnh);
        }
    }, [khachHang]);

    return (
        <Modal show={show} size='xl' onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Chi tiết khách hàng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormUpdateKhachHang
                    formData={formData} previewImage={previewImage}
                    handleInputChange={(e) => {
                        const { name, value } = e.target;
                        setFormData((prev) => ({ ...prev, [name]: value }));
                    }}
                    handleImageChange={handleImageChange}
                />
               
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Đóng
                </Button>
                <Button variant="primary" onClick={handleSubmitKhachhang}>
                    Lưu thay đổi
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalKhachHangDetail;
