import axiosInstance from "../../constants/axiosInstance"


const postcreateNewCompany=(ma,ten,trangThai)=>{
    
    let data = {
        ma: ma,
        ten: ten,
        trangThai: trangThai
      }
  
      return axiosInstance.post('/admin/company/create',data)

}

const getAllCompany=()=>{
    return axiosInstance.get('/admin/company/all')
}

const searchCompany =(query)=>{
    return axiosInstance.get(`${'/admin/company/search'}?ten=${query}`)
}
const setDeletedCompany=(id)=>{
    return axiosInstance.put(`${'/admin/company/update'}/${id}`)
}
const pageCompany=(page=0,size=5)=>{
    return axiosInstance.get(`${'admin/company/page'}?page=${page}&itemsPerpage=${size}`)
}
export {pageCompany,postcreateNewCompany,getAllCompany,searchCompany,setDeletedCompany}