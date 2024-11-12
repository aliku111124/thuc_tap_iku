import { useEffect, useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import SanPhamSearch from "../../quanLySanPham/fillter/SanPhamSearch";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  searchProducts,
} from "../../../../../redux/action/productActions";
import {
  getAllFindById,
  getAllFindByIdSp,
  getProductsDetail,
} from "../../../../../redux/action/productDetailAction";
import axiosInstance from "../../../../../constants/axiosInstance";
import dayjs from "dayjs";
import { addNewSaleDetail } from "../../../../../services/dotGiamGia/DotGiamGiaChiTietService";
import { toast } from "react-toastify";
const DotGiamGiaChiTiet = () => {
  const { id } = useParams();
  const onUpdate = "update";

  const dispatch = useDispatch();
  const { productList, totalPages } = useSelector((state) => state.product);
  const { productDetailList, totalPagesDetail, totalElements } = useSelector(
    (state) => state.productDetail
  );
  const { getDotGiamGiaByID } = useSelector((state) => state.sale);
  console.log(getDotGiamGiaByID);
  //timf kieem
  const handleFiltersChange = (newFilters) => {
    if (newFilters.searchTerm === "") {
      dispatch(getProducts()); // Lấy lại sản phẩm ban đầu nếu tìm kiếm trống
    } else {
      dispatch(searchProducts(newFilters.searchTerm)); // Gửi hành động tìm kiếm
    }
  };

  // Phân trang
  const handlePageClick = (event) => {
    const newPage = event.selected; // ReactPaginate uses 0-based indexing
    dispatch(getProducts(newPage)); // Fetch data for the new page
  };

  // Hàm xử lý khi thay đổi trang

  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = (event) => {
    const newPage = event.selected;
    setCurrentPage(newPage);
    dispatch(getProductsDetail(newPage)); // Gọi API phân trang khi thay đổi trang
  };

  const handleRowClick = (idSp) => {
    console.log(idSp);
    let res = dispatch(getAllFindByIdSp(idSp));
    console.log("data:", res);
  };

  const [selectedRows, setSelectedRows] = useState([]);
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      // Nếu chọn tất cả, thêm tất cả các id vào selectedRows
      setSelectedRows(productDetailList.map((row) => row.id));
    } else {
      // Nếu bỏ chọn tất cả, làm rỗng selectedRows
      setSelectedRows([]);
    }
  };
  const handleSelectRow = (id) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(id)
        ? prevSelectedRows.filter((rowId) => rowId !== id)
        : [...prevSelectedRows, id]
    );
  };

  const handleSubmitAddSale = async () => {
    console.log(getDotGiamGiaByID);
    console.log(selectedRows);
    const formData = {
      dotGiamGiaUpdate: getDotGiamGiaByID,
      idSpcts: selectedRows,
    };
    console.log(formData);
    try {
      const res = await addNewSaleDetail(formData);
      console.log(res);
      toast.success("Thêm thành công");
      navigate("/admin/dot-giam-gia");
    } catch (error) {
      toast.error("Thêm thất bại");
      console.log(error);
    }
  };

  const navigate = useNavigate();
  const { onTitleChange } = useOutletContext();
  useEffect(() => {
    const title = "Chi tiết đợt giảm giá";
    dispatch(getProducts()); //lay api sp
    // dispatch(getProductsDetail());//lay api s
    onTitleChange(title);
  }, [onTitleChange]);

  return (
    <>
      <div className="detail-sale-container">
        <div className="detail-sale-header"></div>
        <div className="detail-sale-content">
          <Row>
            <Col>
              <div>
                <Form
                //  onSubmit={handleSubmitDotGiamGia}
                >
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formMa">
                      <Form.Label>Mã</Form.Label>
                      <Form.Control
                        type="text"
                        name="ma"
                        value={getDotGiamGiaByID.ma}
                        // onChange={handleInputChange}
                        required
                        readOnly
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formTen">
                      <Form.Label>Tên</Form.Label>
                      <Form.Control
                        type="text"
                        name="ten"
                        value={getDotGiamGiaByID.ten}
                        // onChange={handleInputChange}
                        required
                        readOnly
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGiaTri">
                      <Form.Label>Giá Trị</Form.Label>
                      <Form.Control
                        type="number"
                        name="giaTri"
                        value={getDotGiamGiaByID.giaTri}
                        // onChange={handleInputChange}
                        step="1"
                        required
                        readOnly
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formLoai">
                      <Form.Label>Loại</Form.Label>
                      {getDotGiamGiaByID.loai ? (
                        <Form.Check
                          type="radio"
                          label="Tiền mặt"
                          name="loai"
                          value={getDotGiamGiaByID.loai}
                          checked={true}
                          readOnly
                          // onChange={handleInputChange}
                        />
                      ) : (
                        <Form.Check
                          type="radio"
                          label="Phần trăm"
                          name="loai"
                          value={getDotGiamGiaByID.loai}
                          checked={true}
                          readOnly
                          // onChange={handleInputChange}
                        />
                      )}
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formHinhThuc">
                      <Form.Label>Hình Thức</Form.Label>
                      <Form.Control
                        type="text"
                        name="hinhThuc"
                        value={getDotGiamGiaByID.hinhThuc}
                        // onChange={handleInputChange}
                        required
                        readOnly
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formDieuKien">
                      <Form.Label>Điều Kiện</Form.Label>
                      <Form.Control
                        type="text"
                        name="dieuKien"
                        value={getDotGiamGiaByID.dieuKien}
                        // onChange={handleInputChange}
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
                        value={dayjs(getDotGiamGiaByID.ngayBatDau).format(
                          "YYYY-MM-DD HH:mm"
                        )}
                        // onChange={handleInputChange}
                        required
                        readOnly
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formNgayKetThuc">
                      <Form.Label>Ngày Kết Thúc</Form.Label>
                      <Form.Control
                        type="datetime-local"
                        name="ngayKetThuc"
                        value={dayjs(getDotGiamGiaByID.ngayKetThuc).format(
                          "YYYY-MM-DD HH:mm"
                        )}
                        // onChange={handleInputChange}
                        required
                        readOnly
                      />
                    </Form.Group>
                  </Row>
                </Form>
              </div>
            </Col>
            <Col>
              <div>
                <SanPhamSearch onSubmit={handleFiltersChange} />
                <table className="table table-hover table border">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Mã </th>
                      <th scope="col">Tên </th>
                      <th scope="col">Ngày tạo </th>
                      <th scope="col">Tên chất liệu </th>
                      <th scope="col">Trạng thái </th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.length > 0 ? (
                      productList.map((item, index) => {
                        return (
                          <tr
                            key={`table-sole-${index}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRowClick(item.id);
                            }}
                          >
                            <td>{index + 1}</td>
                            <td>{item.ma}</td>
                            <td>{item.ten}</td>
                            <td>{item.ngayTao}</td>
                            <td>{item.tenChatLieu} </td>
                            <td>{item.trangThai}</td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan={"4"}>Not found data</td>
                      </tr>
                    )}
                  </tbody>
                </table>

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
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <div>
              <table className="table table-hover table border">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Hãng</th>
                    <th scope="col">Màu sắc</th>
                    <th scope="col">Kích thước</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Giá bán</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Ảnh</th>
                    <th scope="col">
                      <input
                        type="checkbox"
                        checked={
                          selectedRows.length === productDetailList.length
                        }
                        onChange={handleSelectAll}
                        label="Chọn tất cả"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productDetailList && productDetailList.length > 0 ? (
                    productDetailList.map((item, index) => (
                      <tr key={`table-sole-${index}`}>
                        <td>{index + 1}</td>
                        <td>{item.ten}</td>
                        <td>{item.hang}</td>
                        <td>{item.mauSac}</td>
                        <td>{item.kichThuoc}</td>
                        <td>{item.soLuong}</td>
                        <td>{item.giaBan}</td>
                        <td>{item.trangThai}</td>
                        <td>
                          <img src={item.hinhAnh} className="imgAnhSpct"></img>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={selectedRows.includes(item.id)}
                            onChange={(e) => {
                              e.stopPropagation();
                              handleSelectRow(item.id);
                            }}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="10">Not found data</td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/*// Phân trang
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageChange}
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
              /> */}
            </div>
          </Row>
        </div>
        <button onClick={handleSubmitAddSale} className="btn btn-success">
          Save
        </button>
      </div>
    </>
  );
};
export default DotGiamGiaChiTiet;
