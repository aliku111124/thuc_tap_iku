import React, { useEffect, useState } from "react"; //Cung cấp các công cụ để quản lý component và logic bên trong React.
import { useOutletContext } from "react-router-dom"; //Lấy dữ liệu hoặc context từ các route con.
import dayjs from "dayjs"; //Thư viện để quản lý và định dạng ngày tháng.
import "./PhieuGiamGia.scss"; // Import SCSS
import HeaderPhieuGiamGia from "./HeaderPhieuGiamGia"; // Import component HeaderPhieuGiamGia
import TablePhieuGiamGia from "./TablePhieuGiamGia"; // Import component TablePhieuGiamGia
import { Container } from "react-bootstrap"; // import bootstrap
import { toastError, toastSuccess } from "../../../../../configs/ToastConfig";
import { useDispatch, useSelector } from "react-redux";
import { getVouchers } from "../../../../../redux/action/voucherActions";

const PhieuGiamGia = () => {
  const { onTitleChange } = useOutletContext();
  const dispatch = useDispatch();
  const { listPhieuGiamGia, totalPages } = useSelector(
    (state) => state.voucher
  );
  const [currentPage, setCurrentPage] = useState(1); //Trang Hiện Tại
  // const [totalPages, setTotalPages] = useState(0); // Tổng số trang
  const [itemsPerPage, setItemsPerPage] = useState(5); // Số item trên mỗi trang
  const [searchParams, setSearchParams] = useState({
    keyFind: "",
    trangThai: "",
    sapXep: 1,
    minNgay: "",
    maxNgay: "",
    minGia: "",
    maxGia: "",
  });

  const handleClearForm = () => {
    setSearchParams({
      keyFind: "",
      trangThai: "",
      sapXep: 1,
      minNgay: "",
      maxNgay: "",
      minGia: "",
      maxGia: "",
    });
  };

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  //getall
  const fetchListVoucher = async (page = 0, itemsPerPage = 5) => {
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
      dispatch(getVouchers(page, itemsPerPage, formattedSearchParams));
    } catch (error) {
      toastError("Lỗi khi lấy danh sách Phiếu Giảm Giá");
      console.log(error);
    }
  };

  useEffect(() => {
    const title = "Phiếu giảm giá";
    onTitleChange(title);
    fetchListVoucher(0, 5, searchParams);
  }, [onTitleChange, searchParams]);

  return (
    <div className="phieu-giam-gia">
      <HeaderPhieuGiamGia
        handleClearForm={handleClearForm}
        searchParams={searchParams}
        handleSearchChange={handleSearchChange}
      />
      <TablePhieuGiamGia
        fetchListVoucher={fetchListVoucher}
        listVoucher={listPhieuGiamGia}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default PhieuGiamGia;
