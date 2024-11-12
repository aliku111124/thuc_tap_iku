import axios from '../../constants/axiosInstance';
const postCreatNewSize = (ma,ten,trangThai)=>{
    let data ={
        ma:ma,
        ten:ten,
        trangThai:trangThai
       }

       return axios.post('/admin/size/create',data)
      
}
const getAllSize=()=>{
    return axios.get('/admin/size/all')
}

const searchSize =(query)=>{
    return axios.get(`${'/admin/size/search'}?ten=${query}`)
}
const setDeletedSize=(id)=>{
    return axios.put(`${'/admin/size/update'}/${id}`)
}
const pageSize=(page=0,size=5)=>{
    return axios.get(`${'admin/size/page'}?page=${page}&itemsPerpage=${size}`)
}
export {pageSize,postCreatNewSize,getAllSize,searchSize,setDeletedSize}