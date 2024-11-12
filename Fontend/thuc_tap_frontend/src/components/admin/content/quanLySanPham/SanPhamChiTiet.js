


import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import SanPhamChiTietTable from "./table/SanPhamChiTietTable";
import ProductDetailModal from "./Modal/ProductDetailModal";
import Button from 'react-bootstrap/Button';
import SanPhamChiTietSearch from "./fillter/SanPhamChiTietSearch";
import { getProductsDetail, searchProductsDetail } from "../../../../redux/action/productDetailAction";

const SanPhamChiTiet = () => {
    const dispatch = useDispatch();
    // const { productDetailList, totalPages } = useSelector(state => state.productDetail);
    const { productDetailList, totalPages, totalElements } = useSelector((state) => state.productDetail);


    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);

    const { onTitleChange } = useOutletContext();

    // Mở modal để thêm/sửa sản phẩm chi tiết
    const handleShowModal = (product = null) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    // Đóng modal và tải lại danh sách sản phẩm
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
        // dispatch(getAllFindByIdSp(id));
        dispatch(getProductsDetail(currentPage)); // Tải lại danh sách sản phẩm sau khi đóng modal
    };

    // Hàm gọi API tìm kiếm sản phẩm
  

    const handleFiltersChange = (filters) => {
        if (!filters.searchTerm && !filters.trangThai && !filters.giaLonHon && !filters.giaNhoHon) {
            dispatch(getProductsDetail());
        } else {
            dispatch(searchProductsDetail(filters));
        }
    };
    




    // Hàm xử lý khi thay đổi trang
    const handlePageChange = (event) => {
        const newPage = event.selected;
        setCurrentPage(newPage);
        dispatch(getProductsDetail(newPage)); // Gọi API phân trang khi thay đổi trang
    };

    useEffect(() => {
        // dispatch(getProductsDetail()); // Gọi API khi component được mount
        onTitleChange("Sản phẩm chi tiết");
    }, [dispatch, onTitleChange]);

    return (
        <div >
            <div className="nav">
                <SanPhamChiTietSearch onSubmit={handleFiltersChange} />
            </div>
            <div>
                <Button onClick={() => handleShowModal()} className="mb-3">Thêm sản phẩm</Button>
            </div>
            <div className="product-detail-container">
                <div className="product-detail-content">
                    <div className="table-product-container">
                        <SanPhamChiTietTable
                            productDetailList={productDetailList}
                            handlePageChange={handlePageChange}
                            totalPages={totalPages}
                            currentPage={currentPage}
                        />
                    </div>

                    <ProductDetailModal
                        show={showModal}
                        handleClose={handleCloseModal}
                        productDetail={selectedProduct}
                        fetchListProductDetail={() => dispatch(getProductsDetail(currentPage))} // Cập nhật lại danh sách sản phẩm
                    />
                </div>
            </div>
        </div>
    );
};

export default SanPhamChiTiet;
