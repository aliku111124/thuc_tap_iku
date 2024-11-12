import { useEffect, useState } from "react"
import { getAllProduct, setDeletedProduct } from "../../../../../services/sanPham/SanPhamService";
import { Link, Navigate, useNavigate, useOutletContext } from "react-router-dom";
import ProductModal from "../Modal/ProductModal";
import ReactPaginate from 'react-paginate';
import { getProducts } from "../../../../../redux/action/productActions";
import { useDispatch } from "react-redux";
import { getAllFindByIdSp } from "../../../../../redux/action/productDetailAction";
const SanPhamTable = (props) => {
    const dispatch = useDispatch();
    const { fetchListProduct, listProduct,handlePageClick,totalPages } = props
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const handleShowModal = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    const handleDeleteProduct = async (id) => {
        const confirm = window.confirm("Delete " + id)
        if (confirm) {
            try {
                await setDeletedProduct(id)
                alert("Delete");
                // fetchListProduct()
                dispatch(getProducts());
            } catch (error) {
                console.log(error)
            }
        }
    }
    const navigate = useNavigate();
    

    useEffect(() => {
        // fetchListProduct()
        // dispatch(getProducts());
    }, [])

    return (
        <>
            <table className="table table-hover table border">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Mã </th>
                        <th scope="col">Tên </th>
                        <th scope="col">Tên lớp lót</th>
                        <th scope="col">Tên chất liệu </th>
                        <th scope="col">Trạng thái  </th>
                        <th scope="col">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {listProduct && listProduct.length > 0 &&
                        listProduct.map((item, index) => {
                            return (
                                <tr key={`table-product-${index}`}
                            
                                >
                                    <td >{index + 1}</td>
                                    <td>{item.ma}</td>
                                    <td>{item.ten}</td>
                                    <td >{item.tenLopLot}</td>
                                    <td >{item.tenChatLieu} </td>
                                    <td>{item.trangThai}</td>
                                    <td>


                                        <Link
                                            to={{
                                                pathname: "/admin/san-pham-chi-tiet",
                                                state: { product: item }
                                            }}
                                        >
                                            <button className="btn btn-success">Thêm chi tiết</button>
                                        </Link>
                                        <button className="btn btn-danger" onClick={(e) => { 
                                            e.stopPropagation();
                                            handleDeleteProduct(item.id) 
                                            }}>Delete</button>
                                        <button className="btn btn-primary" onClick={(e) => {
                                            e.stopPropagation();
                                             handleShowModal(item) 
                                             }}>update</button>

                                    </td>
                                </tr>
                            )
                        })
                    }

                    {listProduct && listProduct.length === 0 &&
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
            
            <ProductModal show={showModal}
                handleClose={handleCloseModal}
                product={selectedProduct}
                onUpdate={fetchListProduct} ></ProductModal>
        </>
    )
}

export default SanPhamTable