import { getByIDStaff } from "../../services/nhanVien/NhanVienService";
import { GET_STAFF_BY_ID } from "../constants/staffContants";


export const getStaffByIdAction = 
(params = "") => async(dispatch)  =>{
    try{
      console.log("action get staff")
      const response = await getByIDStaff(params);
      console.log(response)
      dispatch(({
        type:GET_STAFF_BY_ID,
        payload : {response},
      }))  
    }catch(error){
        console.error("Error" ,error);
    }
}