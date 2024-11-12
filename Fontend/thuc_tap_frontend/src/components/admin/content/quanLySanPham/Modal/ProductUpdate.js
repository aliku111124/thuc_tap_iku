import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { postCreatNewProduct } from '../../../../../services/sanPham/SanPhamService';
import ComboBox from '../combobox/combox';
import axiosInstance from '../../../../../constants/axiosInstance';
import FormProduct from '../form/FormProduct';
import _ from 'lodash'
const ProductUpdate = (props) => {
    const { show,
        handleClose,
        product,dataUpdate } = props
    const handleSaveProduct = async (formData) => {
        let res = await postCreatNewProduct(formData)
        if (res.data) {
            toast.success('Thêm thành công')
            handleClose();
        }
    }

    useEffect(()=>{
        console.log('run ',dataUpdate)
        if(!_.isEmpty(dataUpdate)){
            //update sate
            
        }
    },[dataUpdate])
    return (
        <>
            <Modal

                show={show}
                onHide={handleClose}
                size='xl'
                backdrop='static'
            >
                <Modal.Header closeButton>
                    <Modal.Title>update san pham</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <FormProduct product={product} handleSaveProduct={handleSaveProduct} handleClose={handleClose} />


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

export default ProductUpdate;