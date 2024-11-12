import {
  getAllVouchers,
  addNewVoucher,
  deleteVoucher,
  updateVoucher,
  findByIdVoucher,
} from "../../services/voucher/voucherService";
import {
  GET_VOUCHERS,
  ADD_VOUCHER,
  UPDATE_VOUCHER,
  DELETE_VOUCHER,
  FIND_BY_ID_VOUCHER,
} from "../constants/voucherConstants";

const searchParams = {
  keyFind: "",
  trangThai: "",
  sapXep: 1,
  minNgay: "",
  maxNgay: "",
  minGia: "",
  maxGia: "",
};
export const getVouchers =(page = 0, itemsPerPage = 5, params = searchParams) =>
  async (dispatch) => {
    try {
      const response = await getAllVouchers(page, itemsPerPage, params);
      const responseData = response.data.data;
        dispatch({
          type: GET_VOUCHERS,
          payload: {
            responseData,
          },
        });
    } catch (error) {
      console.error("Error getall voucher: ", error);
    }
  };

export const addPGG = (formData) => async (dispatch) => {
  try {
    const response = await addNewVoucher(formData);
    dispatch({
      type: ADD_VOUCHER,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error adding voucher:", error);
  }
};

export const updatePGG = (id, formData) => async (dispatch) => {
  try {
    const response = await updateVoucher(id, formData);
    dispatch({
      type: UPDATE_VOUCHER,
      payload: { id, data: response.data },
    });
  } catch (error) {
    console.error("Error updating voucher:", error);
  }
};

export const deletePGG = (id) => async (dispatch) => {
  try {
    await deleteVoucher(id);
    dispatch({
      type: DELETE_VOUCHER,
      payload: id,
    });
  } catch (error) {
    console.error("Error deleting voucher:", error);
  }
};

// export const getAllFindByIdAction = (id) => async (dispatch) => {
//   try {
//     const response = await findByIdVoucher(id);
//     const responseData = response.data;
//     console.log("Voucher data fetched:", responseData);
//     dispatch({
//       type: FIND_BY_ID_VOUCHER,
//       payload: responseData,
//     });
//   } catch (error) {
//     console.error("Error fetching voucher:", error);
//   }
// };

export const getAllFindByIdAction = (id) => async (dispatch) => {
  try {
      const response = await findByIdVoucher(id);
      const responseData = response.data;
      console.log("Voucher data fetched:", responseData);
      dispatch({
          type: FIND_BY_ID_VOUCHER,
          payload: responseData,
      });
      return responseData;
  } catch (error) {
      console.error("Error fetching voucher:", error);
  }
};

