import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { postCreatNewProduct, updateProduct } from '../../../../../services/sanPham/SanPhamService';
import ComboBox from '../combobox/combox';
import axiosInstance from '../../../../../constants/axiosInstance';
import FormProduct from '../form/FormProduct';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../../../../redux/action/productActions';
const ProductModal = (props) => {

    const dispatch = useDispatch();
    const { show,
        handleClose,onUpdate,
        product ,fetchListProduct} = props
    const handleSaveProduct = async (formData) => {
        let res = await postCreatNewProduct(formData)
        if (res.data) {
            toast.success(' Thêm thành công ')
            handleClose();
        }
        // dispatch(getProducts());
    }

    const handleUpdateProduct = async (id,formData) => {
        let res = await updateProduct(id,formData)
        if (res.data) {
            toast.success(' Sửa thành công ')
            handleClose();
        }
        dispatch(getProducts());
    }
    
    return (
        <>
            <Modal

                show={show}
                onHide={handleClose}
                size='xl'
                backdrop='static'
            >
                <Modal.Header closeButton>
                    {/* <Modal.Title>Them san pham</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>


                    <FormProduct 
                    handleUpdateProduct={handleUpdateProduct}
                     product={product} handleSaveProduct={handleSaveProduct}
                      handleClose={handleClose}
                      
                    //    fetchListProduct={fetchListProduct}
                        />


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal >
        </>

    );
}

export default ProductModal;