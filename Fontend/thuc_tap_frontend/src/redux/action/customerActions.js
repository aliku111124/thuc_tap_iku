// Redux setup
import { GET_CUSTOMER, ADD_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER, SEARCH_CUSTOMER, SEARCH_CUSTOMER_BY_SDT } from '../constants/customerConstants';
import { getAllKhachHang, addNewCustomer, updateCustomer, deleteCustomer, searchKhachHang, pagesKhachHang, searchKhachHangBySdt } from '../../services/khachHang/KhachHangService';

export const getCustomers = (currentPage = 0, pageSize = 5) => async (dispatch) => {
    try {
      const res = await pagesKhachHang(currentPage, pageSize);
      const responseData = res.data;
      console.log("thương tệ",responseData)
      console.log("thương tệ",responseData.data)
      console.log("thương tệ",responseData)
      if (responseData && responseData.data) {
        dispatch({
          type: GET_CUSTOMER,
          payload: {
            items: responseData.data.items,
            totalPages: responseData.data.totalPage,
            totalElements: responseData.data.totalElements,
          },
        });
      }
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };
  
  
  export const searchCustomers = (searchTerm, currentPage = 0, pageSize = 5) => async (dispatch) => {
    try {
      
      const res = await searchKhachHang(searchTerm);
      const items = res.data || [];
      
      const totalElements = items.length;
      const totalPages = Math.ceil(totalElements / pageSize);
  
      // Get items for the current page
      const paginatedItems = items.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
  
      dispatch({
        type: SEARCH_CUSTOMER,
        payload: {
          items: paginatedItems,
          totalPages,
          totalElements,
        },
      });
    } catch (error) {
      console.error('Error searching customers:', error);
    }
  };
  
  export const addCustomerAction = (formData) => async (dispatch) => {
    try {
      const res = await addNewCustomer(formData);
      console.log(res)
      dispatch({
        type: ADD_CUSTOMER,
        payload: res.data,
      });
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };
  
  export const updateCustomerAction = (id, formData) => async (dispatch) => {
    try {
      const res = await updateCustomer(id, formData);
      dispatch({
        type: UPDATE_CUSTOMER,
        payload: { id, data: res.data },
      });
    } catch (error) {
      console.error("Error updating customer:", error);
    }
  };
  
  export const deleteCustomerAction = (id) => async (dispatch) => {
    try {
      await deleteCustomer(id);
      dispatch({
        type: DELETE_CUSTOMER,
        payload: id,
      });
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  export const searchCustomerBySDT = (sdt) => async (dispatch) => {
    try{
      const res = await searchKhachHangBySdt(sdt);
      console.log(res.data)
      dispatch({
        type: SEARCH_CUSTOMER_BY_SDT,
        payload: res.data
      })
    } catch (error) {
      console.log("error", error)
    }
  }
