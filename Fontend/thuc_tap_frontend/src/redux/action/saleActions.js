import {
  getAllFindById,
  getAllSale,
  searchSale,
  updateSale,
} from "../../services/dotGiamGia/DotGiamGiaService";
import {
  GET_SALES,
  SET_CURRENT_PAGE,
  SEARCH_SALES,
  FIND_BY_ID,
} from "../constants/saleConstants";

const initialActions = {
  page: "0",
  size: "5",
  sortBy: "ngayTao",
  sortDir: "desc",
  value: "",
  minNgay: "",
  maxNgay: "",
  trangThai: "",
  minGia: "",
  maxGia: "",
};

export const getSales =
  (params = initialActions) =>
  async (dispatch) => {
    try {
      const response = await getAllSale(params);
      console.log(response);
      const responseData = response.data.data;
      dispatch({
        type: GET_SALES,
        payload: {
          responseData,
        },
      });
    } catch (error) {
      console.error("Error: ", error);
    }
  };

export const getSalesSearch =
  (params = initialActions) =>
  async (dispatch) => {
    try {
      const response = await searchSale(params);
      console.log(response);
      const responseData = response.data.data;
      dispatch({
        type: SEARCH_SALES,
        payload: {
          responseData,
        },
      });
    } catch (error) {
      console.error("Error: ", error);
    }
  };

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page,
  };
};

export const getAllFindByIdAction = (id) => async(dispatch)=>{
  try{
    const res = await getAllFindById(id)
    const responseData = res.data;
    dispatch({
      type:FIND_BY_ID,
      payload:responseData
    })
  }catch(error){
    console.error('Error fetching sale:', error);
  }
}
