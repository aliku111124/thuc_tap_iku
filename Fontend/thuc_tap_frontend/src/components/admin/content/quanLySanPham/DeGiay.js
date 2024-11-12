
import SoleModal from "./Modal/SoleModal";
// import './scss/DeGiay.scss'

import DeGiayTable from "./table/DeGiayTable";
import { useEffect, useState } from "react"
import { getAllSole, pageSole, searchSole } from "../../../../services/sanPham/DeGiayService";
import DeGiaySearch from "./fillter/DeGiaySearch";
import { useOutletContext } from "react-router-dom";



const DeGiay = () => {

  const [showModalCreateSole, setShowModalCreateSole] = useState(false);

  const [listSole, setListSole] = useState([])
  //phan trang
  const [totalUsers, setToTalUsers] = useState(0); // Lưu trữ trạng thái của trang hiện tại
  const [totalPages, setTotalPages] = useState(0);   // Tổng số trang

  const fetchListSole = async (currentPage = 0) => {
    try {
      let res = await pageSole(currentPage, 5);
      const responseData = res.data

      if (responseData && responseData.data) {
        setListSole(responseData.data.items);//set employee list
        setTotalPages(responseData.data.totalPage);//set total pages
        setToTalUsers(responseData.data.totalElements || 0);//set total empolee

      }

    } catch (error) {
      console.error('loi lay data', error)
    }
  }
  const handlePageClick = async (event) => {
    const newPage = event.selected; // ReactPaginate uses 0-based indexing
    await fetchListSole(newPage); // Fetch data for the new page
  };

  const { onTitleChange } = useOutletContext();


  useEffect(() => {
    fetchListSole();
    const title = "Đế giày";
    onTitleChange(title);
  }, [onTitleChange]);

  //tim kiem
  function handleFiltersChange(newFilters) {

    searchSole(newFilters.searchTerm).then(response => {

      setListSole(Array.isArray(response.data) ? response.data : []);
    }).catch(error => {
      console.error("Lỗi khi tìm kiếm sản phẩm:", error);
      setListSole([]);
    });
  }
  return (
    <div>
      <div className="sole-container">
        <DeGiaySearch onSubmit={handleFiltersChange} />
        <div classNameName="sole-content">
          <div className="btn-add-new">
            <button className="btn btn-primary"
              onClick={() => setShowModalCreateSole(true)}
            >Thêm đế giày</button>
          </div>

          {/* <div className="btn-add-new">
            <button className="btn btn-primary"
              onClick={() => setShowModalCreateSole(true)}
            >
              Thêm đế giày
            </button>
          </div> */}
          <div className="table-sole-container">
            <DeGiayTable listSole={listSole}
              handlePageClick={handlePageClick}
              totalPages={totalPages}
              fetchListSole={fetchListSole}
            />

          </div>
          <SoleModal
            show={showModalCreateSole}
            setShow={setShowModalCreateSole}
            fetchListSole={fetchListSole}
          />

        </div>


      </div>
    </div>


  )
};
export default DeGiay;
