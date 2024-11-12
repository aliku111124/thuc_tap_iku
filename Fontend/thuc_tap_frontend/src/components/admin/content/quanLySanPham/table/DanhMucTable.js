import ReactPaginate from 'react-paginate';
import { toast } from 'react-toastify';
import { setDeletedList } from '../../../../../services/sanPham/DanhMucService';
const DanhMucTable = (props) => {

    const {listList,handlePageClick,totalPages,fetchListList}=props
    
    const handleDeleteList = async (id) => {
        const confirm = window.confirm("Bạn có chắc chắn xóa")
        if (confirm) {
            try {
                await setDeletedList(id)
                toast.success("Xóa thành công")
                fetchListList()
            } catch (error) {
                console.log(error)
            }
        }
    }
    
    return (
        <>
            <table className="table table-hover table border">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Mã </th>
                        <th scope="col">Tên </th>
                        <th scope="col">Trạng thái </th>
                        <th scope="col">Thao tác </th>
                    </tr>
                </thead>
                <tbody>
                    {listList && listList.length > 0 &&
                        listList.map((item, index) => {
                            return (
                                <tr key={`table-sole-${index}`}>
                                    <td >{index + 1}</td>
                                    <td>{item.ma}</td>
                                    <td>{item.ten}</td>
                                    <td>{item.trangThai}</td>
                                    <td>
                                        <button class="btn btn-danger" onClick={()=>{handleDeleteList(item.id)}} >Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                    {listList && listList.length === 0 &&
                        <tr>
                            <td colSpan={'4'}>Not found data</td>
                        </tr>
                    }
                </tbody>
            </table>

            {/* phân trang */}
       
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={totalPages}
              previousLabel="< previous"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"

            />
        </>
    )
}
export default DanhMucTable