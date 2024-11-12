import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { getAllSize, pageSize, searchSize } from "../../../../services/sanPham/KichThuocService";
import KichThuocTable from "./table/KichThuocTable";
import SizeModal from "./Modal/SizeModal";
import KichThuocSearch from "./fillter/KichThuocSearch";
const KichThuoc = () => {

  const [showModalCreateSize, setShowModalCreateSize] = useState(false);

  const [listSize, setListSize] = useState([])

    //phan trang
    const [totalUsers, setToTalUsers] = useState(0); // Lưu trữ trạng thái của trang hiện tại
    const [totalPages, setTotalPages] = useState(0);   // Tổng số trang
  
    const fetchListSize = async (currentPage =0) => {
      try {
        let res = await pageSize(currentPage,5);
        const responseData = res.data
  
        if(responseData && responseData.data){
          setListSize(responseData.data.items);//set employee list
          setTotalPages(responseData.data.totalPage);//set total pages
          setToTalUsers(responseData.data.totalElements||0);//set total empolee
  
        }
        
      } catch (error) {
        console.error('loi lay data', error)
      }
    }
    const handlePageClick = async (event) => {
      const newPage = event.selected; // ReactPaginate uses 0-based indexing
      await fetchListSize(newPage); // Fetch data for the new page
    };
 

  const { onTitleChange } = useOutletContext();

  useEffect(() => {
    const title = "Kích thước";
    onTitleChange(title);
    fetchListSize()
  }, [onTitleChange]);

  //tim kiem
  function handleFiltersChange(newFilters) {

    searchSize(newFilters.searchTerm).then(response => {

      setListSize(Array.isArray(response.data) ? response.data : []);
    }).catch(error => {
      console.error("Lỗi khi tìm kiếm sản phẩm:", error);
      setListSize([]);
    });
  }
  return (
    <div>
      <div className="size-container">
        <KichThuocSearch onSubmit={handleFiltersChange} />
        <div className="size-content">
          <div className="btn-add-new">
            <button className="btn btn-primary"
              onClick={() => setShowModalCreateSize(true)}
            >Add</button>
          </div>
          <div className="table-size-container">
            <KichThuocTable listSize={listSize}
               handlePageClick={handlePageClick}
               totalPages={totalPages}
               fetchListSize={fetchListSize}
            />

          </div>
          <SizeModal
            show={showModalCreateSize}
            setShow={setShowModalCreateSize}
            fetchListSize={fetchListSize}
          />

        </div>


      </div>
    </div>

  )
};
export default KichThuoc;
