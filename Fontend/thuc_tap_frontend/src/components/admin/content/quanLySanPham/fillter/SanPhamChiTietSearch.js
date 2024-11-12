


import React, { useRef, useState } from "react";
import PropTypes from 'prop-types';
import { Form, InputGroup, Row, Col } from "react-bootstrap";

const SanPhamChiTietSearch = (props) => {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const [trangThai, setTrangThai] = useState('');
    const [giaBan, setGiaBan] = useState('');

    const typingTimeoutRef = useRef(null);

    function handleSearchTermChange(e) {
        const value = e.target.value;
        setSearchTerm(value);
        triggerSearch(value, trangThai, giaBan);
    }
    function handleLocTrangThaiChange(e) {
        const value = e.target.value === "" ? null : e.target.value; // Giữ nguyên giá trị String
        setTrangThai(value);
        triggerSearch(searchTerm, value, giaBan);
    }




    function handleLocGiaBanChange(e) {
        const value = e.target.value;
        setGiaBan(value);
        triggerSearch(searchTerm, trangThai, value);
    }



    function triggerSearch(term, status, price) {
        if (!onSubmit) return;
    
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
    
        let giaLonHon = null;
        let giaNhoHon = null;
    
        if (price === "lonHon1000000") {
            giaLonHon = 1000000; // Lớn hơn 1.000.000
        } else if (price === "nhoHon1000000") {
            giaNhoHon = 1000000; // Nhỏ hơn 1.000.000
        }
    
        console.log("Trigger search with:", { term, status, giaLonHon, giaNhoHon });
    
        typingTimeoutRef.current = setTimeout(() => {
            const formValue = {
                searchTerm: term,
                trangThai: status || null, // Đặt giá trị null nếu trạng thái không được chọn
                giaLonHon: giaLonHon,
                giaNhoHon: giaNhoHon,
            };
            onSubmit(formValue); // Gọi hàm onSubmit với giá trị formValue
        }, 400);
    }
    

    return (
        <div>


            <div className="nav">

                <InputGroup className="mb-3">
                    <Form.Control
                        value={searchTerm}
                        onChange={handleSearchTermChange}
                        placeholder="Nhập tên sản phẩm muốn tìm "
                    />
                </InputGroup>

                

                <h5>Trạng thái</h5>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="formStatus">
                            <Form.Control as="select" value={trangThai} onChange={handleLocTrangThaiChange}>
                                <option value="">Tất Cả</option>
                                <option value="Hoạt động">Hoạt động</option>
                                <option value="Không hoạt động">Không hoạt động</option>
                            </Form.Control>


                        </Form.Group>
                    </Col>
                </Row>

                <h5>Giá bán</h5>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="formPrice">
                            <Form.Control as="select" value={giaBan} onChange={handleLocGiaBanChange}>
                                <option value="">Tất Cả</option>
                                <option value="lonHon1000000">Lớn hơn 1.000.000</option>
                                <option value="nhoHon1000000">Nhỏ hơn 1.000.000</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

SanPhamChiTietSearch.propTypes = {
    onSubmit: PropTypes.func,
};

export default SanPhamChiTietSearch;
