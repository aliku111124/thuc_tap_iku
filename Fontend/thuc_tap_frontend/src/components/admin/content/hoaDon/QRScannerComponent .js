import React, { useState } from "react";
import QRScanner from "react-qr-scanner";
import { FaQrcode } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";
import { toastSuccess } from "../../../../configs/ToastConfig";

const QRScannerComponent = (props) => {
  const {setSearchParams} = props;
  const [scanResult, setScanResult] = useState(null); // Lưu trữ kết quả quét
  const [showModal, setShowModal] = useState(false); // Trạng thái hiển thị modal

  const handleScan = (data) => {
    if (data) {
      setScanResult(data.text); // Lưu kết quả quét vào state
      setSearchParams((prevParams) => ({
        ...prevParams,
        keyFind: data.text,
      }));
      setShowModal(false); // Đóng modal sau khi quét thành công
      toastSuccess("Quét Thành Công")
    }
  };

  const handleError = (err) => {
    console.error("QR scan error:", err); // Xử lý lỗi nếu có
  };

  const openModal = () => {
    setShowModal(true); // Mở modal khi nhấn nút quét QR
    setScanResult(null); // Reset kết quả cũ
  };

  const closeModal = () => {
    setShowModal(false); // Đóng modal
  };

  return (
    <div>
      {/* Nút để mở modal quét QR */}
      <button onClick={openModal} className="btn btn-secondary btn-sm">
        <FaQrcode className="mr-1" /> Quét QR
      </button>

      {/* Modal hiển thị camera quét QR */}
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Quét mã QR</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <QRScanner
            delay={300} // Thời gian giữa các lần quét
            onScan={handleScan} // Gọi handleScan khi có kết quả
            onError={handleError} // Xử lý lỗi khi quét
            style={{ width: "100%" }} // Định dạng lại để hiển thị đẹp hơn
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Hiển thị kết quả quét (nếu có)
      {scanResult && (
        <div style={{ marginTop: "20px", fontSize: "20px", color: "green" }}>
          <p>Kết quả quét: {scanResult}</p>
        </div>
      )} */}
    </div>
  );
};

export default QRScannerComponent;
