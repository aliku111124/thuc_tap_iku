import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { getAllLining, pageLining, searchLining } from "../../../../services/sanPham/LopLotService";
import LiningModal from "./Modal/LiningModal";
import LopLotTable from "./table/LopLotTable";
import LopLotSearch from "./fillter/LopLotSearch";

const LopLot = () => {

  const [showModalCreateLining, setShowModalCreateLining] = useState(false);

  const [listLining, setListLining] = useState([])



     //phan trang
     const [totalUsers, setToTalUsers] = useState(0); // Lưu trữ trạng thái của trang hiện tại
     const [totalPages, setTotalPages] = useState(0);   // Tổng số trang
   
     const fetchListLining = async (currentPage =0) => {
       try {
         let res = await pageLining(currentPage,5);
         const responseData = res.data
   
         if(responseData && responseData.data){
          setListLining(responseData.data.items);//set employee list
           setTotalPages(responseData.data.totalPage);//set total pages
           setToTalUsers(responseData.data.totalElements||0);//set total empolee
   
         }
         
       } catch (error) {
         console.error('loi lay data', error)
       }
     }
     const handlePageClick = async (event) => {
       const newPage = event.selected; // ReactPaginate uses 0-based indexing
       await fetchListLining(newPage); // Fetch data for the new page
     };
   
 
  const { onTitleChange } = useOutletContext();
  useEffect(() => {
    fetchListLining()
    const title = "Lớp lót";
    onTitleChange(title);
  }, [onTitleChange]);
  //tim kiem
  function handleFiltersChange(newFilters) {

    searchLining(newFilters.searchTerm).then(response => {

      setListLining(Array.isArray(response.data) ? response.data : []);
    }).catch(error => {
      console.error("Lỗi khi tìm kiếm sản phẩm:", error);
      setListLining([]);
    });
  }
  return (
    <div>
      <div className="sole-container">
        <LopLotSearch onSubmit={handleFiltersChange} />
        <div className="sole-content">
          <div className="btn-add-new">
            <button className="btn btn-primary"
              onClick={() => setShowModalCreateLining(true)}
            >Add</button>
          </div>
          <div className="table-sole-container">
            <LopLotTable listLining={listLining}
            handlePageClick={handlePageClick}
            totalPages={totalPages}
            fetchListLining={fetchListLining}
            
            />

          </div>
          <LiningModal
            show={showModalCreateLining}
            setShow={setShowModalCreateLining}
            fetchListLining={fetchListLining}
          />

        </div>


      </div>
    </div>

  )
};
export default LopLot;