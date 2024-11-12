import { USER_CREATE, USER_GET_ALL, USER_GET_BY_ID, USER_PAGE, USER_SEARCH, USER_UPDATE } from "../../constants/Api";
import { USER_DELETE } from "../../constants/Api";
import axiosInstance from "../../constants/axiosInstance";
// export async function createSale(sale) {
//   return await axios.post(SALE_CREAT, sale);
// }

export async function getAllUserNv() {
  return await axiosInstance.get(USER_GET_ALL);
}

export async function addNewUserNv(formData) {
  return await axiosInstance.post(USER_CREATE, formData);
}


export async function deleteUserNv(id) {
    return await axiosInstance.get(`${USER_DELETE}/${id}`);
}
export async function updateNhanVien(formData,id) {
  return await axiosInstance.put(`${USER_UPDATE}/${id}`, formData);
}

export async function searchNhanVien(page,size,keyword,gioiTinh,trangThai) {
  return await axiosInstance.get(`${USER_SEARCH}?keyword=${keyword}&gioiTinh=${gioiTinh}&trangThai=${trangThai}&page=${page}`);
}

export async function pagesNhanVien(page = 0, size = 5) {
  return await axiosInstance.get(`${USER_PAGE}?page=${page}&itemsPerPage=${size}`);
}

export async function getByIDStaff(id) {
  return await axiosInstance.get(`${USER_GET_BY_ID}/${id}`);
}