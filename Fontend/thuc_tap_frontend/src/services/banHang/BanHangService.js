import { SELL_CREATE, SELL_GET_ALL, SELL_UPDATE } from "../../constants/Api"
import axiosInstance from "../../constants/axiosInstance"

const createSell =()=>{
    return axiosInstance.post(SELL_CREATE)
}

const getAllSell =()=>{
    return axiosInstance.get(SELL_GET_ALL)
}

const setDeletedSell= (id)=>{
    return axiosInstance.put(`${SELL_UPDATE}/${id}`)
}

export const createOrderDetails = async (details) => {
    try {
      const response = await axiosInstance.post("/admin/sell_detail/create", details);
      return response.data;
    } catch (error) {
      console.error("Error creating order details:", error);
      throw error;
    }
  };

  export const updateOrder = async (orderData) => {
    try {
      const response = await axiosInstance.put("/admin/sell/update/hd", orderData);
      return response.data;
    } catch (error) {
      console.error("Error updating order:", error);
      throw error;
    }
  };
export {createSell,getAllSell,setDeletedSell}


export const updateProductQuantity = async (id, quantitySold) => {
  const response = await axiosInstance.put(
    `/admin/sell/order/complete/${id}`,
    { quantitySold } 
  );
  return response.data;
};
export const updateVoucherQuantity = async (id, quantitySoldVoucher) => {
  const response = await axiosInstance.put(
    `/admin/sell/order/complete/voucher/${id}`,
    { quantitySoldVoucher } 
  );
  return response.data;
};
// export const findByIdSpctToCart = async(id)={
//   return axiosInstance.get()

// }

export const findByIdSpctToCart = (id) => {
  return axiosInstance.get(`/admin/product_detail/qrcode/cart/${id}`);
};
