import axios from '../../constants/axiosInstance';
const postCreatNewMaterial = (ma,ten,trangThai)=>{
    let data ={
        ma:ma,
        ten:ten,
        trangThai:trangThai
       }

       return axios.post('/admin/material/create',data)
      
}
const getAllMaterial=()=>{
    return axios.get('/admin/material/all')
}

const setDeletedMaterial=(id)=>{
    return axios.put(`${'/admin/material/update'}/${id}`)
}
const searchMaterial =(query)=>{
    return axios.get(`${'/admin/material/search'}?ten=${query}`)
}

const pageMaterial=(page=0,size=5)=>{
    return axios.get(`${'admin/material/page'}?page=${page}&itemsPerpage=${size}`)
}
export {postCreatNewMaterial,getAllMaterial,searchMaterial,setDeletedMaterial,pageMaterial}