import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  InputGroup,
  Nav,
  Tab,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import {
  getAllHD,
  pagesHoaDon,
  coutbyStatus,
} from "../../../../services/quanLyDonHang/QuanLyDonHangService";
import { AiOutlineInfoCircle } from "react-icons/ai";
import {FaSyncAlt, FaFilter, FaFileExcel} from "react-icons/fa";
import dayjs from "dayjs";
import ReactPaginate from "react-paginate";
import "./quanLyDonHang.scss";
import { toastError, toastSuccess } from "../../../../configs/ToastConfig";
import { saveAs } from 'file-saver';
import axios from 'axios';
import QRScannerComponent from "./QRScannerComponent ";

const QuanLyDonHang = () => {
  const [listHoaDon, setListDonHang] = useState([]);
  const [isFocusedStart, setIsFocusedStart] = useState(false);
  const [isFocusedEnd, setIsFocusedEnd] = useState(false);
  const [loading, setLoading] = useState(false); // Biến trạng thái tải
  const [error, setError] = useState(null); // Biến trạng thái lỗi
  const [totalHD, setToTalHD] = useState(0); // Lưu trữ trạng thái của trang hiện tại
  const [orders, setOrders] = useState([]); // Dữ liệu hóa đơn
  const [totalPages, setTotalPages] = useState(0); // Tổng số trang
  const [currentPage, setCurrentPage] = useState(1); //Trang Hiện Tại
  const [itemsPerPage, setItemsPerPage] = useState(5); // Số item trên mỗi trang
  const [activeKey, setActiveKey] = useState("");
  const { onTitleChange } = useOutletContext();
  

  const [searchParams, setSearchParams] = useState({
    keyFind: "",
    loai: "",
    minNgay: "",
    maxNgay: "",
    minGia: "",
    maxGia: "",
  });

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const fetchListHoaDon = async (
    currentPage = 0,
    itemsPerPage = 5,
    status = ""
  ) => {
    try {
      const formattedSearchParams = {
        ...searchParams,
        minNgay: searchParams.minNgay
          ? dayjs(searchParams.minNgay).toISOString()
          : "",
        maxNgay: searchParams.maxNgay
          ? dayjs(searchParams.maxNgay).toISOString()
          : "",
      };
      const response = await pagesHoaDon(
        currentPage,
        itemsPerPage,
        status,
        formattedSearchParams
      );
      const responseData = response.data;
      if (response && responseData.data) {
        setListDonHang(responseData.data.items);
        setTotalPages(responseData.data.totalPage);
        setToTalHD(responseData.data.totalElements || 0);
      }
    } catch (error) {
      toastError("Lỗi khi lấy danh sách hóa đơn");
    }
  };

  const handlePageClick = async (event) => {
    const newPage = event.selected;
    setCurrentPage(newPage + 1); // Cập nhật `currentPage`
    await fetchListHoaDon(newPage, itemsPerPage, activeKey); // Fetch data for the new page
  };

  const [statusCounts, setStatusCounts] = useState([]); // Danh sách số lượng hóa đơn theo trạng thái
  const [selectedStatuses, setSelectedStatuses] = useState([]); // Các trạng thái được chọn
  const tabTitles = [
    { key: "", label: "Tất cả" },
    { key: "Xác nhận", label: "Xác nhận" },
    { key: "Chuẩn bị Hàng", label: "Chuẩn bị Hàng" },
    { key: "Đang giao hàng", label: "Đang giao hàng" },
    { key: "Đã giao hàng", label: "Đã giao hàng" },
    { key: "Đã hủy", label: "Đã hủy" },
    { key: "Trả hàng", label: "Trả hàng" },
  ];

  // Hàm gửi request và lấy số lượng hóa đơn
  const fetchStatusCounts = async (status) => {
    try {
      const response = await coutbyStatus(status);
      setStatusCounts(response.data);
    } catch (error) {
      console.error("Error fetching status counts:", error);
    }
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedOption(value); // Cập nhật selectedOption

    setSearchParams((prevParams) => ({
      ...prevParams,
      loai: value,
    }));
  };

  const handleReset = () => {
    // Đặt lại các giá trị trong searchParams
    setSearchParams({
      keyFind: '',
      minGia: '',
      maxGia: '',
      minNgay: '',
      maxNgay: '',
      loai: ''
    });
    setSelectedOption(''); 
  };

  const handleExportClick = async () => {
    // Xác nhận từ người dùng trước khi xuất file
    const confirmed = window.confirm("Bạn có chắc muốn xuất file Excel hóa đơn không?");
    if (confirmed) {
      try {
        // Gửi yêu cầu lấy file Excel từ API
        const response = await axios.get("http://localhost:8080/api/v1/admin/bill/excel", {
          responseType: "blob", // Đảm bảo nhận về dữ liệu dưới dạng blob
        });
  
        // Yêu cầu người dùng nhập tên file, với tên mặc định là "hoaDon.xlsx"
        const filename = prompt("Nhập tên file Excel để lưu:", "hoaDon.xlsx");
        if (filename) {
          // Lưu file bằng thư viện file-saver
          saveAs(response.data, filename);
        }
      } catch (error) {
        console.error("Lỗi khi xuất file:", error);
        toastError("Lỗi khi xuất file hóa đơn"); // Thông báo lỗi nếu có
      }
    }
  }

  useEffect(() => {
    const title = "Quản lý đơn hàng";
    onTitleChange(title);
    fetchListHoaDon(0, 5, activeKey);
    fetchStatusCounts(tabTitles.map((tab) => tab.key));
  }, [onTitleChange, activeKey, selectedStatuses, searchParams]);

  return (
    <>
      <div className="hoa-Don">
        <div className="form-nhap-du-lieu">
          <Row className="search-container mb-3 align-items-center">
            <Col md={5} className="text-left">
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
            <Col md={4} className="text-left">
              <h5>Loại</h5>
              <Form.Group>
                <div className="d-flex justify-content-start">
                  <Form.Check
                    inline
                    label="Tất Cả"
                    type="radio"
                    value=""
                    checked={selectedOption === ""}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    label="Trực Tiếp"
                    type="radio"
                    value="Trực Tiếp"
                    checked={selectedOption === "Trực Tiếp"}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    label="Tại Quầy"
                    type="radio"
                    value="Tại Quầy"
                    checked={selectedOption === "Tại Quầy"}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
            </Col>
            <Col md={3} className="text-right d-flex mt-3 gap-3">
              <button onClick={handleReset} className="btn btn-outline-info btn-sm">
                <FaSyncAlt className="mr-1" /> Mới
              </button>
              <button onClick={handleExportClick} className="btn btn-primary btn-sm">
                <FaFileExcel className="mr-1" /> Xuất Excel
              </button>
              <QRScannerComponent
              setSearchParams={setSearchParams}
              />
            </Col>
          </Row>
          <Row className="filter-row mb-3 align-items-center">
            <Col md={5} className="text-left mt-3 mr-3">
              <Form.Label>
                <h5>Khoảng Tiền</h5>
              </Form.Label>
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
            <Col md={6} className="text-left mt-3 ml-3 time-column">
              <Form.Group controlId="dateTimeRangePicker">
                <Form.Label>
                  <h5>Thời gian</h5>
                </Form.Label>
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
          </Row>
        </div>
        <div className="table">
          <Tab.Container id="invoice-tabs" activeKey={activeKey}>
            <Nav variant="tabs" className="flex-nowrap">
              {tabTitles.map((tab, index) => (
                <Nav.Item key={tab.key}>
                  <Nav.Link
                    eventKey={tab.key}
                    onClick={() => {
                      setActiveKey(tab.key);
                      fetchListHoaDon(0, 5, tab.key);
                    }}
                  >
                    {tab.label}
                    {statusCounts[index] !== undefined && (
                      <span className="badge bg-secondary ms-2">
                        {statusCounts[index]}
                      </span>
                    )}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
            <Tab.Content>
              {tabTitles.map((tab) => (
                <Tab.Pane eventKey={tab.key} key={tab.key}>
                  {loading ? (
                    <Spinner animation="border" />
                  ) : error ? (
                    <Alert variant="danger">{error}</Alert>
                  ) : (
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th>Mã</th>
                          <th>Tên Khách Hàng</th>
                          <th>Số Điện Thoại</th>
                          <th>Địa Chỉ</th>
                          <th>Tổng Số Tiền</th>
                          <th>Loại Hóa Đơn</th>
                          <th>Ngày Tạo</th>
                          <th>Trạng Thái</th>
                          <th>Hành Động</th>
                        </tr>
                      </thead>
                      <tbody>
                        {listHoaDon && listHoaDon.length > 0 ? (
                          listHoaDon.map((item, index) => (
                            <tr key={`table-hoa-don-${item.id}`}>
                              <td>{index + 1}</td> <td>{item.maHD}</td>
                              <td>{item.tenKhachHang}</td>
                              <td>{item.soDienThoai}</td>
                              <td>{item.diaChi}</td>
                              <td>{item.tongTien}</td>
                              <td>{item.loaiHoaDon}</td>
                              <td>
                                {dayjs(item.ngayTao).format("YYYY-MM-DD")}
                              </td>
                              <td>{item.trangThai}</td>
                              <td>
                                <span>
                                  <AiOutlineInfoCircle />
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
                  )}
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Tab.Container>
          <Row className="pagination align-items-center">
            <Col xs={4} className="text-left d-flex align-items-center">
              <span className="items-per-page-label mr-2">
                Số phần tử trên trang:
              </span>
              <Form.Control
                as="select"
                value={itemsPerPage}
                onChange={(e) => {
                  const newItemsPerPage = Number(e.target.value);
                  setItemsPerPage(newItemsPerPage);
                  // Kiểm tra xem currentPage có còn hợp lệ không
                  const newPage = currentPage > totalPages ? 1 : currentPage;
                  setCurrentPage(newPage);
                  fetchListHoaDon(newPage - 1, newItemsPerPage, activeKey);
                }}
                className="items-per-page-select"
              >
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </Form.Control>
            </Col>

            <Col xs={4} className="text-center">
              <span>
                Trang {currentPage} / {totalPages}
              </span>
            </Col>

            <Col
              xs={4}
              className="d-flex justify-content-end align-items-center"
            >
              <ReactPaginate
                breakLabel="..." // Hiển thị dấu ba chấm giữa trang đầu và cuối nếu nhiều trang hơn
                nextLabel="Tiếp"
                onPageChange={handlePageClick}
                pageRangeDisplayed={0} // Ẩn các trang ở giữa
                marginPagesDisplayed={1} // Hiển thị trang đầu và trang cuối
                pageCount={totalPages} // Tổng số trang
                previousLabel="Trước"
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
                forcePage={currentPage - 1}
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <div className="container mt-4">
      <h2>Quản lý Hóa Đơn</h2>
      <QuanLyDonHang />
    </div>
  );
};
export default QuanLyDonHang;
