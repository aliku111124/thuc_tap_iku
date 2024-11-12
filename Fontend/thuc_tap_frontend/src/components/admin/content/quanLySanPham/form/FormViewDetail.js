import { useEffect, useState } from "react"
import axiosInstance from "../../../../../constants/axiosInstance";
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';
import '../../quanLySanPham/scss/DetailViewSPCT.scss'


const FormProductDetail = (props) => {



    const { productDetail } = props

    const [formData, setFormdata] = useState({

        ten: "",
        idHang: null,
        idDanhMuc: null,
        idDeGiay: null,
        idMauSac: null,
        idKichThuoc: null,
        idSanPham: null,
        soLuong: "",
        giaBan: "",
        giaNhap: "",
        trangThai: "Hoạt động",
        hinhAnh: ""
    }
    )


    useEffect(() => {




        if (productDetail) {
            setFormdata({
                ten: productDetail.ten,
                idHang: productDetail.hang,
                idDanhMuc: productDetail.danhMuc,
                idDeGiay: productDetail.deGiay,
                idMauSac: productDetail.mauSac,
                idKichThuoc: productDetail.kichThuoc,
                soLuong: productDetail.soLuong,
                giaBan: productDetail.giaBan,
                giaNhap: productDetail.giaNhap,
                trangThai: productDetail.trangThai,
                hinhAnh: productDetail.hinhAnh


            })

        }

    }, [productDetail])




    return (
        <>
            <Form >



                <Row>

                    <Col>
                        <Form.Group>
                            <Form.Label>Ten San pham</Form.Label>

                            <Form.Control
                                value={formData.ten}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Hãng</Form.Label>
                            <Form.Control
                                value={formData.idHang}
                                disabled
                            />
                        </Form.Group>
                    </Col>

                </Row>

                {/* Group Đế Giày và Màu Sắc trong một hàng */}
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Đế Giày</Form.Label>

                            <Form.Control
                                value={formData.idDeGiay}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Màu sắc</Form.Label>

                            <Form.Control
                                value={formData.idMauSac}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>

                        <Form.Group>
                            <Form.Label>Kich thuoc</Form.Label>
                            <Form.Control
                                value={formData.idKichThuoc}
                                disabled
                            />
                        </Form.Group>

                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Trạng thái</Form.Label>
                            <Form.Control
                                value={formData.trangThai}
                                disabled
                            />
                        </Form.Group>

                    </Col>
                </Row>

                <Row>
                    <Col>

                        <Form.Group>
                            <Form.Label>Danh mục</Form.Label>

                            <Form.Control
                                value={formData.idDanhMuc}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                    <Col>

                        <Form.Group>
                            <Form.Label>Số lượng</Form.Label>
                            <Form.Control
                                value={formData.soLuong}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                </Row>


                <Row>
                    <Col>

                        <Form.Group>
                            <Form.Label>Giá bán</Form.Label>
                            <Form.Control
                                value={formData.giaBan}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Giá nhập</Form.Label>
                            <Form.Control
                                value={formData.giaNhap}
                                disabled
                            />
                        </Form.Group>

                    </Col>
                </Row>


                <Form.Group>
                    <Form.Label>Hình ảnh</Form.Label>
                    <img src={formData.hinhAnh} className="" >

                    </img>
                   
                </Form.Group>
            </Form>


        </>
    )


}



export default FormProductDetail