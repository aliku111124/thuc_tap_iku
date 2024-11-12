
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormViewDetail from '../form/FormViewDetail';
import { updateProductDetail } from '../../../../../services/sanPham/SanPhamChiTietService';


const ViewDetailModal = (props) => {
    
    const {
        show,handleClose,productDetail,fetchListProductDetail
    } =props

  



    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal

                show={show} onHide={handleClose}
                size='xl'
                backdrop="static"
            >
                <Modal.Header closeButton>
                    {/* <Modal.Title>Them</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                   <FormViewDetail
                   productDetail={productDetail} 
                   
                  
                   />
                   
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ViewDetailModal;