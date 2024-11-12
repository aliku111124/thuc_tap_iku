import { GET_CUSTOMER, ADD_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER, SEARCH_CUSTOMER, SEARCH_CUSTOMER_BY_SDT } from '../constants/customerConstants';
const initialState = {
  customerList: [], // Danh sách khách hàng
  totalPages: 0, // Tổng số trang
  totalElements: 0, // Tổng số khách hàng
  selectedCustomer: null, // Khách hàng được chọn
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMER:
      return {
        ...state,
        customerList: action.payload.items,
        totalPages: action.payload.totalPages,
        totalElements: action.payload.totalElements,
      };

    case SEARCH_CUSTOMER:
      return {
        ...state,
        customerList: action.payload.items,
        totalPages: action.payload.totalPages,
        totalElements: action.payload.totalElements,
      };

    case ADD_CUSTOMER:
      return {
        ...state,
        customerList: [...state.customerList, action.payload],
      };

    case UPDATE_CUSTOMER:
      return {
        ...state,
        customerList: state.customerList.map((customer) =>
          customer.id === action.payload.id ? action.payload.data : customer
        ),
      };

    case DELETE_CUSTOMER:
      return {
        ...state,
        customerList: state.customerList.filter((customer) => customer.id !== action.payload),
      };
    case SEARCH_CUSTOMER_BY_SDT:
      return {
        ...state,
        selectedCustomer:action.payload
      };
    default:
      return state;
  }
};

export default customerReducer;