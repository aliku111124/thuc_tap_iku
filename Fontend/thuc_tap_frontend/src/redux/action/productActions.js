import { GET_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, SEARCH_PRODUCTS} from '../constants/productContants';
import {  postCreatNewProduct, updateProduct, setDeletedProduct, PageProduct, searchProduct } from '../../services/sanPham/SanPhamService';

// export const getProducts = () => async (dispatch) => {
//   try {
//     const res = await getAllProduct();
//     dispatch({
//       type: GET_PRODUCTS,
//       payload: res.data,
//     });
//   } catch (error) {
//     console.error("Error fetching products:", error);
//   }
// };

export const getProducts = (currentPage = 0, pageSize = 5) => async (dispatch) => {
  try {
    const res = await PageProduct(currentPage, pageSize);
    const responseData = res.data;

    if (responseData && responseData.data) {
      dispatch({
        type: GET_PRODUCTS,
        payload: {
          items: responseData.data.items,
          totalPages: responseData.data.totalPage,
          totalElements: responseData.data.totalElements,
        },
      });
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};





export const searchProducts = (searchTerm, currentPage = 0, pageSize = 5) => async (dispatch) => {
  try {
    const res = await searchProduct(searchTerm);
    const items = res.data || [];
    
    const totalElements = items.length; // Tổng số sản phẩm tìm được
    const totalPages = Math.ceil(totalElements / pageSize); // Số trang dựa trên số lượng sản phẩm mỗi trang

    // Lấy các sản phẩm của trang hiện tại
    const paginatedItems = items.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

    dispatch({
      type: SEARCH_PRODUCTS,
      payload: {
        items: paginatedItems, // Chỉ hiển thị sản phẩm cho trang hiện tại
        totalPages, // Tổng số trang của kết quả tìm kiếm
        totalElements, // Tổng số sản phẩm tìm được
      },
    });
  } catch (error) {
    console.error('Error searching products:', error);
  }
};


export const addProduct = (formData) => async (dispatch) => {
  try {
    const res = await postCreatNewProduct(formData);
    dispatch({
      type: ADD_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    console.error("Error adding product:", error);
  }
};

export const updateProductAction = (id, formData) => async (dispatch) => {
  try {
    const res = await updateProduct(id, formData);
    dispatch({
      type: UPDATE_PRODUCT,
      payload: { id, data: res.data },
    });
  } catch (error) {
    console.error("Error updating product:", error);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await setDeletedProduct(id);
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};
