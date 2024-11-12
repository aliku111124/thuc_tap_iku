import { useEffect } from "react";
import { Container, Row, Col, Form, Button, Table, InputGroup } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import { AiTwotoneTags } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoQrCodeOutline } from "react-icons/io5";
import "./traHang.scss";


const TraHang = () => {
  const { onTitleChange } = useOutletContext();
  useEffect(() => {
    const title = "Trả hàng";
    onTitleChange(title);
  }, [onTitleChange]);
  return (
    <>
      <Container>
        <Row className="form-search">
          <Col className="col-md-2"><h5><AiTwotoneTags />Mã Hóa Đơn</h5></Col>
          <Col className="col-md-6">
            <InputGroup className="mb-5">
              <Form.Control
                placeholder="Tìm Kiếm Hóa Đơn"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />

            </InputGroup>
          </Col>
          <Col className="col-md-2">
            <Button variant="outline-warning"><CiSearch />Tìm Hóa Đơn</Button>{' '}
          </Col>
          <Col className="col-md-2">
            <Button variant="outline-warning"><IoQrCodeOutline /> Quét mã QR</Button>{' '}
          </Col>
        </Row>
        <row className="logo-cty">
          <h1>Trả Hàng</h1>

        </row>
        
      </Container>
    </>
  )
};
export default TraHang;
