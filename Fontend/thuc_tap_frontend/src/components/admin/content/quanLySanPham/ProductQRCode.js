import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { qrCodeProduct } from '../../../../services/sanPham/SanPhamChiTietService';

function ProductQRCode({id}) {
    const [qrCode, setQRCode] = useState("");

    useEffect(() => {
        const fetchQRCode = async () => {
            const response = await qrCodeProduct(id)
            setQRCode(`data:image/png;base64,${response.data}`);
        };
        fetchQRCode();
    }, [id]);


    // Hàm để tải ảnh QR code xuống
    const downloadQRCode = () => {
        const link = document.createElement("a");
        link.href = qrCode;
        link.download = `QRCode_${id}.png`;
        link.click();
    };

    return (
        <div>
            <img className="qrCodeImg" src={qrCode} alt="QR Code" />
            <button onClick={downloadQRCode}>Tải mã</button>
        </div>
    );
}

export default ProductQRCode;
