import {
  SALE_CREATE,
  SALE_GET_ALL,
  SALE_SEARCH_VALUE,
  SALE_SET_DELETED,
  SALE_UPDATE,
} from "../../constants/Api";
import axiosInstance from "../../constants/axiosInstance";

export async function getAllSale(paramsApi) {
  return await axiosInstance.get(SALE_GET_ALL, { params: paramsApi });
}
// export async function getAllSale() {
//   return await axiosInstance.get(SALE_GET_ALL);
// }
export async function addNewSale(formData) {
  return await axiosInstance.post(SALE_CREATE, formData);
}

export async function setDeletedSale(id) {
  return await axiosInstance.get(`${SALE_SET_DELETED}/${id}`);
}

export async function updateSale(id, formData) {
  return await axiosInstance.put(`${SALE_UPDATE}/${id}`, formData);
}

export async function getAllFindById(id) {
  return await axiosInstance.get(`${'/admin/sale'}/${id}`)
}
export async function searchSale(formSearch) {
  const params = {
    page: formSearch.page,
    size: formSearch.size,
    sortBy: formSearch.sortBy,
    sortDir: formSearch.sortDir,
    value: formSearch.value,
    minNgay: formSearch.minNgay,
    maxNgay: formSearch.maxNgay,
    trangThai: formSearch.trangThai,
    minGia: formSearch.minGia,
    maxGia: formSearch.maxGia,
  };

  return await axiosInstance.get(SALE_SEARCH_VALUE, { params });
}
