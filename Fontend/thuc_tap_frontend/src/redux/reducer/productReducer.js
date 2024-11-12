
import { GET_PRODUCTS, SEARCH_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../constants/productContants';

const initialState = {
  productList: [], // Danh sách sản phẩm
  totalPages: 0, // Tổng số trang
  totalElements: 0, // Tổng số sản phẩm
  selectedProduct: null, // Sản phẩm được chọn
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        productList: action.payload.items,
        totalPages: action.payload.totalPages,
        totalElements: action.payload.totalElements,
      };

    // case SEARCH_PRODUCTS:
    //   return {
    //     ...state,
    //     productList: action.payload,
    //     totalPages: 1, // Nếu không sử dụng phân trang cho kết quả tìm kiếm, đặt là 1
    //     totalElements: action.payload.length, // Cập nhật tổng số sản phẩm
    //   };

  

    case SEARCH_PRODUCTS:
      return {
        ...state,
        productList: action.payload.items,
        totalPages: action.payload.totalPages, // Cập nhật số trang từ kết quả tìm kiếm
        totalElements: action.payload.totalElements, // Cập nhật tổng số sản phẩm
      };

    // case SEARCH_PRODUCTS:
    //   return {
    //     ...state,
    //     productList: action.payload.items, // Cập nhật sản phẩm cho trang hiện tại
    //     totalPages: action.payload.totalPages, // Cập nhật số trang từ kết quả tìm kiếm
    //     totalElements: action.payload.totalElements, // Cập nhật tổng số sản phẩm tìm được
    //   };

    case ADD_PRODUCT:
      return {
        ...state,
        productList: [...state.productList, action.payload],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        productList: state.productList.map((product) =>
          product.id === action.payload.id ? action.payload.data : product
        ),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        productList: state.productList.filter((product) => product.id !== action.payload),
      };
    default:
      return state;
  }
};

export default productReducer;
