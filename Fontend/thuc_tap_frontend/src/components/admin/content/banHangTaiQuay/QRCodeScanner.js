import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { QrReader } from "react-qr-reader";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { findByIdSpctToCart } from "../../../../services/banHang/BanHangService";

const QRCodeScanner = (props) => {
    const dispatch = useDispatch();
    const { show, setShow ,handleAddProductsToCart} = props;


    const handleQRScan = async (qrData) => {
        try {
            // Kiểm tra xem dữ liệu QR có phải là chuỗi JSON hợp lệ không
            let productId = qrData;
            try {
                const parsedData = JSON.parse(qrData); // Nếu dữ liệu là chuỗi JSON
                productId = parsedData.id || parsedData; // Lấy ID từ dữ liệu JSON nếu có
            } catch (jsonError) {
                // Nếu không thể parse dữ liệu JSON, coi qrData là ID sản phẩm trực tiếp
                console.log("Dữ liệu QR không phải JSON, sử dụng trực tiếp:", qrData);
            }
    
            // Gọi API để lấy thông tin sản phẩm dựa trên ID
            const response = await findByIdSpctToCart(productId);
            const product = response.data;
    
            if (product) {
                handleAddProductsToCart([{ ...product, soLuong: 1 }]); // Thêm sản phẩm vào giỏ hàng
                toast.success(`Đã thêm sản phẩm ${product.ten} vào giỏ hàng!`);
            } else {
                toast.warn("Không tìm thấy sản phẩm!");
            }
        } catch (error) {
            console.error("Error processing QR data:", error);
            toast.error("Quét mã QR thất bại!");
        }
    };
    

    return (
       

        <>
            <div>
                <Modal show={show} 
                onHide={() => setShow(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Quét mã QR</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <QrReader
                            onResult={(result, error) => {
                                if (!!result) {
                                    handleQRScan(result?.text); // Hàm xử lý mã QR
                                    setShow(false); // Đóng modal sau khi quét
                                }
                                if (!!error) {
                                    console.error(error);
                                }
                            }}
                            constraints={{ facingMode: "environment" }}
                            style={{ width: "100%" }}
                        />
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
};

export default QRCodeScanner;
