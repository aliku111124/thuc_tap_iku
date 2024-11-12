import axios from '../../constants/axiosInstance';
const postCreateNewList = (ma,ten,trangThai)=>{
    let data ={
        ma:ma,
        ten:ten,
        trangThai:trangThai
       }

       return axios.post('/admin/list/create',data)
      
}
const getAllList=()=>{
    return axios.get('/admin/list/all')
}

const searchList =(query)=>{
    return axios.get(`${'/admin/list/search'}?ten=${query}`)
}
const setDeletedList=(id)=>{
    return axios.put(`${'/admin/list/update'}/${id}`)
}

const pageList=(page=0,size=5)=>{
    return axios.get(`${'admin/list/page'}?page=${page}&itemsPerpage=${size}`)
}
export {postCreateNewList,getAllList,searchList,setDeletedList,pageList}