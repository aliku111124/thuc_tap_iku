import {
  FIND_BY_ID,
  GET_SALES,
  SEARCH_SALES,
} from "../constants/saleConstants";

const initialState = {
  listDotGiamGia: [],
  currentPage: 0,
  pageCount: 0,
  selectedProduct: null,
  getDotGiamGiaByID: {},
};

const saleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SALES:
      return {
        ...state,
        listDotGiamGia: action.payload.responseData.items,
        currentPage: action.payload.responseData.page,
        pageCount: action.payload.responseData.totalPage,
      };
    case SEARCH_SALES:
      return {
        ...state,
        listDotGiamGia: action.payload.responseData.items,
        currentPage: action.payload.responseData.page,
        pageCount: action.payload.responseData.totalPage,
      };

    case FIND_BY_ID:
      return {
        ...state,
        getDotGiamGiaByID: action.payload,
      };
    default:
      return state;
  }
};

export default saleReducer;
