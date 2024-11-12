import { CUSTOMER_GET_ALL, CUSTOMER_CREATE, CUSTOMER_UPDATE, CUSTOMER_DELETE, CUSTOMER_SEARCH, CUSTOMER_PAGE, CUSTOMER_SEARCH_BY_SDT} from "../../constants/Api";
import axiosInstance from "../../constants/axiosInstance";

export async function getAllKhachHang() {
    return await axiosInstance.get(CUSTOMER_GET_ALL);
  }
  export async function addNewCustomer(formData) {
    return await axiosInstance.post(CUSTOMER_CREATE, formData);
  }
  export async function updateCustomer(formData,id) {
    return await axiosInstance.put(`${CUSTOMER_UPDATE}/${id}`, formData);
  }
  export async function deleteCustomer(id) {
    return await axiosInstance.delete(`${CUSTOMER_DELETE}/${id}`);
    
}
export async function searchKhachHang(page, size, keyword,gioiTinh,trangThai) {
  return await axiosInstance.get(`${CUSTOMER_SEARCH}?keyword=${keyword}&gioiTinh=${gioiTinh}&trangThai=${trangThai}&page=${page}`);
}

export async function pagesKhachHang(page = 0, size = 5) {
  return await axiosInstance.get(`${CUSTOMER_PAGE}?page=${page}&itemsPerPage=${size}`);
}

export async function searchKhachHangBySdt(sdt) {
  return await axiosInstance.get(`${CUSTOMER_SEARCH_BY_SDT}?sdt=${sdt}`);
}