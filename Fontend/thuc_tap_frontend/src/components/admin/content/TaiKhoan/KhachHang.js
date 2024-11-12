import { useEffect } from "react";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import './KhachHang.scss'
import { useOutletContext } from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from "react";
import { getAllKhachHang, pagesKhachHang, searchKhachHang } from "../../../../services/khachHang/KhachHangService";
import { deleteCustomer } from "../../../../services/khachHang/KhachHangService";
import { Link } from "react-router-dom";
import ModalKhachHangDetail from "./khachHang/ModelKhachHangDetail";
import dayjs from "dayjs";
import ReactPaginate from "react-paginate";
import { toast } from 'react-toastify';
const KhachHang = () => {
  const { onTitleChange } = useOutletContext();
  const [listKhachHang, setListKhachHang] = useState([]);;
  const [totalUsers, setToTalUsers] = useState(0); // Lưu trữ trạng thái của trang hiện tại
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState(""); // State cho tìm kiếm
  const [filterTypeGT, setFilterTypeGT] = useState("");
  const [filterTypeTT, setFilterTypeTT] = useState("");
  const [currentPageSearch, setCurrentPageSearch] = useState(0);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);

  };
  const handleLocGioiTinhChange = (e) => {
    setFilterTypeGT(e.target.value); // Cập nhật giá trị tìm kiếm

  };
  const handleLocTrangThaiChange = (e) => {
    setFilterTypeTT(e.target.value); // Cập nhật giá trị tìm kiếm

  };

  const handleSearchKhachHang = async (page = 0, size = 5) => {
    try {
      const responseSearch = await searchKhachHang(page, size, searchTerm, filterTypeGT, filterTypeTT);  // Gọi API tìm kiếm
      setListKhachHang(responseSearch.data.data.items)  // Cập nhật danh sách nhân viên sau khi tìm kiếm
      setTotalPages(responseSearch.data.data.totalPage);
    } catch (error) {
      console.error("Lỗi khi tìm kiếm khách hàng:", error);
    }
  };
  const fatchListKhachHang = async (currentPage = 0) => {
    try {
      const response = await pagesKhachHang(currentPage, 5);
      console.log()
      const responseData = response.data;
      if (responseData && responseData.data) {
        setListKhachHang(responseData.data.items);
        setTotalPages(responseData.data.totalPage); // Set total pages
        setToTalUsers(responseData.data.totalElements || 0);
      }
    } catch (error) {
      console.log("Lỗi khi lay danh sach khach hang", error);

    }
  };
  const handlePageClick = async (event) => {
    const newPage = event.selected; // ReactPaginate uses 0-based indexing
    if (searchTerm || filterTypeGT || filterTypeTT) {
      setCurrentPageSearch(newPage);
      handleSearchKhachHang(newPage, 5);
    } else {
      fatchListKhachHang(newPage);
    }
    // await fatchListKhachHang(newPage); // Fetch data for the new page
  };

  const deleteKhachHang = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa khách hàng này không?')) {
      try {
        await deleteCustomer(id);
        console.log("Xóa thành công khách hàng có ID:", id);
        toast.success("Xoá thành công")
        fatchListKhachHang();  // Làm mới danh sách sau khi xóa thành công
      } catch (error) {
        console.error("Có lỗi khi xóa khách hàng:", error);
      }
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedKhachHang(null)
  }

  const [showModal, setShowModal] = useState(false)

  const [selectedKhachHang, setSelectedKhachHang] = useState({})

  const handleShowModal = (khachHang) => {
    setSelectedKhachHang(khachHang);
    setShowModal(true);
  }


  useEffect(() => {
    const title = "Khách hàng";
    if (searchTerm || filterTypeGT || filterTypeTT) {
      handleSearchKhachHang();
      return;
    }
    fatchListKhachHang();
    onTitleChange(title);
  }, [searchTerm, filterTypeGT, filterTypeTT]);
  return (
    <>

        <div className="form-hien-thi">
          <h5>Khách Hàng</h5>


          <div className="back">

            <div className="nav">

              <div>
                <InputGroup className="mb-3">
                  <Form.Control
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Nhập tên hoặc SDT hoặc email"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  {/* <Button variant="primary" onClick={handleSearchKhachHang}>
                    Tìm kiếm
                  </Button> */}
                </InputGroup>
              </div>

              <div>
                <Link to="/admin/khach-hang/add">
                  <Button className="btn btn-primaty">Thêm Khách Hàng</Button>
                </Link>
              </div>

            </div>

            {/* bộ lọc  */}
            <div className="loc">

              <div className="TrangThai">
                <div><h5>Giới Tính</h5></div>
                <div>
                  <Row className="mb6">
                    <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
                      <Form.Group controlId="formGender" onChange={handleLocGioiTinhChange}>
                        <Form.Control as="select" name="gender">
                          <option value="">Tất Cả</option>
                          <option value="Nam">Nam</option>
                          <option value="Nữ">Nữ</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>

                <div><h5>Trạng Thái</h5></div>
                <div>
                  <Row className="mb6">
                    <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
                      <Form.Group controlId="formStatus">
                        <Form.Control as="select" name="status" onChange={handleLocTrangThaiChange}>
                          <option value="">Tất Cả</option>
                          <option value="HOẠT ĐỘNG">Hoạt động</option>
                          <option value="KHÔNG HOẠT ĐỘNG">Không hoạt động</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
                <button className="btn btn-outline-danger">Xuất Excel</button>
              </div>



            </div>

            {/* table */}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Hình ảnh</th>
                  <th>Mã</th>
                  <th>Họ Và Tên</th>
                  <th>Email</th>
                  <th>SĐT</th>
                  <th>Ngày Sinh</th>
                  <th>Giới Tính</th>
                  <th>Địa Chỉ</th>
                  {/* <th>Chức Vụ</th> */}
                  <th>Trạng Thái</th>
                  <th>Thao Tác</th>
                </tr>
              </thead>
              <tbody>

                {listKhachHang &&
                  listKhachHang.length > 0 &&
                  listKhachHang.map((item, index) => {
                    return (
                      <tr key={`table-khach-hang-${item.id}`}>
                        <td>{index + 1}</td>
                        <td>{item.hinhAnh ? <img src={item.hinhAnh} className="imgAnhUser"></img> : "Đang cập nhật"}</td>
                        <td>{item.ma}</td>
                        <td>{item.ten}</td>
                        <td>{item.email}</td>
                        <td>{item.sdt}</td>
                        <td>{dayjs(item.ngaySinh).format("YYYY-MM-DD")}</td>
                        <td>{item.gioiTinh}</td>
                        <td>{item.diaChi}</td>
                        {/* <td>{item.chucVu}</td> */}
                        <td>{item.trangThai}</td>
                        <td>
                          <Button >
                            <span onClick={() => { handleShowModal(item) }}>Detail</span>
                          </Button>
                          <Button variant="danger" className="ms-2" onClick={() => deleteKhachHang(item.id)}>
                            Xóa
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                
                {listKhachHang && listKhachHang.length === 0 && (

                  <tr>
                    <td colSpan={"11"}>
                      <div>Not found data</div>
                    </td>
                  </tr>
                )}

              </tbody>
            </Table>
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={totalPages}
              previousLabel="< previous"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"

            />
          </div>


        </div>

      <ModalKhachHangDetail show={showModal} onUpdate={fatchListKhachHang} fatchListKhachHang={fatchListKhachHang} handleClose={handleCloseModal} khachHang={selectedKhachHang}>
        <span>Detail</span>
      </ModalKhachHangDetail>
    </>
  );
};
export default KhachHang;