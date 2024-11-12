import ReactPaginate from 'react-paginate';
import { toast } from 'react-toastify';
import { setDeletedCompany } from '../../../../../services/sanPham/HangService';
const ThuongHieuTable=(props) =>{

    const {listCompany,handlePageClick,totalPages,fetchListCompany}=props
    
    const handleDeleteCompany = async (id) => {
        const confirm = window.confirm("Bạn có chắc chắn xóa")
        if (confirm) {
            try {
                await setDeletedCompany(id)
                toast.success("Xóa thành công")
                fetchListCompany()
            } catch (error) {
                console.log(error)
            }
        }
    }
    
    return(
        <>
            <table className="table table-hover table-bordered" >
                <thead>
                    <tr >
                        <th scope="col">##</th>
                        <th scope="col">Mã</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {listCompany && listCompany.length>0 &&
                    listCompany.map((item,index)=>{
                        return(
                            <tr key={`table-company-${index}`}>
                                <td scope="row">{index+1}</td>
                                <td >{item.ma}</td>
                                <td >{item.ten}</td>
                                <td >{item.trangThai}</td>
                                <td >
                                <button class="btn btn-danger" onClick={()=>{handleDeleteCompany(item.id)}}>Delete</button>
                                 </td>
                            </tr>
                        )
                    })
                    }
                    {listCompany && listCompany.length==0 &&
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
export default ThuongHieuTable