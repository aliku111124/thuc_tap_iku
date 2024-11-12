import {
  GET_VOUCHERS,
  ADD_VOUCHER,
  UPDATE_VOUCHER,
  DELETE_VOUCHER,
  FIND_BY_ID_VOUCHER,
} from "../constants/voucherConstants";

const initialState = {
  listPhieuGiamGia: [],
  currentPage: 0,
//   totalPages: 0,
  totalElements: 0,
  selectedProduct: null,
  selectedCustomer: null,
  getPhieuGiamGiaID: {},
};

const voucherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VOUCHERS:
      return {
        ...state,
        listPhieuGiamGia: action.payload.responseData.items,
        // currentPage: action.payload.responseData.page,
        totalPages: action.payload.responseData.totalPage,
      };

    case ADD_VOUCHER:
      return {
        ...state,
        listPhieuGiamGia: [...state.listPhieuGiamGia, action.payload],
      };
    case UPDATE_VOUCHER:
      return {
        ...state,
        listPhieuGiamGia: state.listPhieuGiamGia.map((voucher) =>
          voucher.id === action.payload.id ? action.payload.data : voucher
        ),
      };
    case DELETE_VOUCHER:
      return {
        ...state,
        listPhieuGiamGia: state.listPhieuGiamGia.filter(
          (voucher) => voucher.id !== action.payload
        ),
      };

    case FIND_BY_ID_VOUCHER:
      return {
        ...state,
        getPhieuGiamGiaID: action.payload,
      };
    default:
      return state;
  }
};

export default voucherReducer;
