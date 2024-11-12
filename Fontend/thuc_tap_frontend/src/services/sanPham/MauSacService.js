import axios from '../../constants/axiosInstance';
const postCreateNewColor = (ma,ten,trangThai)=>{
    let data ={
        ma:ma,
        ten:ten,
        trangThai:trangThai
       }

       return axios.post('/admin/color/create',data)
      
}
const getAllColor=()=>{
    return axios.get('/admin/color/all')
}

const searchColor =(query)=>{
    return axios.get(`${'/admin/color/search'}?ten=${query}`)
}
const setDeletedColor=(id)=>{
    return axios.put(`${'/admin/color/update'}/${id}`)
}
const pageColor=(page=0,size=5)=>{
    return axios.get(`${'admin/color/page'}?page=${page}&itemsPerpage=${size}`)
}
export {pageColor,postCreateNewColor,getAllColor,searchColor,setDeletedColor}