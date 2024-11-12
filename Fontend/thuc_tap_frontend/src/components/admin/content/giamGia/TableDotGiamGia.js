// import { useEffect, useState } from "react";
// import { Table } from "react-bootstrap";
// import { setDeletedSale } from "../../../../services/dotGiamGia/DotGiamGiaService";
// import ModalDotGiamGia from "./ModalDotGiamGia";
// import { toastError, toastSuccess } from "../../../../configs/ToastConfig";
// import dayjs from "dayjs";

// import ReactPaginate from "react-paginate";

// const TableDotGiamGia = (props) => {
//   const {
//     listDotGiamGia,
//     fetchListDotGiamGia,
//     paramsPaginate,
//     setParamsPaginate,
//     pageCount,
//     currentPage,
//     setCurrentPage,
//     searchParams,
//     setCurrentPageSearch,
//     fetchDataSearch,
//     handleRowClick,
//   } = props;

//   const [showModal, setShowModal] = useState(false);
//   const [selectedDotGiamGia, setSelectedDotGiamGia] = useState(null);

//   const handleShowModal = (dotGiamGia) => {
//     setSelectedDotGiamGia(dotGiamGia);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedDotGiamGia(null);
//   };

//   const handleDeleteSale = async (id) => {
//     if (window.confirm(`Delete id: ${id}`)) {
//       try {
//         await setDeletedSale(id);
//         toastSuccess("Ẩn đợt giảm giá thành công");
//         fetchListDotGiamGia({
//           ...paramsPaginate,
//           page: currentPage,
//         });
//       } catch (error) {
//         toastError("Ẩn thất bại");
//         console.error("Error deleting discount period:", error);
//       }
//     }
//   };

//   // const handlePageClick = (event) => {
//   //   const newPage = event.selected;

//   //   // Cập nhật paramsPaginate với page mới
//   //   setParamsPaginate((prevParams) => ({
//   //     ...prevParams,
//   //     page: newPage,
//   //   }));

//   //   setCurrentPage(newPage);

//   //   // Gọi lại fetchListDotGiamGia với params mới
//   //   fetchListDotGiamGia({
//   //     ...paramsPaginate,
//   //     page: newPage,
//   //   });
//   // };

//   const handlePageClick = (event) => {
//     const newPage = event.selected;

//     if (
//       searchParams.value ||
//       searchParams.minNgay ||
//       searchParams.maxNgay ||
//       searchParams.trangThai ||
//       searchParams.minGia ||
//       searchParams.maxGia
//     ) {
//       // Nếu đang tìm kiếm thì gọi fetchDataSearch với trang mới
//       setCurrentPageSearch(newPage); // Đặt trang tìm kiếm mới
//       fetchDataSearch({
//         ...searchParams,
//         page: newPage, // Gửi trang tìm kiếm mới
//       });
//     } else {
//       // Nếu không tìm kiếm, chỉ phân trang bình thường
//       setParamsPaginate((prevParams) => ({
//         ...prevParams,
//         page: newPage,
//       }));
//       setCurrentPage(newPage); // Cập nhật currentPage

//       fetchListDotGiamGia({
//         ...paramsPaginate,
//         page: newPage, // Gọi phân trang với trang mới
//       });
//     }
//   };

//   return (
//     <>
//       <div className="table-content table-hover">
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Mã</th>
//               <th>Tên</th>
//               <th>Giá trị</th>
//               <th>Ngày bắt đầu</th>
//               <th>Ngày kết thúc</th>
//               <th>Loại</th>
//               <th>Hình thức</th>
//               <th>Điều kiện</th>
//               <th>Trạng thái</th>
//               <th>Thao tác</th>
//             </tr>
//           </thead>
//           <tbody>
//             {listDotGiamGia.length > 0 ? (
//               listDotGiamGia.map((item, index) => (
//                 <tr
//                   key={`table-dot-giam-gia-${index}`}
//                   onClick={() => {
//                     handleRowClick(item.id);
//                   }}
//                 >
//                   <th>{index + 1}</th>
//                   <td>{item.ma}</td>
//                   <td>{item.ten}</td>
//                   <td>{item.giaTri}</td>
//                   <td>{dayjs(item.ngayBatDau).format("YYYY-MM-DD HH:mm")}</td>
//                   <td>{dayjs(item.ngayKetThuc).format("YYYY-MM-DD HH:mm")}</td>
//                   <td>{item.loai ? "Tiền mặt" : "Phần trăm"}</td>
//                   <td>{item.hinhThuc}</td>
//                   <td>{item.dieuKien}</td>
//                   <td>{item.trangThai}</td>
//                   <td>
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleShowModal(item);
//                       }}
//                       className="btn btn-primary"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleDeleteSale(item.id);
//                       }}
//                       className="btn btn-danger"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={11}>
//                   <div>Not found data</div>
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </Table>
//         {listDotGiamGia.length > 0 ? (
//           <ReactPaginate
//             breakLabel="..."
//             nextLabel="next >"
//             onPageChange={handlePageClick}
//             pageRangeDisplayed={3}
//             marginPagesDisplayed={2}
//             pageCount={pageCount}
//             previousLabel="< previous"
//             containerClassName="pagination"
//             pageClassName="page-item"
//             pageLinkClassName="page-link"
//             previousClassName="page-item"
//             previousLinkClassName="page-link"
//             nextClassName="page-item"
//             nextLinkClassName="page-link"
//             activeClassName="active"
//             breakClassName="page-item"
//             breakLinkClassName="page-link"
//           />
//         ) : (
//           <div></div>
//         )}
//       </div>
//       <ModalDotGiamGia
//         show={showModal}
//         handleClose={handleCloseModal}
//         dotGiamGia={selectedDotGiamGia}
//         fetchListDotGiamGia={fetchListDotGiamGia}
//         setCurrentPage={setCurrentPage}
//         currentPage={currentPage}
//         paramsPaginate={paramsPaginate}
//       />
//     </>
//   );
// };

// export default TableDotGiamGia;

import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { setDeletedSale } from "../../../../services/dotGiamGia/DotGiamGiaService";
import ModalDotGiamGia from "./ModalDotGiamGia";
import { toastError, toastSuccess } from "../../../../configs/ToastConfig";
import dayjs from "dayjs";

import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../../../redux/action/saleActions";

const TableDotGiamGia = (props) => {
  const dispatch = useDispatch();
  const {
    listDotGiamGia,
    fetchListDotGiamGia,
    paramsPaginate,
    setParamsPaginate,
    pageCount,
    currentPage,
    // setCurrentPage,
    searchParams,
    setCurrentPageSearch,
    fetchDataSearch,
    handleRowClick,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [selectedDotGiamGia, setSelectedDotGiamGia] = useState(null);

  const handleShowModal = (dotGiamGia) => {
    setSelectedDotGiamGia(dotGiamGia);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDotGiamGia(null);
  };

  const handleDeleteSale = async (id) => {
    if (window.confirm(`Delete id: ${id}`)) {
      try {
        await setDeletedSale(id);
        toastSuccess("Ẩn đợt giảm giá thành công");
        fetchListDotGiamGia({
          ...paramsPaginate,
          page: currentPage,
        });
      } catch (error) {
        toastError("Ẩn thất bại");
        console.error("Error deleting discount period:", error);
      }
    }
  };

  // const handlePageClick = (event) => {
  //   const newPage = event.selected;

  //   // Cập nhật paramsPaginate với page mới
  //   setParamsPaginate((prevParams) => ({
  //     ...prevParams,
  //     page: newPage,
  //   }));

  //   setCurrentPage(newPage);

  //   // Gọi lại fetchListDotGiamGia với params mới
  //   fetchListDotGiamGia({
  //     ...paramsPaginate,
  //     page: newPage,
  //   });
  // };

  const handlePageClick = (event) => {
    const newPage = event.selected;

    if (
      searchParams.value ||
      searchParams.minNgay ||
      searchParams.maxNgay ||
      searchParams.trangThai ||
      searchParams.minGia ||
      searchParams.maxGia
    ) {
      // Nếu đang tìm kiếm thì gọi fetchDataSearch với trang mới
      setCurrentPageSearch(newPage); // Đặt trang tìm kiếm mới
      fetchDataSearch({
        ...searchParams,
        page: newPage, // Gửi trang tìm kiếm mới
      });
    } else {
      // Nếu không tìm kiếm, chỉ phân trang bình thường
      setParamsPaginate((prevParams) => ({
        ...prevParams,
        page: newPage,
      }));
      // setCurrentPage(newPage); // Cập nhật currentPage
      dispatch(setCurrentPage(newPage));

      fetchListDotGiamGia({
        ...paramsPaginate,
        page: newPage, // Gọi phân trang với trang mới
      });
    }
  };

  return (
    <>
      <div className="table-content table-hover">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Mã</th>
              <th>Tên</th>
              <th>Giá trị</th>
              <th>Ngày bắt đầu</th>
              <th>Ngày kết thúc</th>
              <th>Loại</th>
              <th>Hình thức</th>
              <th>Điều kiện</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {listDotGiamGia.length > 0 ? (
              listDotGiamGia.map((item, index) => (
                <tr
                  key={`table-dot-giam-gia-${index}`}
                  onClick={() => {
                    handleRowClick(item.id);
                  }}
                >
                  <th>{index + 1}</th>
                  <td>{item.ma}</td>
                  <td>{item.ten}</td>
                  <td>{item.giaTri}</td>
                  <td>{dayjs(item.ngayBatDau).format("YYYY-MM-DD HH:mm")}</td>
                  <td>{dayjs(item.ngayKetThuc).format("YYYY-MM-DD HH:mm")}</td>
                  <td>{item.loai ? "Tiền mặt" : "Phần trăm"}</td>
                  <td>{item.hinhThuc}</td>
                  <td>{item.dieuKien}</td>
                  <td>{item.trangThai}</td>
                  <td>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShowModal(item);
                      }}
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteSale(item.id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={11}>
                  <div>Not found data</div>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        {listDotGiamGia.length > 0 ? (
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            containerClassName="pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
            breakClassName="page-item"
            breakLinkClassName="page-link"
          />
        ) : (
          <div></div>
        )}
      </div>
      <ModalDotGiamGia
        show={showModal}
        handleClose={handleCloseModal}
        dotGiamGia={selectedDotGiamGia}
        fetchListDotGiamGia={fetchListDotGiamGia}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        paramsPaginate={paramsPaginate}
      />
    </>
  );
};

export default TableDotGiamGia;
