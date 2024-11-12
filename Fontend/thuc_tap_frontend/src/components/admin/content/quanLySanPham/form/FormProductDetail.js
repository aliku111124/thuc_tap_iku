

import { useEffect, useState } from "react";
import axiosInstance from "../../../../../constants/axiosInstance";
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';
import { Combobox } from 'react-widgets';
import 'react-widgets/styles.css';
import '../../quanLySanPham/scss/DetailViewSPCT.scss';
import { updateProductDetail } from "../../../../../services/sanPham/SanPhamChiTietService";
import { useDispatch } from "react-redux";
import { getProductsDetail } from "../../../../../redux/action/productDetailAction";
import { toast } from "react-toastify";

const FormProductDetail = (props) => {
    const { productDetail, handleSaveProductDetail, handleUpdateProductDetail, handleClose } = props;

    const [formData, setFormData] = useState({

        idSanPham: {
            // id:null,
            // ten:null
            idChatLieu: {
                id: null
            },
            idLopLot: {
                id: null
            }
        },
        idHang: {
            id: null
        },
        idDanhMuc: {
            id: null
        },
        idDeGiay: {
            id: null
        },
        idMauSac: {
            id: null
        },
        idKichThuoc: {
            id: null
        },

        soLuong: "",
        giaBan: "",
        giaNhap: "",
        trangThai: "Hoạt động",
        hinhAnh: ""
    });

    const [hangList, setHangList] = useState([]);
    const [danhMucList, setDanhMucList] = useState([]);
    const [deGiayList, setDeGiayList] = useState([]);
    const [mauSacList, setMauSacList] = useState([]);
    const [kichThuocList, setKichThuocList] = useState([]);
    const [sanPhamList, setSanPhamList] = useState([]);

    const fetchHang = async () => {
        const res = await axiosInstance.get("/admin/company/all");
        setHangList(res.data);

    };


    const fetchDanhMuc = async () => {
        const res = await axiosInstance.get("/admin/list/all");
        setDanhMucList(res.data);
    };

    const fetchDeGiay = async () => {
        const res = await axiosInstance.get("/admin/sole/all");
        setDeGiayList(res.data);
    };

    const fetchMauSac = async () => {
        const res = await axiosInstance.get("/admin/color/all");
        setMauSacList(res.data);
    };

    const fetchKichThuoc = async () => {
        const res = await axiosInstance.get("/admin/size/all");
        setKichThuocList(res.data);
    };

    const fetchSanPham = async () => {
        const res = await axiosInstance.get("/admin/product/all");
        setSanPhamList(res.data);
    };


    useEffect(() => {
        fetchHang();
        fetchDanhMuc();
        fetchDeGiay();
        fetchMauSac();
        fetchKichThuoc();
        fetchSanPham();


        if (productDetail) {

            setFormData({
                idSanPham: {
                    id: productDetail.idSanPham,
                    ten: productDetail?.ten

                },
                idHang: {
                    id: productDetail.idHang,
                    ten: productDetail.hang
                },
                idDanhMuc: {
                    id: productDetail.idDanhMuc,
                    ten: productDetail.danhMuc
                },
                idDeGiay: {
                    id: productDetail.idDeGiay,
                    ten: productDetail.deGiay
                },
                idMauSac: {
                    id: productDetail.idMauSac,
                    ten: productDetail.mauSac
                },
                idKichThuoc: {
                    id: productDetail.idKichThuoc,
                    ten: productDetail.kichThuoc
                },

                soLuong: productDetail.soLuong,
                giaBan: productDetail.giaBan,
                giaNhap: productDetail.giaNhap,
                trangThai: productDetail.trangThai,
                 hinhAnh: productDetail.hinhAnh
                //hinhAnh: null
            });

        }



    }, [productDetail]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };




    const handleSanPhamChange = (value) => {

        setFormData((prev) => ({
            ...prev,
            idSanPham: {
                id: value.id,
                ten: value.ten,
                idChatLieu: {
                    id: value.idChatLieu
                },
                idLopLot: {
                    id: value.idLopLot
                }
            }

        }));

        console.log("mmmm", value)
    };

    //hình ảnh 
    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Lấy tệp đầu tiên được chọn
        console.log("File đã chọn:", file);
        setFormData((prev) => ({
            ...prev,
            hinhAnh: file, // Lưu tệp hình ảnh trong formData
        }));
    };
    const handleHangChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            idHang: value,

        }));
    };

    const handleDanhMucChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            idDanhMuc: value,

        }));
    };

    const handleDeGiayChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            idDeGiay: value,

        }));
    };

    const handleMauSacChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            idMauSac: value,

        }));
    };

    const handleKichThuocChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            idKichThuoc: value,

        }));
    };
    // const dispatch = useDispatch();
    // const handleUpdateProductDetail_test = async (id, formData) => {

    //     try {
    //         // Tạo một FormData mới
    //         console.log('ha', formData.hinhAnh)
    //         const data = new FormData();
    //         data.append('request', JSON.stringify({
    //             idSanPham: formData.idSanPham.id,
    //             idHang: formData.idHang.id,
    //             idDanhMuc: formData.idDanhMuc.id,
    //             idDeGiay: formData.idDeGiay.id,
    //             idMauSac: formData.idMauSac.id,
    //             idKichThuoc: formData.idKichThuoc ? formData.idKichThuoc.id : '',
    //             soLuong: formData.soLuong,
    //             giaBan: formData.giaBan,
    //             giaNhap: formData.giaNhap,
    //             trangThai: formData.trangThai,
    //         }));
    //         // const fileInput = document.querySelector("#file-input"); // Chọn đúng input element
    //         // const file = fileInput?.files?.[0];  // Lấy file đầu tiên
    //         // if (file) {
    //         //     data.append("hinhAnh", file);
    //         // }

    //         // Log hình ảnh để kiểm tra
    //         console.log("Hình ảnh:", data.get("hinhAnh"));
    //         console.log("Loại của hình ảnh:", typeof formData.hinhAnh);
    //         console.log("request :", data.get("request"));
            


    //         // Nếu có hình ảnh, thêm vào formData
    //         if (formData.hinhAnh && formData.hinhAnh instanceof File) {
    //             console.log("Loại hình ảnh:", formData.hinhAnh instanceof File); 
    //             data.append('hinhAnh', formData.hinhAnh);
    //             console.log("Hình ảnh sau khi append:", data.get('hinhAnh'));
    //         }

            

    //         // Gửi yêu cầu cập nhật sản phẩm
    //         let res = await updateProductDetail(id, data, {
    //             headers: {
    //                 "Content-Type": "multipart/form-data",
    //             },
    //         }


    //         );
    //         if (res.data) {
    //             toast.success('Sửa thành công');
    //             handleClose();
    //             dispatch(getProductsDetail());
    //         }
    //     } catch (error) {
    //         console.error("Lỗi khi sửa sản phẩm:", error);
    //         // Kiểm tra nếu có response từ backend và lấy thông điệp lỗi
    //         const errorMessage = error.response?.data?.message || 'Có lỗi xảy ra';
    //         toast.error('Sửa sản phẩm thất bại: ' + errorMessage);
    //     }

    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!productDetail) {
            handleSaveProductDetail(formData);
        } else {
            handleUpdateProductDetail(productDetail.id, formData);
            // handleUpdateProductDetail_test(productDetail.id,formData)
        }

        handleClose();
    };
    
    

    return (
        <>
            <Form onSubmit={handleSubmit}>
                {/* Tên sản phẩm */}


                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Tên sản phẩm</Form.Label>
                            <Combobox
                                data={sanPhamList}
                                value={formData.idSanPham.ten}
                                textField="ten"
                                valueField="id"
                                onChange={(value) => handleSanPhamChange(value)}
                                placeholder="Chọn tên sản phẩm..."
                                filter="contains"
                                required
                            />
                            {/* {console.log("Current formData.idHang: ", formData.idHang)} */}
                        </Form.Group>
                    </Col>

                    {/* Hãng */}
                    <Col>
                        <Form.Group>
                            <Form.Label>Hãng</Form.Label>
                            <Combobox
                                data={hangList}
                                value={formData.idHang.ten}
                                textField="ten"
                                valueField="id"
                                onChange={(value) => handleHangChange(value)}
                                placeholder="Chọn Hãng..."
                                filter="contains"
                                required

                            />
                        </Form.Group>

                    </Col>


                </Row>

                <Row>
                    {/* Đế Giày */}
                    <Col>
                        <Form.Group>
                            <Form.Label>Đế Giày</Form.Label>
                            <Combobox
                                data={deGiayList}
                                value={formData.idDeGiay.ten}
                                textField="ten"
                                valueField="id"
                                onChange={(value) => handleDeGiayChange(value)}
                                placeholder="Chọn Đế Giày..."
                                filter="contains"
                                required
                            />
                        </Form.Group>
                    </Col>

                    {/* Màu sắc */}
                    <Col>
                        <Form.Group>
                            <Form.Label>Màu sắc</Form.Label>
                            <Combobox
                                data={mauSacList}
                                value={formData.idMauSac.ten}
                                textField="ten"
                                valueField="id"
                                onChange={(value) => handleMauSacChange(value)}
                                placeholder="Chọn Màu sắc..."
                                filter="contains"
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    {/* Kích thước */}
                    <Col>
                        <Form.Group>
                            <Form.Label>Kích thước</Form.Label>
                            <Combobox
                                data={kichThuocList}
                                value={formData.idKichThuoc.ten}
                                textField="ten"
                                valueField="id"
                                onChange={(value) => handleKichThuocChange(value)}
                                placeholder="Chọn Kích thước..."
                                filter="contains"
                                required
                            />
                        </Form.Group>
                    </Col>


                    {/* Danh mục */}
                    <Col>
                        <Form.Group>
                            <Form.Label>Danh mục</Form.Label>
                            <Combobox
                                data={danhMucList}
                                value={formData.idDanhMuc.ten}
                                textField="ten"
                                valueField="id"
                                onChange={(value) => handleDanhMucChange(value)}
                                placeholder="Chọn danh mục..."
                                filter="contains"
                                required
                            />
                        </Form.Group>
                    </Col>

                </Row>

                <Row>
                    <Col>
                        {/* Các trường khác */}
                        <Form.Group>
                            <Form.Label>Số lượng</Form.Label>
                            <Form.Control
                                type="number"
                                name="soLuong"
                                value={formData.soLuong}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Giá bán</Form.Label>
                            <Form.Control
                                type="number"
                                name="giaBan"
                                value={formData.giaBan}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Giá nhập</Form.Label>
                            <Form.Control
                                type="number"
                                name="giaNhap"
                                value={formData.giaNhap}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        {/* Trạng thái */}
                        <Col>
                            <Form.Group>
                                <Form.Label>Trạng thái</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="trangThai"
                                    value={formData.trangThai}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="Hoạt động">Hoạt động</option>
                                    <option value="Ngưng hoạt động">Ngưng hoạt động</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Col>
                </Row>

                <Row>


                    <Col>
                        {/* <Form.Group>
                            <Form.Label>Hình ảnh</Form.Label>
                            <Form.Control
                                type="text"
                                name="hinhAnh"
                                value={formData.hinhAnh}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group> */}

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

                </Row>


                <Button type="submit" variant="primary">Lưu sản phẩm</Button>
            </Form>
        </>
    );
};

export default FormProductDetail;



