import axios from '../../constants/axiosInstance';
const postCreatNewSole = (ma,ten,trangThai)=>{
    let data ={
        ma:ma,
        ten:ten,
        trangThai:trangThai
       }

       return axios.post('/admin/sole/create',data)
      
}
const getAllSole=()=>{
    return axios.get('/admin/sole/all')
}

const searchSole =(query)=>{
    return axios.get(`${'/admin/sole/search'}?ten=${query}`)
}
const setDeletedSole=(id)=>{
    return axios.put(`${'/admin/sole/update'}/${id}`)
}

const pageSole=(page=0,size=5)=>{
    return axios.get(`${'admin/sole/page'}?page=${page}&itemsPerpage=${size}`)
}
export {postCreatNewSole,getAllSole,searchSole,setDeletedSole,pageSole}