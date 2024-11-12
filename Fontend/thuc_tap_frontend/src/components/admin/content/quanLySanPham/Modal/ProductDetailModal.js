import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { postCreatNewProductDetail, updateProductDetail } from '../../../../../services/sanPham/SanPhamChiTietService';
import FormProductDetail from '../form/FormProductDetail';
import { useDispatch } from 'react-redux';
import { getProductsDetail } from '../../../../../redux/action/productDetailAction';

const ProductDetailModal = (props) => {
    const dispatch = useDispatch();
    const {
        show, handleClose, productDetail, fetchListProductDetail
    } = props

    // const handleSaveProductDetail = async (formData) => {

    //     try {
    //         let res = await postCreatNewProductDetail(formData);
    //         if (res.data) {
    //             toast.success('Thêm thành công');
    //             handleClose();
    //         }
    //     } catch (error) {
    //         console.error("Lỗi khi thêm sản phẩm:", error);
    //         console.error("Chi tiết lỗi:", error.response.data); // In chi tiết lỗi
    //         toast.error('Thêm sản phẩm thất bại: ' + error.response.data.message); // Hiển thị thông điệp lỗi từ server
    //     }
    // }
    
    
    const handleSaveProductDetail = async (formData) => {
        try {
            const data = new FormData(); // Tạo FormData object

            // Thêm các trường khác vào FormData
            data.append('idSanPham', formData.idSanPham.id);
            data.append('idHang', formData.idHang.id);
            data.append('idDanhMuc', formData.idDanhMuc.id);
            data.append('idDeGiay', formData.idDeGiay.id);
            data.append('idMauSac', formData.idMauSac.id);
            data.append('idKichThuoc', formData.idKichThuoc ? formData.idKichThuoc.id : ''); // Kiểm tra giá trị null
            data.append('soLuong', formData.soLuong);
            data.append('giaBan', formData.giaBan);
            data.append('giaNhap', formData.giaNhap);
            data.append('trangThai', formData.trangThai);
            // Thêm hình ảnh vào FormData
            if (formData.hinhAnh) {
                data.append('hinhAnh', formData.hinhAnh);
            }
            // const data = new FormData(); // Sử dụng FormData để gửi dữ liệu
            // data.append('hinhAnh', formData.hinhAnh); // Thêm file ảnh
            // data.append('request', JSON.stringify({
            //     idHang: formData.idHang.id,
            //     idDanhMuc: formData.idDanhMuc.id,
            //     idDeGiay: formData.idDeGiay.id,
            //     idSanPham: formData.idSanPham.id,
            //     idMauSac: formData.idMauSac.id,
            //     idKichThuoc: formData.idKichThuoc.id,
            //     soLuong: formData.soLuong,
            //     giaBan: formData.giaBan,
            //     giaNhap: formData.giaNhap,
            //     trangThai: formData.trangThai,
            // }));


            console.log(...data);
            // Gửi dữ liệu lên server
            let res = await postCreatNewProductDetail(data);
            if (res.data) {
                toast.success('Thêm thành công');
                handleClose();
            }

        } catch (error) {
            console.error("Lỗi khi thêm sản phẩm:", error);
            toast.error('Thêm sản phẩm thất bại: ' + error.response.data.message);
        }
    };
    // const [formData, setFormData] = useState({
    //     hinhAnh: null,
    //     // Các trường khác của formData
    // });
    

    // useEffect(() => {
        
    //     console.log("Giá trị của hinhAnh:", formData.hinhAnh);
    // }, [formData.hinhAnh]);

    // console.log("Giá trị của formData:", formData);
    const handleUpdateProductDetail = async (id, formData) => {

        try {
            // Tạo một FormData mới
            console.log('ha', formData.hinhAnh)
            const data = new FormData();
            data.append('idSanPham', formData.idSanPham.id);
            data.append('idHang', formData.idHang.id);
            data.append('idDanhMuc', formData.idDanhMuc.id);
            data.append('idDeGiay', formData.idDeGiay.id);
            data.append('idMauSac', formData.idMauSac.id);
            data.append('idKichThuoc', formData.idKichThuoc ? formData.idKichThuoc.id : ''); // Kiểm tra giá trị null
            data.append('soLuong', formData.soLuong);
            data.append('giaBan', formData.giaBan);
            data.append('giaNhap', formData.giaNhap);
            data.append('trangThai', formData.trangThai);
            // const fileInput = document.querySelector("#file-input"); // Chọn đúng input element
            // const file = fileInput?.files?.[0];  // Lấy file đầu tiên
            // if (file) {
            //     data.append("hinhAnh", file);
            // }

            // Log hình ảnh để kiểm tra
            console.log("Hình ảnh:", data.get("hinhAnh"));
            console.log("Loại của hình ảnh:", typeof formData.hinhAnh);
            console.log("request :", data.get("request"));
            


            // Nếu có hình ảnh, thêm vào formData
            if (formData.hinhAnh && formData.hinhAnh instanceof File) {
                console.log("Loại hình ảnh:", formData.hinhAnh instanceof File); 
                data.append('hinhAnh', formData.hinhAnh);
                console.log("Hình ảnh sau khi append:", data.get('hinhAnh'));
            }

            

            // Gửi yêu cầu cập nhật sản phẩm
            let res = await updateProductDetail(id, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }


            );
            if (res.data) {
                toast.success('Sửa thành công');
                handleClose();
                dispatch(getProductsDetail());
            }
        } catch (error) {
            console.error("Lỗi khi sửa sản phẩm:", error);
            // Kiểm tra nếu có response từ backend và lấy thông điệp lỗi
            const errorMessage = error.response?.data?.message || 'Có lỗi xảy ra';
            toast.error('Sửa sản phẩm thất bại: ' + errorMessage);
        }

    }

   
    return (
        <>

            <Modal

                show={show} onHide={handleClose}
                size='xl'
                backdrop="static"
            >
                <Modal.Header closeButton>
                    {/* <Modal.Title>Them</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>

                    <FormProductDetail productDetail={productDetail}
                        handleSaveProductDetail={handleSaveProductDetail}
                        handleClose={handleClose}
                        handleUpdateProductDetail={handleUpdateProductDetail}

                    // fetchListProductDetail={fetchListProductDetail}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProductDetailModal;