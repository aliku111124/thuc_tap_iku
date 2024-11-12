import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaPlus, FaFileExport } from "react-icons/fa";

const HeaderDotGiamGia = (props) => {
  const { handleExport, handleSearchChange, searchParams, handleClearForm } =
    props;
  return (
    <>
      <div className="dotGiamGia-container">
        <div className="table-header"></div>
        <div className="table-funtion">
          <Row className="mb-4">
            <Col>
              <Form>
                <Row>
                  <Col sm={6} md={6}>
                    <Form.Group controlId="formName">
                      <Form.Control
                        type="text"
                        placeholder="Tìm kiếm"
                        name="value"
                        value={searchParams.value}
                        onChange={handleSearchChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3}></Col>
                  <Col sm={6} md={3}>
                    <Button variant="success" onClick={handleClearForm}>
                      Làm mới
                    </Button>
                    <Button variant="success" onClick={handleExport}>
                      <FaFileExport /> Xuất Excel
                    </Button>
                    <Link to="/admin/dot-giam-gia/add">
                      <Button variant="info" className="ml-2">
                        <FaPlus /> Thêm mới
                      </Button>
                    </Link>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <Row>
                      <Form.Group controlId="formStartDate" className="mx-2">
                        <Form.Control
                          type="date"
                          name="minNgay"
                          value={searchParams.minNgay}
                          onChange={handleSearchChange}
                        />
                      </Form.Group>
                      <Form.Group controlId="formEndDate" className="mx-2">
                        <Form.Control
                          type="date"
                          name="maxNgay"
                          value={searchParams.maxNgay}
                          onChange={handleSearchChange}
                        />
                      </Form.Group>
                    </Row>
                  </Col>
                  <Col sm={6}>
                    <Row>
                      <Form.Group controlId="formStatus" className="mx-2 col-4">
                        <Form.Control
                          as="select"
                          name="trangThai"
                          value={searchParams.trangThai}
                          onChange={handleSearchChange}
                        >
                          <option value="">Chọn trạng thái</option>
                          <option value="Hoạt động">Hoạt động</option>
                          <option value="Ngưng hoạt động">
                            Ngưng hoạt động
                          </option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group
                        controlId="formValueMin"
                        className="mx-2 col-4"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Giá thấp"
                          name="minGia"
                          value={searchParams.minGia}
                          onChange={handleSearchChange}
                        />
                      </Form.Group>
                      <Form.Group
                        controlId="formValueMax"
                        className="mx-2 col-4"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Giá cao"
                          name="maxGia"
                          value={searchParams.maxGia}
                          onChange={handleSearchChange}
                        />
                      </Form.Group>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default HeaderDotGiamGia;
