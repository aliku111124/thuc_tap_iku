

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { postCreatNewSole } from '../../../../../services/sanPham/DeGiayService';
import { postCreatNewSize } from '../../../../../services/sanPham/KichThuocService';
const SizeModal = (props) => {
    const { show, setShow,fetchListSize } = props;


    const handleClose = () => {
        setShow(false);
        setMa("");
        setTen("");
        setTrangThai("hoạt động")
    }


    const [ma, setMa] = useState("");
    const [ten, setTen] = useState("");
    const [trangThai, setTrangThai] = useState("hoạt động");

    const handSubmitCreateSize = async () => {

        let res = await postCreatNewSize(ma, ten, trangThai)

        // thêm xong hiện thông báo và đóng modal 
        if (res.data) {
            toast.success('Thêm thành công')
            handleClose();
            await fetchListSize()
        }

    }
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
        De giay
      </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form className="row g-3">

                        <div className="col-12">
                            <label className="form-label">Mã</label>
                            <input type="text" className="form-control" value={ma}
                                onChange={(even) => setMa(even.target.value)}
                            />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Tên</label>
                            <input type="text" className="form-control" value={ten}
                                onChange={(even) => setTen(even.target.value)}
                            />
                        </div>

                        <div className="col-md-12">
                            <label className="form-label">Trạng thái </label>
                            <select className="form-select" onChange={(even) => setTrangThai(even.target.value)} value={trangThai}>
                                <option value="hoạt động">Hoạt động</option>
                                <option value="ngưng hoạt động">Ngưng hoạt động</option>
                            </select>
                        </div>


                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handSubmitCreateSize()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default SizeModal