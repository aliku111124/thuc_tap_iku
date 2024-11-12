import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import "./NhanVien.scss";
import { FaPlus, FaFileExport, FaEdit, FaTrash } from "react-icons/fa";
import { Link, useOutletContext } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiSolidUserDetail } from "react-icons/bi";
import { MdOutlineLockReset } from "react-icons/md";
import { getAllUserNv, deleteUserNv, pagesNhanVien, searchNhanVien } from "../../../../services/nhanVien/NhanVienService";
import dayjs from "dayjs";
import { toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';
import ModalNhanVienDetail from "./nhanVien/ModalNhanVienDetail";
import { setCurrentPage } from "../../../../redux/action/saleActions";

const NhanVien = () => {
  
  const [listNhanVien, setListNhanVien] = useState([]);
  const [totalUsers, setToTalUsers] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterTypeGT, setFilterTypeGT] = useState("");
  const [filterTypeTT, setFilterTypeTT] = useState("");
  const [currentPageSearch, setCurrentPageSearch] = useState(0);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleLocGioiTinhChange = (e) => setFilterTypeGT(e.target.value);
  const handleLocTrangThaiChange = (e) => setFilterTypeTT(e.target.value);

  const fetchListNhanVienSearch = async (page = 0, size = 5) => {
    try {
      const responseSearch = await searchNhanVien(page, size, searchTerm, filterTypeGT, filterTypeTT);
      setListNhanVien(responseSearch.data.data.items);
      setTotalPages(responseSearch.data.data.totalPage);
    } catch (error) {
      console.error("Lỗi khi tìm kiếm:", error);
    }
  };


  // Fetch danh sách nhân viên từ server

  const fetchListNhanVien = async (currentPage = 0) => {
    try {
      const response = await pagesNhanVien(currentPage, 5);
      const responseData = response.data;
  
      if (responseData && responseData.data) {
        setListNhanVien(responseData.data.items);
        setTotalPages(responseData.data.totalPage);
        setToTalUsers(responseData.data.totalElements || 0);
      }
    } catch (error) {
      console.error("Lỗi khi lấy danh sách nhân viên:", error);
    }
  };

  const handlePageClick = (event) => {
    const newPage = event.selected;
    if (searchTerm || filterTypeGT || filterTypeTT) {
      setCurrentPageSearch(newPage);
      fetchListNhanVienSearch(newPage, 5);
    } else {
      fetchListNhanVien(newPage);
    }
  };

  const deleteNhanVien = async (id) => {
    try {
      await deleteUserNv(id);
      toast.success("Xóa thành công");
      if (searchTerm || filterTypeGT || filterTypeTT) {
        fetchListNhanVienSearch(currentPageSearch, 5);
      } else {
        fetchListNhanVien();
      }
    } catch (error) {
      console.error("Có lỗi khi xóa nhân viên:", error);
    }
  };

  const { onTitleChange } = useOutletContext();

  useEffect(() => {
    onTitleChange("Nhân viên");
    if (searchTerm || filterTypeGT || filterTypeTT) {
      fetchListNhanVienSearch();
    } else {
      fetchListNhanVien();
    }
  }, [searchTerm, filterTypeGT, filterTypeTT]
);



  return (
    <>
   
        <div className="form-hien-thi">
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
                 
                </InputGroup>
              </div>

              <div>
                <Link to="/admin/nhan-vien/add">
                  <Button className="btn btn-primary">Thêm Nhân Viên</Button>
                </Link>
              </div>
            </div>

            {/* Bộ lọc các trường dữ liệu */}
            <div className="loc">
              <div className="TrangThai">
                <div><h5>Giới Tính</h5></div>
                <div>
                  <Row className="mb6">
                    <Col>
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
                    <Col>
                      <Form.Group controlId="formStatus">
                        <Form.Control as="select" name="status" onChange={handleLocTrangThaiChange}>
                          <option value="">Tất Cả</option>
                          <option value="HOẠT ĐỘNG">Hoạt động</option>
                          <option value="kHÔNG HOẠT ĐỘNG">Không hoạt động</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>

                <button className="btn btn-outline-danger">Xuất Excel</button>
              </div>
            </div>

            {/* Table */}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Ảnh</th>
                  <th>Mã</th>
                  <th>Họ Và Tên</th>
                  <th>Email</th>
                  <th>SĐT</th>
                  <th>Địa Chỉ</th>
                  <th>Ngày Sinh</th>
                  <th>Giới Tính</th>
                  <th>Chức Vụ</th>
                  <th>Trạng Thái</th>
                  <th>Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                {listNhanVien && listNhanVien.length > 0 ? (
                  listNhanVien.map((item, index) => (
                    <tr key={`table-nhan-vien-${item.id}`}>
                      <td>{index + 1}</td>
                      <td>{item.hinhAnh ? <img src={item.hinhAnh} className="imgAnhUser"></img> : "Đang cập nhật"}</td>
                      <td>{item.ma}</td>
                      <td>{item.ten}</td>
                      <td>{item.email}</td>
                      <td>{item.sdt}</td>
                      <td>{item.diaChi}</td>
                      <td>{dayjs(item.ngaySinh).format("YYYY-MM-DD")}</td>
                      <td>{item.gioiTinh}</td>
                      <td>{item.chucVu}</td>
                      <td>{item.trangThai}</td>
                      <td>
                        <ModalNhanVienDetail item={item} fetchListNhanVien={fetchListNhanVien}>
                          <span><BiSolidUserDetail /></span>
                        </ModalNhanVienDetail>
                        <span onClick={() => deleteNhanVien(item.id)}>
                          <RiDeleteBin6Line />
                        </span>
                        <span>
                        <MdOutlineLockReset />
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={"11"}>
                      <div>Không tìm thấy dữ liệu</div>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>

            {/* phân trang */}
       
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
     
    </>
  );
};

export default NhanVien;