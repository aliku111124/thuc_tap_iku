

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { postCreatNewSole } from '../../../../../services/sanPham/DeGiayService';
const SoleModal = (props) => {
    const { show, setShow,fetchListSole } = props;


    const handleClose = () => {
        setShow(false);
        setMa("");
        setTen("");
        setTrangThai("hoat dong")
    }


    const [ma, setMa] = useState("");
    const [ten, setTen] = useState("");
    const [trangThai, setTrangThai] = useState("hoat dong");

    const handSubmitCreateSole = async () => {

        let res = await postCreatNewSole(ma, ten, trangThai)

        // thêm xong hiện thông báo và đóng modal 
        if (res.data) {
            toast.success('Thêm thành công')
            handleClose();
            await fetchListSole()
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
                    <Modal.Title>Add de giay</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form className="row g-3">

                        <div className="col-12">
                            <label className="form-label">Ma</label>
                            <input type="text" className="form-control" value={ma}
                                onChange={(even) => setMa(even.target.value)}
                            />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Ten</label>
                            <input type="text" className="form-control" value={ten}
                                onChange={(even) => setTen(even.target.value)}
                            />
                        </div>

                        <div className="col-md-12">
                            <label className="form-label">Trang thai </label>
                            <select className="form-select" onChange={(even) => setTrangThai(even.target.value)} value={trangThai}>
                                <option value="hoat dong">Hoat dong</option>
                                <option value="ngung hoat dong">Ngung hoat dong</option>
                            </select>
                        </div>


                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handSubmitCreateSole()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default SoleModal