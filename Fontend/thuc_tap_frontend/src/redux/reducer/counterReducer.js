import { INCREMENT, DECREMENT } from "../action/counterActions";

// Khởi tạo trạng thái ban đầu
const initialState = {
  count: 0,
};

// Reducer: Xử lý các hành động cho bộ đếm
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
