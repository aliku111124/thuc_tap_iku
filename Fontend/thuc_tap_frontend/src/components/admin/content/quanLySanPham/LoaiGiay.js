import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { getAllList, pageList, searchList } from '../../../../services/sanPham/DanhMucService'
import DanhMucTable from "./table/DanhMucTable";
import ListModal from "./Modal/ListModal";
import DanhMucSearch from "./fillter/DanhMucSearch";
const LoaiGiay = () => {


  const [showModalCreateList, setShowModalCreateList] = useState(false)

  const [listList, setListList] = useState([])

     //phan trang
     const [totalUsers, setToTalUsers] = useState(0); // Lưu trữ trạng thái của trang hiện tại
     const [totalPages, setTotalPages] = useState(0);   // Tổng số trang
   
     const fetchListList = async (currentPage =0) => {
       try {
         let res = await pageList(currentPage,5);
         const responseData = res.data
   
         if(responseData && responseData.data){
          setListList(responseData.data.items);//set employee list
           setTotalPages(responseData.data.totalPage);//set total pages
           setToTalUsers(responseData.data.totalElements||0);//set total empolee
   
         }
         
       } catch (error) {
         console.error('loi lay data', error)
       }
     }
     const handlePageClick = async (event) => {
       const newPage = event.selected; // ReactPaginate uses 0-based indexing
       await fetchListList(newPage); // Fetch data for the new page
     };
   


  const { onTitleChange } = useOutletContext();
  useEffect(() => {
    const title = "Danh Mục";
    onTitleChange(title);
    fetchListList()
  }, [onTitleChange]);


  //tim kiem
  function handleFiltersChange(newFilters) {

    searchList(newFilters.searchTerm).then(response => {

      setListList(Array.isArray(response.data) ? response.data : []);
    }).catch(error => {
      console.error("Lỗi khi tìm kiếm sản phẩm:", error);
      setListList([]);
    });
  }
  return (
    <div >
      <DanhMucSearch onSubmit={handleFiltersChange}/>
      <div className="material-container">

        <div className="material-content">
          <div className="btn-add-new">
            <button className="btn btn-primary"
              onClick={() => setShowModalCreateList(true)}
            >Add</button>
          </div>
          <div className="table-material-container">
            <DanhMucTable listList={listList} 
            handlePageClick={handlePageClick}
            totalPages={totalPages}
            fetchListList={fetchListList}
            
            />

          </div>
          <ListModal
            show={showModalCreateList}
            setShow={setShowModalCreateList}
            fetchListList={fetchListList}
          />

        </div>


      </div>
    </div>

  );
};
export default LoaiGiay;
