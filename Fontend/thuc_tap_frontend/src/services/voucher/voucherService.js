import { VOUCHER, VOUCHER_CREATE, VOUCHER_GET_ALL, VOUCHER_SEARCH, VOUCHER_UPDATE } from "../../constants/Api";
import { VOUCHER_DELETE } from "../../constants/Api";
import axiosInstance from "../../constants/axiosInstance";

// Lấy tất cả các voucher
export async function getAllVouchers(page = 0 , itemsPerPage = 5,searchParams) {
  return await axiosInstance.get(`${VOUCHER_GET_ALL}?page=${page}&itemsPerPage=${itemsPerPage}`,{ params: searchParams });
}

// Thêm mới voucher
export async function addNewVoucher(formData) {
  return await axiosInstance.post(VOUCHER_CREATE, formData);
}

// Xóa voucher
export async function deleteVoucher(id) {
  return await axiosInstance.get(`${VOUCHER_DELETE}/${id}`);
}

// Cập nhật voucher
export async function updateVoucher(id,formData) {
  return await axiosInstance.put(`${VOUCHER_UPDATE}/${id}`, formData);
}

//find by id (tìm kiếm theo id)
export async function findByIdVoucher(id) {
  return await axiosInstance.get(`${VOUCHER}/${id}`)
}
