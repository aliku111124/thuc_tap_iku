import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import ChatLieuTable from "./table/ChatLieuTable";
import { getAllMaterial, pageMaterial, searchMaterial } from "../../../../services/sanPham/ChatLieuService";
import MaterialModal from "./Modal/MaterialModal";
import ChatLieuSearch from "./fillter/ChatLieuSearch";
const ChatLieu = () => {
  const { onTitleChange } = useOutletContext();

  const [showModalCreateMaterial, setShowModalCreateMaterial] = useState(false)

  const [listMaterial, setListMaterial] = useState([])

   //phan trang
   const [totalUsers, setToTalUsers] = useState(0); // Lưu trữ trạng thái của trang hiện tại
   const [totalPages, setTotalPages] = useState(0);   // Tổng số trang
 
  // const fetchListMaterial = async () => {
  //   try {
  //     let res = await getAllMaterial()
  //     setListMaterial(res.data)
  //   } catch (error) {
  //     console.log('loi lay data', error)
  //   }
  // }
  const fetchListMaterial = async (currentPage =0) => {
    try {
      let res = await pageMaterial(currentPage,5);
      const responseData = res.data

      if(responseData && responseData.data){
        setListMaterial(responseData.data.items);//set employee list
        setTotalPages(responseData.data.totalPage);//set total pages
        setToTalUsers(responseData.data.totalElements||0);//set total empolee

      }
      
    } catch (error) {
      console.error('loi lay data', error)
    }
  }

  const handlePageClick = async (event) => {
    const newPage = event.selected; // ReactPaginate uses 0-based indexing
    await fetchListMaterial(newPage); // Fetch data for the new page
  };

  useEffect(() => {
    const title = "Chất liệu";
    onTitleChange(title);
    fetchListMaterial();
  }, [onTitleChange]);

   //tim kiem
   function handleFiltersChange(newFilters) {

    searchMaterial(newFilters.searchTerm).then(response => {

      setListMaterial(Array.isArray(response.data) ? response.data : []);
    }).catch(error => {
      console.error("Lỗi khi tìm kiếm sản phẩm:", error);
      setListMaterial([]);
    });
    }
  return (
    <div>
      <ChatLieuSearch onSubmit={handleFiltersChange}/>
      <div className="material-container">

        <div classNameName="material-content">
          <div classNameName="btn-add-new">
            <button className="btn btn-primary"
              onClick={() => setShowModalCreateMaterial(true)}
            >Add</button>
          </div>
          <div className="table-material-container">
            <ChatLieuTable listMaterial={listMaterial}
            fetchListMaterial={fetchListMaterial}
            handlePageClick={handlePageClick}
            totalPages={totalPages}
            />
            
          </div>
          <MaterialModal
            show={showModalCreateMaterial}
            setShow={setShowModalCreateMaterial}
            fetchListMaterial={fetchListMaterial}
          />

        </div>


      </div>
    </div>


  )




};
export default ChatLieu;
