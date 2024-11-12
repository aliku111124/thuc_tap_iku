
import CompanyModal from "./Modal/CompanyModal";
import './scss/ThuongHieu.scss';
import ThuongHieuTable from "./table/ThuongHieuTable";
import { useEffect, useState } from "react"
import { getAllCompany, pageCompany, searchCompany } from "../../../../services/sanPham/HangService";
import HangSearch from "./fillter/HangSearch";
import { useOutletContext } from "react-router-dom";



const ThuongHieu = () => {
  const [showModalCreateCompany, setShowModalCreateCompany] = useState(false)

  const [listCompany, setListCompany] = useState([])

     //phan trang
     const [totalUsers, setToTalUsers] = useState(0); // Lưu trữ trạng thái của trang hiện tại
     const [totalPages, setTotalPages] = useState(0);   // Tổng số trang
   
     const fetchListCompany = async (currentPage =0) => {
       try {
         let res = await pageCompany(currentPage,5);
         const responseData = res.data
   
         if(responseData && responseData.data){
          setListCompany(responseData.data.items);//set employee list
           setTotalPages(responseData.data.totalPage);//set total pages
           setToTalUsers(responseData.data.totalElements||0);//set total empolee
   
         }
         
       } catch (error) {
         console.error('loi lay data', error)
       }
     }
     const handlePageClick = async (event) => {
       const newPage = event.selected; // ReactPaginate uses 0-based indexing
       await fetchListCompany(newPage); // Fetch data for the new page
     };


  const { onTitleChange } = useOutletContext();
  useEffect(() => {
    const title = "Thương hiệu ";
    onTitleChange(title);
    fetchListCompany();
  }, [onTitleChange]);



  //tim kiem
  function handleFiltersChange(newFilters) {

    searchCompany(newFilters.searchTerm).then(response => {

      setListCompany(Array.isArray(response.data) ? response.data : []);
    }).catch(error => {
      console.error("Lỗi khi tìm kiếm sản phẩm:", error);
      setListCompany([]);
    });
  }
  return (

    <div>
      <div className="company-container">
        <HangSearch onSubmit={handleFiltersChange} />
        <div className="company-content">
          <div className="btn-add-new">
            <button className="btn btn-primary"
              onClick={() => setShowModalCreateCompany(true)}
            >Add</button>
          </div>
          <div className="table-company-container">
            <ThuongHieuTable listCompany={listCompany} 
            handlePageClick={handlePageClick}
            totalPages={totalPages}
            fetchListCompany={fetchListCompany}
            />

          </div>
          <CompanyModal
            show={showModalCreateCompany}
            setShow={setShowModalCreateCompany}
            fetchListCompany={fetchListCompany}
          />
        </div>


      </div>
    </div>
  )
};
export default ThuongHieu;
