
import { useEffect, useState } from "react";
import ProductModal from "./Modal/ProductModal";
import SanPhamTable from "./table/SanPhamTable";
import Button from 'react-bootstrap/Button';
import SanPhamSearch from "./fillter/SanPhamSearch";
import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, addProduct, updateProductAction, deleteProduct, searchProducts } from "../../../../redux/action/productActions";

const SanPham = () => {
  //redux store 
  const dispatch = useDispatch();
  const { productList, totalPages } = useSelector(state => state.product);

  const [showModalCreateProduct, setShowModalCreateProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { onTitleChange } = useOutletContext();

  useEffect(() => {
    onTitleChange("Sản phẩm");
    dispatch(getProducts()); // Lấy danh sách sản phẩm từ API
  }, [dispatch, onTitleChange]);

  // Hiển thị Modal thêm/sửa sản phẩm
  const handleShowModal = (product = null) => {
    setSelectedProduct(product);
    setShowModalCreateProduct(true);
  };

  const handleCloseModal = () => {
    setShowModalCreateProduct(false);
    setSelectedProduct(null);
    dispatch(getProducts()); // Reload products list
  };

  // Phân trang
  const handlePageClick = (event) => {
    const newPage = event.selected; // ReactPaginate uses 0-based indexing
    
    dispatch(getProducts(newPage)); // Fetch data for the new page
  };

 // tìm kiếm

  const handleFiltersChange = (newFilters) => {
    if (newFilters.searchTerm === '') {
      dispatch(getProducts()); // Lấy lại sản phẩm ban đầu nếu tìm kiếm trống
    } else {
      dispatch(searchProducts(newFilters.searchTerm)); // Gửi hành động tìm kiếm
    }
  };
  

  return (
    <div>
      <SanPhamSearch onSubmit={handleFiltersChange} />
      <div className="product-container">
        <Button onClick={() => handleShowModal()} className="mb-3">Thêm sản phẩm</Button>
        <div className="product-content">
          <div className="table-product-container">
            <SanPhamTable
              handlePageClick={handlePageClick}
              totalPages={totalPages}
              listProduct={productList}
            />
          </div>
          <ProductModal
            show={showModalCreateProduct}
            handleClose={handleCloseModal}
            product={selectedProduct}
            handleAddProduct={(formData) => dispatch(addProduct(formData))}
            handleUpdateProduct={(id, formData) => dispatch(updateProductAction(id, formData))}
          />
        </div>
      </div>
    </div>
  );
};

export default SanPham;

