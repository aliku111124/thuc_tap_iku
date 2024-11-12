import React, { useEffect, useState } from "react";
import { FaList, FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Tooltip, OverlayTrigger } from "react-bootstrap"; //icon
import dayjs from "dayjs"; //Thư viện để quản lý và định dạng ngày tháng.
import { Row, Col, Button, Table, Form } from "react-bootstrap";
import ReactPaginate from "react-paginate"; //Dùng để tạo và quản lý phân trang trong ứng dụng React.
import ModalPhieuGiamGia from "./ModalPhieuGiamGia";
import { deleteVoucher } from "../../../../../services/voucher/voucherService"; // import service viết bên java backend
import { toastError, toastSuccess } from "../../../../../configs/ToastConfig";
import "./PhieuGiamGia.scss";
import axios from "axios";
import { saveAs } from "file-saver";

const TablePhieuGiamGia = (props) => {
  const {
    listVoucher,
    fetchListVoucher,
    itemsPerPage,
    setItemsPerPage,
    totalPages,
    currentPage,
    setCurrentPage,
    // searchParams,
    // setCurrentPageSearch,
    // fetchDataSearch,
    // handleRowClick,
  } = props;
  const [currentItemId, setCurrentItemId] = useState(null);
  const [modalMode, setModalMode] = useState("add");
  const [showModal, setShowModal] = useState(false);
  const initialFormData = {
    ma: "",
    ten: "",
    loai: "true",
    giaTri: 0,
    giamToiDa: 0,
    mucDo: "",
    soLuong: 0,
    dieuKien: "",
    trangThai: "đang hoạt động",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handlePageClick = async (event) => {
    const newPage = event.selected;
    setCurrentPage(newPage + 1); // Cập nhật `currentPage`
    await fetchListVoucher(newPage, itemsPerPage); // Fetch data for the new page
  };

  const renderTooltip = (props, text) => (
    <Tooltip id="button-tooltip" {...props}>
      {text}
    </Tooltip>
  );

  const handleExportClick = async () => {
    const confirmed = window.confirm("Bạn có chắc muốn xuất file Excel không?");
    if (confirmed) {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/admin/voucher/excel", {
          responseType: "blob",
        });

        const filename = prompt("Nhập tên file Excel để lưu:", "phieuGiamGia.xlsx");
        if (filename) {
          saveAs(response.data, filename);
        }
      } catch (error) {
        console.error("Lỗi khi xuất file:", error);
        toastError("Lỗi khi xuất file");
      }
    }
  };

  //mở modal (gọi modal)
  const handleShow = (item = null, mode = "add") => {
    setModalMode(mode);
    setShowModal(true);
    if (item) {
      setCurrentItemId(item.id);
      setFormData((prev) => ({
        ...prev,
        ma: item.ma,
        ten: item.ten,
        loai: item.loai,
        giaTri: item.giaTri,
        giamToiDa: item.giamToiDa,
        mucDo: item.mucDo,
        ngayBatDau: dayjs(item.ngayBatDau).format("YYYY-MM-DD"),
        ngayKetThuc: dayjs(item.ngayKetThuc).format("YYYY-MM-DD"),
        soLuong: item.soLuong,
        dieuKien: item.dieuKien,
        trangThai: item.trangThai,
      }));
    } else {
      setFormData(initialFormData);
    }
  };

  //đóng modal
  const handleClose = () => {
    setShowModal(false);
    setFormData(initialFormData);
  };

  //Delete
  //Xóa Voucher
  const handleDeleteVoucher = async (id) => {
    if (window.confirm(`Bạn Có Chắc Chắn Muốn Xóa Không ?`)) {
      try {
        await deleteVoucher(id); // Thay đổi hàm gọi để xóa voucher
        toastSuccess("Xóa Thành Công");
        fetchListVoucher(); // Cập nhật lại danh sách voucher
      } catch (error) {
        toastError("Có Lỗi Xảy Ra Khi Xóa");
      }
    }
  };

  return (
    <>
      <div className="filter-container mt-3">
        <Row className="search-container  align-items-center">
          <Col xs={6} className="d-flex align-items-center">
            <FaList className="me-2" />
            <h5 className="mb-0">Danh sách Voucher</h5>
          </Col>
          <Col xs={6} className="d-flex justify-content-end">
            <div className="d-flex">
              <Button onClick={handleExportClick} className="btn btn-info me-4">
                Xuất Excel
              </Button>
              <Button
                variant="success"
                className="add-button me-2"
                onClick={() => handleShow(null, "add")}
              >
                Thêm mới
              </Button>
            </div>
          </Col>
        </Row>
        <Table striped bordered hover className="rounded-table">
          <thead>
            <tr>
              <th>Mã</th>
              <th>Tên</th>
              <th>Loại</th>
              <th>Giá trị</th>
              <th>Giảm tối đa</th>
              <th>Số lượng</th>
              <th>Điều kiện</th>
              <th>Trạng thái</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {listVoucher &&
              listVoucher.length > 0 &&
              listVoucher.map((item) => (
                <tr key={`table-voucher${item.id}`}>
                  <td>{item.ma}</td>
                  <td>{item.ten}</td>
                  <td>{item.loai ? "Tiền Mặt" : "%"}</td>
                  <td>{item.giaTri} VND</td>
                  <td>{item.giamToiDa} VND</td>
                  <td>{item.soLuong}</td>
                  <td>{item.dieuKien}</td>
                  <td>{item.trangThai}</td>
                  <td>
                    <div className="icon-buttons">
                      <OverlayTrigger
                        placement="top"
                        overlay={(props) => renderTooltip(props, "Xem")}
                      >
                        <button
                          className="icon-button btn btn-info btn-sm mr-2"
                          onClick={() => handleShow(item, "view")}
                        >
                          <FaEye />
                        </button>
                      </OverlayTrigger>

                      <OverlayTrigger
                        placement="top"
                        overlay={(props) => renderTooltip(props, "Sửa")}
                      >
                        <button
                          className="icon-button btn btn-warning btn-sm mr-2"
                          onClick={() => handleShow(item, "edit")}
                        >
                          <FaEdit />
                        </button>
                      </OverlayTrigger>

                      <OverlayTrigger
                        placement="top"
                        overlay={(props) => renderTooltip(props, "Xóa")}
                      >
                        <button
                          className="icon-button btn btn-danger btn-sm"
                          onClick={() => handleDeleteVoucher(item.id)}
                        >
                          <FaTrash />
                        </button>
                      </OverlayTrigger>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
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
                const newPage =
                  currentPage > totalPages ? currentPage : currentPage;
                setCurrentPage(newPage);
                // Gọi lại fetchListVoucher với page và itemsPerPage mới
                fetchListVoucher(newPage - 1, newItemsPerPage);
              }}
              className="items-per-page-select form-select"
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

          <Col xs={4} className="d-flex justify-content-end align-items-center">
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
        <ModalPhieuGiamGia
          showModal={showModal}
          handleClose={handleClose}
          modalMode={modalMode}
          formData={formData}
          currentItemId={currentItemId}
          fetchListVoucher={fetchListVoucher}
          setFormData={setFormData}
        />
      </div>
    </>
  );
};
export default TablePhieuGiamGia;
