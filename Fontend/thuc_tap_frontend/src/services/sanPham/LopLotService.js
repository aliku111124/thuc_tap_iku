import axios from '../../constants/axiosInstance';
const postCreatNewLining = (ma,ten,trangThai)=>{
    let data ={
        ma:ma,
        ten:ten,
        trangThai:trangThai
       }

       return axios.post('/admin/lining/create',data)
      
}
const getAllLining=()=>{
    return axios.get('/admin/lining/all')
}

const searchLining =(query)=>{
    return axios.get(`${'/admin/lining/search'}?ten=${query}`)
}
const setDeletedLining=(id)=>{
    return axios.put(`${'/admin/lining/update'}/${id}`)
}
const pageLining=(page=0,size=5)=>{
    return axios.get(`${'admin/lining/page'}?page=${page}&itemsPerpage=${size}`)
}
export {pageLining,postCreatNewLining,getAllLining,searchLining,setDeletedLining}