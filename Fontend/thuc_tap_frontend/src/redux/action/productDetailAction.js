import { pageProductDetail, postCreatNewProductDetail, searchProductDetail, setDeletedProductDetail, updateProductDetail,getAllFindById} from '../../services/sanPham/SanPhamChiTietService';
import { GET_PRODUCTS_DETAIL, SEARCH_PRODUCTS_DETAIL, ADD_PRODUCT_DETAIL, UPDATE_PRODUCT_DETAIL, DELETE_PRODUCT_DETAIL ,GET_PRODUCTS_DETAIL_BYID} from '../constants/productContants';




export const getProductsDetail = (currentPage = 0, pageSize = 5) => async (dispatch) => {
  try {
    const res = await pageProductDetail(currentPage, pageSize);
    const responseData = res.data;
    console.log(responseData)
    if (responseData?.data) {
      dispatch({
        type: GET_PRODUCTS_DETAIL,
        payload: {
          items: responseData.data.items,
          totalPages: responseData.data.totalPage,
          totalElements: responseData.data.totalElements,
        },
      });
       return responseData.data;
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

export const getAllFindByIdSp = (idSp) => async (dispatch) => {
  try {
    const res = await getAllFindById(idSp);
    const responseData = res.data;
    console.log('du lieu',responseData)
   
      dispatch({
        type: GET_PRODUCTS_DETAIL_BYID,
        payload: responseData,
      });
      console.log('Đã dispatch thành công');
    
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};



export const searchProductsDetail = (filters, currentPage = 0, pageSize = 5) => async (dispatch) => {
  const { searchTerm, trangThai, giaLonHon, giaNhoHon } = filters; // Tách các thuộc tính từ filters
  try {
      // Gọi API để tìm kiếm sản phẩm với các bộ lọc và phân trang
      const res = await searchProductDetail(searchTerm, trangThai, giaLonHon, giaNhoHon); 
      const items = res.data || []; // Giả sử API trả về danh sách sản phẩm trong res.data

      const totalElements = items.length; // Tổng số sản phẩm tìm được
      const totalPages = Math.ceil(totalElements / pageSize); // Số trang dựa trên số lượng sản phẩm mỗi trang

      // Lấy các sản phẩm của trang hiện tại
      const paginatedItems = items.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

      dispatch({
          type: SEARCH_PRODUCTS_DETAIL,
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


export const addProductDetail = (formData) => async (dispatch) => {
  try {
    const res = await postCreatNewProductDetail(formData);
    dispatch({
      type: ADD_PRODUCT_DETAIL,
      payload: res.data,
    });
  } catch (error) {
    console.error("Error adding product:", error);
  }
};

export const updateProductDetailAction = (id, formData) => async (dispatch) => {
  try {
    const res = await updateProductDetail(id, formData);
    dispatch({
      type: UPDATE_PRODUCT_DETAIL,
      payload: { id, data: res.data },
    });
  } catch (error) {
    console.error("Error updating product:", error);
  }
};

export const deleteProductDetail = (id) => async (dispatch) => {
  try {
    await setDeletedProductDetail(id);
    dispatch({
      type: DELETE_PRODUCT_DETAIL,
      payload: id,
    });
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};
