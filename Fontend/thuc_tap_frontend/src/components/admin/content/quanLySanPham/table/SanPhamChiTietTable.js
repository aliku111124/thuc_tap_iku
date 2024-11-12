

import { useEffect, useState } from "react";
import { setDeletedProductDetail } from "../../../../../services/sanPham/SanPhamChiTietService";
import ProductDetailModal from "../Modal/ProductDetailModal";
import ReactPaginate from 'react-paginate';
import ViewDetailModal from "../Modal/ViewDetailModal";
import { useDispatch, useSelector } from "react-redux";
import { getProductsDetail } from "../../../../../redux/action/productDetailAction";
import ProductQRCode from "../ProductQRCode";
import { toast } from "react-toastify";

const SanPhamChiTietTable = (props) => {
    const {handlePageChange, totalPages,fetchListProductDetail} = props
    const { productDetailList} = useSelector(
        (state) => state.productDetail
      );
    const dispatch = useDispatch();
    const [selectedProductDetail, setSelectedProductDetail] = useState(null);
    const [showModalViewDetail, setShowModalViewDetail] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // Modal detail
    const handleShowViewDetail = (productDetail) => {
        setSelectedProductDetail(productDetail);
        setShowModalViewDetail(true);
    };

    const handleCloseViewDetail = () => {
        setShowModalViewDetail(false);
        setSelectedProductDetail(null);
    };

    // Modal update/create
    const handleShowModalDetail = (productDetail) => {
        setSelectedProductDetail(productDetail);
        setShowModal(true);
    };

    const handleCloseModalDetail = () => {
        setShowModal(false);
        setSelectedProductDetail(null);
    };

    const handleDeleteProductDetail = async (id) => {
        const confirm = window.confirm("Bạn có chắc chắn muốn xóa " );
        if (confirm) {
            try {
                await setDeletedProductDetail(id);
                toast.success("Xóa thành công")
                dispatch(getProductsDetail())
                // fetchListProductDetail(); // Tải lại danh sách sản phẩm
            } catch (error) {
                console.error(error);
            }
        }
    };

    useEffect(() => {
       // fetchListProductDetail(); // Gọi hàm lấy danh sách sản phẩm khi component được mount
       dispatch(getProductsDetail())
    }, []);

    return (
        <>
            <table className="table table-hover table border">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Hãng</th>
                        <th scope="col">Màu sắc</th>
                        <th scope="col">Kích thước</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Giá bán</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Ảnh</th>
                        <th scope="col">QR </th>
                        <th scope="col">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {productDetailList && productDetailList.length > 0 ?
                        productDetailList.map((item, index) => (
                            <tr key={`table-sole-${index}`}>
                                <td>{index + 1}</td>
                                <td>{item.ten}</td>
                                <td>{item.hang}</td>
                                <td>{item.mauSac}</td>
                                <td>{item.kichThuoc}</td>
                                <td>{item.soLuong}</td>
                                <td>{item.giaBan}</td>
                                <td>{item.trangThai}</td>
                                
                                <td>
                                    <img src={item.hinhAnh} className="imgAnhSpct" >
                                    
                                    </img>
                                </td>
                                <td>
                                    <ProductQRCode  id={item.id} />
                                </td>
                                <td>
                                    <button className="btn btn-success" onClick={() => handleShowViewDetail(item)}>Detail</button>
                                    <button className="btn btn-danger" onClick={() => handleDeleteProductDetail(item.id)}>Delete</button>
                                    <button className="btn btn-primary" onClick={() => handleShowModalDetail(item)}>Update</button>
                                </td>
                            </tr>
                        )) :
                        <tr>
                            <td colSpan="10">Not found data</td>
                        </tr>
                    }
                </tbody>
            </table>

            {/* Phân trang */}
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageChange}
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

            <ProductDetailModal
                show={showModal}
                handleClose={handleCloseModalDetail}
                productDetail={selectedProductDetail}
            // onUpdate={fetchListProductDetail}
            />
            <ViewDetailModal
                show={showModalViewDetail}
                handleClose={handleCloseViewDetail}
                productDetail={selectedProductDetail}
            // onUpdate={fetchListProductDetail}
            />
        </>
    );
};

export default SanPhamChiTietTable;
