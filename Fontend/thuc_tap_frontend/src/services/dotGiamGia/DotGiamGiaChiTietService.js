import { SALE_DETAIL_CREATE } from "../../constants/Api";
import axiosInstance from "../../constants/axiosInstance";

export async function addNewSaleDetail(formData) {
  return await axiosInstance.post(SALE_DETAIL_CREATE, formData);
}
