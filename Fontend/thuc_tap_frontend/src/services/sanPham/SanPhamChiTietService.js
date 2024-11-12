import axios from "../../constants/axiosInstance"

const getAllProductDetail=()=>{
    return axios.get('admin/product_detail/all')
}

const postCreatNewProductDetail = (data) => {
    return axios.post('/admin/product_detail/create', data)
}


const setDeletedProductDetail=(id)=>{
    return axios.put(`${'/admin/product_detail/delete'}/${id}`)
}

const updateProductDetail=(id, formData)=>{
    return axios.put(`${'/admin/product_detail/update'}/${id}`,formData)
}
const pageProductDetail=(page=0,size=5)=>{
    return axios.get(`${'admin/product_detail/page'}?page=${page}&itemsPerpage=${size}`)
}
const getAllFindById = (idSp)=>{
    return axios.get(`${'admin/product_detail'}/${idSp}`)
}

const searchProductDetail = (query, trangThai, giaBanLonHon, giaBanNhoHon) => {
    let url = '/admin/product_detail/search?ten=' + encodeURIComponent(query);

    // Chỉ thêm tham số vào URL nếu giá trị khác null hoặc undefined
    if (trangThai !== null && trangThai !== undefined) {
        url += `&trangThai=${trangThai}`;
    }
    if (giaBanLonHon !== null && giaBanLonHon !== undefined) {
        url += `&giaLonHon=${giaBanLonHon}`;
    }
    if (giaBanNhoHon !== null && giaBanNhoHon !== undefined) {
        url += `&giaNhoHon=${giaBanNhoHon}`;
    }

    return axios.get(url);
};
const qrCodeProduct = (id)=>{
    return axios.get(`${'/admin/product_detail/qrcode'}/${id}`)
}


export {pageProductDetail,getAllProductDetail,postCreatNewProductDetail,setDeletedProductDetail,updateProductDetail,searchProductDetail,getAllFindById,qrCodeProduct}