import React, { useEffect, useState } from "react";
import dayjs from "dayjs"; //Thư viện để quản lý và định dạng ngày tháng.
import {
  addNewVoucher,
  updateVoucher,
} from "../../../../../services/voucher/voucherService"; // import service viết bên java backend
import { Row, Col, Form, Button, Modal } from "react-bootstrap"; // import bootstrap
import { toastError, toastSuccess } from "../../../../../configs/ToastConfig";
const ModalPhieuGiamGia = (props) => {
  //biến truyền vào bên table
  const {
    showModal,
    formData,
    modalMode,
    fetchListVoucher,
    handleClose,
    currentItemId,
    setFormData,
  } = props;

  //set formAdd
  const [formAdd, setFormAdd] = useState({
    ma: "",
    ten: "",
    loai: "",
    giaTri: "",
    giamToiDa: "",
    mucDo: "",
    ngayBatDau: "",
    ngayKetThuc: "",
    soLuong: "",
    dieuKien: "",
    trangThai: "",
  });

  // submit (gửi dữ liệu vào sevice)
  const handleSubmitPhieuGiamGia = async (e) => {
    e.preventDefault();
    try {
      if (modalMode === "edit") {
        const response = await updateVoucher(currentItemId, formAdd);
        toastSuccess("Cập nhật voucher thành công!");
      } else {
        // Gọi hàm thêm voucher
        await addNewVoucher(formAdd);
        toastSuccess("Thêm Mới Thành Công");
      }
      fetchListVoucher();
      handleClose(); // Đóng modal
    } catch (error) {
      toastError("Lỗi khi thêm/sửa voucher");      
    }
  };

  //Lấy dữ liệu từ input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    mapFormDataToFormAdd(formAdd);
  };

  //add dữ liệu vào formdata để gửi vào service add
  const mapFormDataToFormAdd = (formData) => {
    // Kiểm tra các thuộc tính cần thiết
    if (formData.ngayBatDau && formData.ngayKetThuc) {
      setFormAdd({
        ma: formData.ma || "", // Giá trị mặc định nếu không có
        ten: formData.ten || "",
        loai: formData.loai || "",
        giaTri: formData.giaTri !== null ? formData.giaTri.toString() : "", // Chuyển số thành chuỗi
        mucDo: formData.mucDo || "",
        giamToiDa:
          formData.giamToiDa !== null ? formData.giamToiDa.toString() : "", // Chuyển số thành chuỗi
        ngayBatDau: dayjs(formData.ngayBatDau).toISOString(), // Chuyển sang ISO 8601
        ngayKetThuc: dayjs(formData.ngayKetThuc).toISOString(), // Chuyển sang ISO 8601
        soLuong: formData.soLuong !== null ? formData.soLuong.toString() : "", // Chuyển số thành chuỗi
        dieuKien: formData.dieuKien || "",
        trangThai: formData.trangThai || "",
      });
    } else {
      console.error("Ngày bắt đầu và ngày kết thúc không được để trống");
    }
  };

  //load dữ liệu khi thay đổi
  useEffect(() => {
    mapFormDataToFormAdd(formData);
  }, [formData]);

  return (
    <>
      <div>
        {/* Modal */}
        <Modal show={showModal} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>
              {modalMode === "view"
                ? "Chi tiết Voucher"
                : modalMode === "edit"
                ? "Chỉnh sửa Voucher"
                : "Thêm Voucher Mới"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              // handleInputChange={handleInputChange}
              onSubmit={handleSubmitPhieuGiamGia}
            >
              <Row>
                <Col xs={6}>
                  <Form.Group controlId="formMa">
                    <Form.Label>Mã</Form.Label>
                    <Form.Control
                      type="text"
                      name="ma"
                      value={formData.ma}
                      onChange={handleInputChange}
                      disabled={modalMode === "view"} // Khóa trường nếu đang xem chi tiết
                      placeholder="Vui Lòng Nhập Mã Voucher"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group controlId="formTen">
                    <Form.Label>Tên</Form.Label>
                    <Form.Control
                      type="text"
                      name="ten"
                      value={formData.ten}
                      onChange={handleInputChange}
                      disabled={modalMode === "view"}
                      placeholder="Vui Lòng Nhập Tên Voucher"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <Form.Group controlId="formGiaTri">
                    <Form.Label>Giá trị</Form.Label>
                    <Form.Control
                      type="number"
                      name="giaTri"
                      value={formData.giaTri}
                      onChange={handleInputChange}
                      disabled={modalMode === "view"}
                      placeholder="Vui Lòng Nhập Giá Trị"
                      required
                      min={0}
                    />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group controlId="formLoai">
                    <Form.Label>Loại</Form.Label>
                    <Form.Control
                      as="select"
                      name="loai"
                      value={formData.loai}
                      onChange={handleInputChange}
                      disabled={modalMode === "view"}
                      required
                    >
                      <option value="true">Tiền Mặt</option>
                      <option value="false">%</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <Form.Group controlId="formGiamToiDa">
                    <Form.Label>Giá trị tối đa</Form.Label>
                    <Form.Control
                      type="number"
                      name="giamToiDa"
                      value={formData.giamToiDa}
                      onChange={handleInputChange}
                      disabled={modalMode === "view"}
                      placeholder="Vui Lòng Nhập Giá Trị Tối Đa Của Voucher"
                      required
                      min={0}
                    />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group controlId="formMucDo">
                    <Form.Label>Mức độ</Form.Label>
                    <Form.Control
                      type="text"
                      name="mucDo"
                      value={formData.mucDo}
                      onChange={handleInputChange}
                      disabled={modalMode === "view"}
                      placeholder="Vui Lòng Nhập Mức Độ Voucher"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <Form.Group controlId="formNgayBatDau">
                    <Form.Label>Ngày bắt đầu</Form.Label>
                    <Form.Control
                      type="date"
                      name="ngayBatDau"
                      value={formData.ngayBatDau}
                      onChange={handleInputChange}
                      disabled={modalMode === "view"}
                      placeholder="Vui Lòng Nhập Ngày Bắt Đầu Voucher"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group controlId="formNgayKetThuc">
                    <Form.Label>Ngày kết thúc</Form.Label>
                    <Form.Control
                      type="date"
                      name="ngayKetThuc"
                      value={formData.ngayKetThuc}
                      onChange={handleInputChange}
                      disabled={modalMode === "view"}
                      placeholder="Vui Lòng Nhập Ngày Kết Thúc Voucher"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <Form.Group controlId="formSoLuong">
                    <Form.Label>Số lượng</Form.Label>
                    <Form.Control
                      type="number"
                      name="soLuong"
                      value={formData.soLuong}
                      onChange={handleInputChange}
                      disabled={modalMode === "view"}
                      placeholder="Vui Lòng Nhập Số Lượng Voucher"
                      required
                      min={0}
                    />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group controlId="formTrangThai">
                    <Form.Label>Trạng thái</Form.Label>
                    <Form.Control
                      className="form-select"
                      as="select"
                      name="trangThai"
                      value={formData.trangThai}
                      onChange={handleInputChange}
                      disabled={modalMode === "view"}
                      required
                    >
                      <option value="Sắp Diễn Ra">Sắp Diễn Ra</option>
                      <option value="Đang Diễn Ra">Đang Diễn Ra</option>
                      <option value="Đã Kết Thúc">Đã Kết Thúc</option>
                      <option value="Đã Hủy">Đã Hủy</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Form.Group controlId="formDieuKien">
                    <Form.Label>Điều kiện</Form.Label>
                    <Form.Control
                      as="textarea" // Sử dụng textarea cho điều kiện
                      name="dieuKien"
                      value={formData.dieuKien}
                      onChange={handleInputChange}
                      disabled={modalMode === "view"}
                      rows={3} // Số dòng mặc định của textarea
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Đóng
            </Button>
            {/* Submit button */}
            {modalMode !== "view" && (
              <Button
                variant="primary"
                type="submit"
                onClick={handleSubmitPhieuGiamGia}
              >
                {modalMode === "edit" ? "Cập nhật" : "Thêm"}
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
export default ModalPhieuGiamGia;
