

import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import "./DotGiamGia.scss";
import TableDotGiamGia from "./TableDotGiamGia";
import HeaderDotGiamGia from "./HeaderDotGiamGia";
import { useNavigate, useOutletContext } from "react-router-dom";
import {
  getAllSale,
  setDeletedSale,
} from "../../../../services/dotGiamGia/DotGiamGiaService";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { GET_SALES } from "../../../../redux/constants/saleConstants";
import {
  getAllFindByIdAction,
  getSales,
  getSalesSearch,
  setCurrentPage,
} from "../../../../redux/action/saleActions";
const DotGiamGia = () => {
  const dispatch = useDispatch();
  const { listDotGiamGia, currentPage, pageCount } = useSelector(
    (state) => state.sale
  );

  const [searchParams, setSearchParams] = useState({
    page: "0",
    size: "5",
    sortBy: "ngayTao",
    sortDir: "desc",
    value: "",
    minNgay: "",
    maxNgay: "",
    trangThai: "",
    minGia: "",
    maxGia: "",
  });

  const handleClearForm = () => {
    setSearchParams({
      page: "0",
      size: "5",
      sortBy: "ngayTao",
      sortDir: "desc",
      value: "",
      minNgay: "",
      maxNgay: "",
      trangThai: "",
      minGia: "",
      maxGia: "",
    });
    dispatch(setCurrentPage(0));
    fetchListDotGiamGia(paramsPaginate);
  };

  const [paramsPaginate, setParamsPaginate] = useState({
    page: "0",
    size: "5",
    sortBy: "ngayTao",
    sortDir: "desc",
  });

  const [currentPageSearch, setCurrentPageSearch] = useState(0);

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
    setCurrentPageSearch(0);
  };

  const fetchDataSearch = async (searchParam = searchParams) => {
    console.log("Tim kiem da chay vao day");
    try {
      const formattedSearchParams = {
        ...searchParam,
        page: currentPageSearch,
        minNgay: searchParam.minNgay
          ? dayjs(searchParam.minNgay).toISOString()
          : "",
        maxNgay: searchParam.maxNgay
          ? dayjs(searchParam.maxNgay).toISOString()
          : "",
      };
      // const response = await searchSale(formattedSearchParams);
      // setListDotGiamGia(response.data.data.items);
      // fetchListDotGiamGia(formattedSearchParams);
      dispatch(getSalesSearch(formattedSearchParams));
      // setPageCount(response.data.data.totalPage);
    } catch (error) {
      console.log("Error during search:", error);
    }
  };

  const title = "Đợt giảm giá";

  const handleExport = () => {
    console.log("Exporting to Excel");
  };

  // const [listDotGiamGia, setListDotGiamGia] = useState([]);

  // const [currentPage, setCurrentPage] = useState(0);

  // const [pageCount, setPageCount] = useState(0);

  const fetchListDotGiamGia = async (params = paramsPaginate) => {
    try {
      dispatch(getSales(params));
    } catch (error) {
      console.error("Error fetching discount periods:", error);
    }
  };

  const navigate = useNavigate();
  const handleRowClick = (id) => {
    navigate(`/admin/dot-giam-gia/${id}`);
    dispatch(getAllFindByIdAction(id))
  };
  const { onTitleChange } = useOutletContext();
  useEffect(() => {
    const title = "Đợt giảm giá";
    onTitleChange(title);


    if (
      searchParams.value ||
      searchParams.minNgay ||
      searchParams.maxNgay ||
      searchParams.trangThai ||
      searchParams.minGia ||
      searchParams.maxGia
    ) {
      fetchDataSearch(searchParams);
    } else {
      fetchListDotGiamGia(searchParams);
    }
  }, [currentPageSearch, searchParams]); //

  return (

    <div>
      <HeaderDotGiamGia
        handleExport={handleExport}
        handleSearchChange={handleSearchChange}
        searchParams={searchParams}
        handleClearForm={handleClearForm}
      />
      <TableDotGiamGia
        fetchListDotGiamGia={fetchListDotGiamGia}
        listDotGiamGia={listDotGiamGia}
        paramsPaginate={paramsPaginate}
        setParamsPaginate={setParamsPaginate}
        pageCount={pageCount}
        // setCurrentPage={dispatch(setCurrentPage())}
        currentPage={currentPage}
        searchParams={searchParams}
        fetchDataSearch={fetchDataSearch}
        setCurrentPageSearch={setCurrentPageSearch}
        handleRowClick={handleRowClick}
      />
    </div>

  );
};

export default DotGiamGia;
