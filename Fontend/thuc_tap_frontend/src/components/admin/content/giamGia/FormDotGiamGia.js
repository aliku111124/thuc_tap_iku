import { Form, Button, Col, Row } from "react-bootstrap";

const FormDotGiamGia = ({
  formData,
  handleInputChange,
  handleSubmitDotGiamGia,
  onUpdate,
}) => {
  return (
    <Form onSubmit={handleSubmitDotGiamGia}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formMa">
          <Form.Label>Mã</Form.Label>
          <Form.Control
            type="text"
            name="ma"
            value={formData.ma}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formTen">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="ten"
            value={formData.ten}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGiaTri">
          <Form.Label>Giá Trị</Form.Label>
          <Form.Control
            type="number"
            name="giaTri"
            value={formData.giaTri}
            onChange={handleInputChange}
            step="0.01"
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formLoai">
          <Form.Label>Loại</Form.Label>
          <Form.Check
            type="radio"
            label="Tiền mặt"
            name="loai"
            value="Tiền mặt"
            checked={formData.loai === "Tiền mặt"}
            onChange={handleInputChange}
          />
          <Form.Check
            type="radio"
            label="Phần trăm"
            name="loai"
            value="Phần trăm"
            checked={formData.loai === "Phần trăm"}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formHinhThuc">
          <Form.Label>Hình Thức</Form.Label>
          <Form.Control
            type="text"
            name="hinhThuc"
            value={formData.hinhThuc}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formDieuKien">
          <Form.Label>Điều Kiện</Form.Label>
          <Form.Control
            type="text"
            name="dieuKien"
            value={formData.dieuKien}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formNgayBatDau">
          <Form.Label>Ngày Bắt Đầu</Form.Label>
          <Form.Control
            type="datetime-local"
            name="ngayBatDau"
            value={formData.ngayBatDau}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formNgayKetThuc">
          <Form.Label>Ngày Kết Thúc</Form.Label>
          <Form.Control
            type="datetime-local"
            name="ngayKetThuc"
            value={formData.ngayKetThuc}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        {/* <Form.Group as={Col} controlId="formTrangThai">
          <Form.Label>Trạng Thái</Form.Label>
          <Form.Control
            type="text"
            name="trangThai"
            value={formData.trangThai}
            onChange={handleInputChange}
            F
          />
        </Form.Group> */}
        <Form.Group controlId="formTrangThai" className="mx-2 col-4">
          <Form.Control
            as="select"
            name="trangThai"
            value={formData.trangThai}
            onChange={handleInputChange}
            required
          >
            <option value="">Chọn trạng thái</option>
            <option value="Hoạt động">Hoạt động</option>
            <option value="Ngưng hoạt động">Ngưng hoạt động</option>
          </Form.Control>
        </Form.Group>
      </Row>

      {onUpdate === "update" ? (
        <Button variant="primary" type="submit">
          Lưu lại
        </Button>
      ) : (
        <Button variant="primary" type="submit">
          Thêm mới
        </Button>
      )}
    </Form>
  );
};

export default FormDotGiamGia;
