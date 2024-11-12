import axios from "../../constants/axiosInstance"

const postCreatNewProduct = (data) => {
    return axios.post('/admin/product/create', data)
}
const getAllProduct = () => {
    return axios.get('/admin/product/all')
}

const setDeletedProduct=(id)=>{
    return axios.put(`${'/admin/product/delete'}/${id}`)
}

const updateProduct=(id, formData)=>{
    return axios.put(`${'/admin/product/update'}/${id}`,formData)
}



const searchProduct =(query)=>{
    return axios.get(`${'/admin/product/search'}?ten=${query}`)
}

const PageProduct=(page=0,size=5)=>{
    return axios.get(`${'admin/product/page'}?page=${page}&itemsPerpage=${size}`)
}
export {PageProduct, getAllProduct, postCreatNewProduct, updateProduct, setDeletedProduct,searchProduct }