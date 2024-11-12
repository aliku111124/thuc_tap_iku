import { GET_PRODUCTS_DETAIL, SEARCH_PRODUCTS_DETAIL, ADD_PRODUCT_DETAIL, UPDATE_PRODUCT_DETAIL, DELETE_PRODUCT_DETAIL, GET_PRODUCTS_DETAIL_BYID } from '../constants/productContants';

const initialState = {
  productDetailList: [], // Danh sách sản phẩm
  totalPages: 0, // Tổng số trang
  totalElements: 0, // Tổng số sản phẩm
  selectedProductDetail: null, // Sản phẩm được chọn
};

const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_DETAIL:
      return {
        ...state,
        productDetailList: action.payload.items,
        totalPages: action.payload.totalPages,
        totalElements: action.payload.totalElements,
      };

    case GET_PRODUCTS_DETAIL_BYID:
      return {
        ...state,
        productDetailList: action.payload, // Cập nhật sản phẩm chi tiết được chọn
      };



    case SEARCH_PRODUCTS_DETAIL:
      return {
        ...state,
        productDetailList: action.payload.items,
        totalPages: action.payload.totalPages, // Đảm bảo có cập nhật tổng số trang
        totalElements: action.payload.totalElements, // Cập nhật tổng số sản phẩm
      };

    case ADD_PRODUCT_DETAIL:
      return {
        ...state,
        productDetailList: [...state.productDetailList, action.payload],
      };
    case UPDATE_PRODUCT_DETAIL:
      return {
        ...state,
        productDetailList: state.productDetailList.map((product) =>
          product.id === action.payload.id ? action.payload.data : product
        ),
      };
    case DELETE_PRODUCT_DETAIL:
      return {
        ...state,
        productDetailList: state.productDetailList.filter((product) => product.id !== action.payload),
      };
    default:
      return state;
  }
};

export default productDetailReducer;
