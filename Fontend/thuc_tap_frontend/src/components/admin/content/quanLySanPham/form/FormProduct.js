

import { useEffect, useState } from "react";
import { Combobox } from 'react-widgets';
import 'react-widgets/styles.css';
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import axiosInstance from "../../../../../constants/axiosInstance";


const FormProduct = (props) => {
    const { product, handleSaveProduct, handleUpdateProduct, handleClose, fetchListProduct } = props;

    const [formData, setFormData] = useState({

        ma: "",
        ten: "",
        idChatLieu: {
            id: null,
        },
        idLopLot: {
            id: null,
        },


        trangThai: "Hoạt động"
    });

    const [chatLieuList, setChatLieuList] = useState([]);
    const [lopLotList, setLopLotList] = useState([]);

    const fetchChatLieu = async () => {
        const response = await axiosInstance.get("/admin/material/all");
        setChatLieuList(response.data);
    };

    const fetchLopLot = async () => {
        const response = await axiosInstance.get("/admin/lining/all");
        setLopLotList(response.data);
    };

    useEffect(() => {
        fetchChatLieu();
        fetchLopLot();
        if (product) {
            setFormData({


                ma: product.ma,
                ten: product.ten,
                idChatLieu: {
                    id: product.idChatLieu,
                    ten: product.tenChatLieu
                },
                idLopLot: {
                    id: product.idLopLot,
                    ten: product.tenLopLot
                },

                trangThai: product.trangThai
            });
        }
    }, [product]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleChatLieuChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            idChatLieu: value,
            
        }));
    };

    const handleLopLotChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            idLopLot: value,
           
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!product) {

            handleSaveProduct(formData);
        } else {
            handleUpdateProduct(product.id, formData);
            
        }
        //fetchListProduct();  //neu để load table lại đây sẽ bị báo ko phải function
        handleClose();
    };
    
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Mã Sản Phẩm</Form.Label>
                    <Form.Control
                        type="text"
                        name="ma"
                        value={formData.ma}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Tên</Form.Label>
                    <Form.Control
                        type="text"
                        name="ten"
                        value={formData.ten}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>

                {/* Sử dụng Combobox để tìm kiếm chất liệu */}
                <Form.Group>
                    <Form.Label>Chất liệu</Form.Label>
                    
                    <Combobox
                        data={chatLieuList}  // Dữ liệu từ API
                        value={formData.idChatLieu.ten}  // Chỉ gán giá trị ID thay vì cả object
                        textField="ten"  // Hiển thị trường tên
                        valueField="id"  // Giá trị lưu trữ là ID
                        onChange={(value) => handleChatLieuChange(value)}  // Xử lý khi thay đổi
                        placeholder="Chọn chất liệu..."
                        filter="contains"  // Lọc theo nội dung nhập vào
                    />
                </Form.Group>

                {/* Sử dụng Combobox để tìm kiếm lớp lót */}
                <Form.Group>
                    <Form.Label>Lớp lót</Form.Label>
                    
                    <Combobox
                        data={lopLotList}
                        value={formData.idLopLot.ten}  // Gán giá trị là ID lớp lót
                        textField="ten"
                        valueField="id"  // Giá trị lưu trữ là ID
                        onChange={(value) => handleLopLotChange(value)}
                        placeholder="Chọn lớp lót..."
                        filter="contains"
                    />
                </Form.Group>

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

                <Button type="submit" variant="primary">Lưu sản phẩm</Button>
            </Form>
        </>
    );
};

export default FormProduct;
