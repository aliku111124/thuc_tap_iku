import { BILL_GET_ALL, BILL_PAGE,COUT_BY_STATUS_BILL } from "../../constants/Api";
import axiosInstance from "../../constants/axiosInstance";

export async function getAllHD() {
  return await axiosInstance.get(BILL_GET_ALL);
}

export async function pagesHoaDon(page = 0, size = 5, status = "",searchParams) {
  return await axiosInstance.get(
    `${BILL_GET_ALL}?page=${page}&itemsPerPage=${size}&status=${status}`,{ params: searchParams }
  );
}
export async function coutbyStatus(status) {
  try {
    const response = await axiosInstance.get(COUT_BY_STATUS_BILL, {
      params: { 
        statuses: status.join(',') // Join mảng thành chuỗi với dấu phẩy
      }
    });
    return response;
  } catch (error) {
    console.error("Error fetching count by status:", error);
    throw error;
  }
}


