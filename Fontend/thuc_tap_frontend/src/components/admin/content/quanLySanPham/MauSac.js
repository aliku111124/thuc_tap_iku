import { useEffect,useState } from "react";
import { useOutletContext } from "react-router-dom";
import MauSacTable from "./table/MauSacTable";
import ColorModal from "./Modal/ColorModal";
import { getAllColor, pageColor, searchColor } from "../../../../services/sanPham/MauSacService";
import MauSacSearch from "./fillter/MauSacSearch";
const MauSac = () => {


  const [showModalCreateColor, setShowModalCreateColor] = useState(false)

  const [listColor, setListColor] = useState([])

    //phan trang
    const [totalUsers, setToTalUsers] = useState(0); // Lưu trữ trạng thái của trang hiện tại
    const [totalPages, setTotalPages] = useState(0);   // Tổng số trang
  
    const fetchListColor = async (currentPage =0) => {
      try {
        let res = await pageColor(currentPage,5);
        const responseData = res.data
  
        if(responseData && responseData.data){
          setListColor(responseData.data.items);//set employee list
          setTotalPages(responseData.data.totalPage);//set total pages
          setToTalUsers(responseData.data.totalElements||0);//set total empolee
  
        }
        
      } catch (error) {
        console.error('loi lay data', error)
      }
    }
    const handlePageClick = async (event) => {
      const newPage = event.selected; // ReactPaginate uses 0-based indexing
      await fetchListColor(newPage); // Fetch data for the new page
    };
  
  

  const { onTitleChange } = useOutletContext();
  useEffect(() => {
    const title = "Màu sắc ";
    onTitleChange(title);
    fetchListColor();
  }, [onTitleChange]);

   //tim kiem
   function handleFiltersChange(newFilters) {

    searchColor(newFilters.searchTerm).then(response => {

      setListColor(Array.isArray(response.data) ? response.data : []);
    }).catch(error => {
      console.error("Lỗi khi tìm kiếm sản phẩm:", error);
      setListColor([]);
    });
    }
  return(
    <div>
      <MauSacSearch onSubmit={handleFiltersChange}/>
    <div className="material-container">

      <div classNameName="material-content">
        <div classNameName="btn-add-new">
          <button className="btn btn-primary"
            onClick={() => setShowModalCreateColor(true)}
          >Add</button>
        </div>
        <div className="table-material-container">
          <MauSacTable listColor={listColor}
          handlePageClick={handlePageClick}
          totalPages={totalPages}
          fetchListColor={fetchListColor}
          />

        </div>
        <ColorModal
          show={showModalCreateColor}
          setShow={setShowModalCreateColor}
          fetchListColor={fetchListColor}
        />

      </div>


    </div>
  </div>


  );
};
export default MauSac;
