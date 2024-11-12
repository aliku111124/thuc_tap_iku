import { GET_STAFF_BY_ID } from "../constants/staffContants";

const initialState ={
    staff : {},
};

const staffReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_STAFF_BY_ID:
        return {
          ...state,
          staff: action.payload.responseData,
        };
      default:
        return state;
    }
  };

  export default staffReducer;