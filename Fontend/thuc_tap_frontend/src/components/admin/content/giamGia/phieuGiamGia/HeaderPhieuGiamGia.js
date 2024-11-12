import React, { useEffect,useState } from "react";
import { Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { FaSync, FaFilter } from "react-icons/fa";

const HeaderPhieuGiamGia = (props) => {
  const { handleSearchChange, searchParams ,handleClearForm} = props;
  const [isFocusedStart, setIsFocusedStart] = useState(false);
  const [isFocusedEnd, setIsFocusedEnd] = useState(false);

  useEffect(() => {
  }, [searchParams]);

  return (
    <div className="filter-container">
      <Row className="search-container mb-3 align-items-center">
        <Col md={6} className="text-left">
          <FaFilter className="filter-icon" /> {/* Icon bộ lọc */}
          <Form.Label className="filter-label">Bộ Lọc</Form.Label>{" "}
          {/* Bộ Lọc Label */}
          <Form.Control
            type="text"
            name="keyFind"
            value={searchParams.keyFind}
            onChange={handleSearchChange}
            placeholder="Tìm kiếm"
            className="mr-2"
          />
        </Col>
        {/* <Col md={2} className="text-left">
          <Form.Label>Loại</Form.Label>
          <Form.Control
            as="select"
            value={searchParams.Loai}
            onChange={handleSearchChange}
            className="mr-2 form-select"
          >
            <option value="0">Tất Cả</option>
            <option value="1">Tiền Mặt</option>
            <option value="2">%</option>
          </Form.Control>
        </Col> */}
        <Col md={3} className="text-left">
          <Form.Label>Trạng Thái</Form.Label>
          <Form.Control
            as="select"
            name="trangThai"
            value={searchParams.trangThai}
            onChange={handleSearchChange}
            className="mr-2 form-select"
          >
            <option value="">Tất Cả</option>
            <option value="Sắp Diễn Ra">Sắp Diễn Ra</option>
            <option value="Đang Diễn Ra">Đang Diễn Ra</option>
            <option value="Đã Kết Thúc">Đã Kết Thúc</option>
            <option value="Đã Hủy">Đã Hủy</option>
          </Form.Control>
        </Col>
        <Col md={3} className="text-left">
          <Form.Label>Sắp Xếp</Form.Label>
          <Form.Control
            as="select"
            name="sapXep"
            value={searchParams.sapXep}
            onChange={handleSearchChange}
            className="mr-2 form-select"
          >
            <option value="1">Tất Cả</option>
            <option value="1">Ngày Tạo Mới Nhất</option>
            <option value="2">Ngày Tạo Cũ Nhất</option>
            <option value="3">Mới Cập Nhật</option>
          </Form.Control>
        </Col>
        <Col md={5} className="text-left mt-3 mr-3">
          <Form.Label>Giá Tiền</Form.Label>
          <Row>
            <div className="date-time-range">
              <Col md={6} className="text-left">
                <InputGroup>
                  <Form.Control
                    type="number"
                    name="minGia"
                    value={searchParams.minGia}
                    onChange={handleSearchChange}
                    min={0}
                    max={9999999999}
                    placeholder="Giá tối thiểu"
                    className="mr-2 no-border no-highlight input-group"
                  />
                  <InputGroup.Text
                    style={{
                      fontSize: "1rem",
                      border: "none",
                      background: "#fff",
                    }}
                  >
                    VND
                  </InputGroup.Text>
                </InputGroup>
              </Col>
              {/* <span style={{lineHeight:'0.5',paddingTop:'0.8rem',fontSize:'2rem'}}>→</span> */}
              <span className="down-arrow">→</span>
              {/* Dấu mũi tên hoặc bất kỳ ký tự nào bạn muốn */}
              <Col md={6} className="text-left">
                <InputGroup>
                  <Form.Control
                    type="number"
                    name="maxGia"
                    value={searchParams.maxGia}
                    onChange={handleSearchChange}
                    min={0}
                    max={9999999999}
                    placeholder="Giá tối đa"
                    className="mr-2 no-border no-highlight input-group"
                  />
                  <InputGroup.Text
                    style={{
                      fontSize: "1rem",
                      border: "none",
                      background: "#fff",
                    }}
                  >
                    VND
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </div>
          </Row>
        </Col>
        <Col md={5} className="text-left mt-3 mr-3">
          <Form.Group controlId="dateTimeRangePicker">
            <Form.Label>Thời gian</Form.Label>
            <Row>
              <div className="date-time-range">
                <Col md={6} className="text-left">
                  <Form.Control
                    className={`input-group ${
                      isFocusedStart ? "no-border no-highlight" : ""
                    }`} // Thêm class no-highlight
                    type={isFocusedStart ? "datetime-local" : "text"}
                    name="minNgay"
                    value={searchParams.minNgay}
                    onChange={handleSearchChange}
                    placeholder="Từ Ngày"
                    onFocus={() => setIsFocusedStart(true)}
                    onBlur={() => setIsFocusedStart(false)}
                  />
                </Col>
                <span className="down-arrow">→</span>{" "}
                {/* Dấu mũi tên hoặc bất kỳ ký tự nào bạn muốn */}
                <Col md={6} className="text-left">
                  <Form.Control
                    className={`input-group ${
                      isFocusedEnd ? "no-border no-highlight" : ""
                    }`} // Thêm class no-highlight
                    type={isFocusedEnd ? "datetime-local" : "text"}
                    name="maxNgay"
                    value={searchParams.maxNgay}
                    onChange={handleSearchChange}
                    placeholder="Đến Ngày"
                    onFocus={() => setIsFocusedEnd(true)}
                    onBlur={() => setIsFocusedEnd(false)}
                  />
                </Col>
              </div>
            </Row>
          </Form.Group>
        </Col>
        <Col md={1} className="text-left">
          <Form.Label></Form.Label>
          <Row>
            <Col md={12} className="text-right mt-4">
              <Button
                variant="secondary"
                size="sm"
                className="d-flex align-items-center custom-button-size"
                onClick={handleClearForm}
              >
                <FaSync style={{ marginRight: "0.5rem", fontSize: "0.7rem" }} />
                <span className="button-text">Mới</span>{" "}
                {/* Thêm class cho phần chữ */}
              </Button>
            </Col>
            {/* <Col md={6} className="text-left">
              <Button variant="primary" size="sm" className="ml-2">Tìm kiếm</Button>
            </Col> */}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default HeaderPhieuGiamGia;
