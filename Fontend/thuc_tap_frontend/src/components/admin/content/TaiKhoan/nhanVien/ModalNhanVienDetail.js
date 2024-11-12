import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BiSolidUserDetail } from "react-icons/bi";
import dayjs from "dayjs";
import FormUpdateNhanVien from './FormUpdateNhanVien';
import { updateNhanVien } from '../../../../../services/nhanVien/NhanVienService';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
function ModalNhanVienDetail(props) {

    const { item, fetchListNhanVien } = props;
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formData, setFormData] = useState({
        hinhAnh: item.hinhAnh,
        ma: item.ma,
        ten: item.ten,
        email: item.email,
        sdt: item.sdt,
        diaChi: item.diaChi,
        cccd: item.cccd,
        ngaySinh: dayjs(item.ngaySinh).format("YYYY-MM-DD"),
        gioiTinh: item.gioiTinh,
        trangThai: item.trangThai,
        chucVu: item.chucVu,
        deleted: item.deleted = 0,
    });

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        console.log(formData);

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

        const data = new FormData();
        data.append("ma", formData.ma);
        data.append("ten", formData.ten);
        data.append("email", formData.email);
        data.append("matKhau", "a1234bc"); // Assuming default password
        data.append("sdt", formData.sdt);
        data.append("diaChi", formData.diaChi);
        data.append("cccd", formData.cccd);
        data.append("ngaySinh", dayjs(formData.ngaySinh).toISOString());
        data.append("gioiTinh", formData.gioiTinh);
        data.append("trangThai", "Hoạt động");
        data.append("chucVu", "nhanvien");
        data.append("deleted", 0);
        
        if (formData.hinhAnh) {
            data.append("hinhAnh", formData.hinhAnh); // Append image file only if selected
        }

        try {
            await updateNhanVien(data, item.id);
            toast.success("Cập nhật thành công!");
            fetchListNhanVien();
            handleClose();
            navigate("/admin/nhan-vien");
        } catch (error) {
            console.error("Error updating nhan vien:", error);
            toast.error('Cập nhật nhân viên thất bại.');
        }
    };

    // const { onTitleChange } = useOutletContext();
    useEffect(() => {
        // const title = "Thêm Nhân Viên";
        // onTitleChange(title);
        
    }, [formData]);




    return (
        <>

            <span onClick={handleShow} ><BiSolidUserDetail /></span>


            <Modal show={show} size='xl' onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormUpdateNhanVien
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleFileChange={handleFileChange}
                    >
                    </FormUpdateNhanVien>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmitNhanvien}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalNhanVienDetail;