import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Await } from 'react-router-dom';
import { postcreateNewCompany } from '../../../../../services/sanPham/HangService';
import { toast } from 'react-toastify';

const CompanyModal = (props) => {
  const { show, setShow ,fetchListCompany} = props;


  const handleClose = () => {
    setShow(false);
    setMa("");
    setTen("");
    setTrangThai("hoạt động")
  }

  const [ma, setMa] = useState("");
  const [ten, setTen] = useState("");
  const [trangThai, setTrangThai] = useState("hoạt động");

  const handSubmitCreateCompany = async () => {
    let res = await postcreateNewCompany(ma,ten,trangThai)
    if (res.data) {
      toast.success('Thêm thành công')
      handleClose();
      await fetchListCompany()
  }
  }
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow} >
        Launch demo modal
      </Button> */}

      <Modal show={show}
        onHide={handleClose} size="xl"
        backdrop="static" //bấm nút đóng mới dc đóng modal
        className='modal-add-company'
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new Thuong hieu </Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <form >

            <div className="col-md-8">
              <label className="form-label">Ma thuong hieu</label>
              <input type="text" className="form-control" value={ma}
                onChange={(event) => setMa(event.target.value)}
              />
            </div>
            <div className="col-md-8">
              <label className="form-label">Ten thuong hieu</label>
              <input type="text" className="form-control" value={ten}
                onChange={(event) => setTen(event.target.value)}
              />
            </div>
            <div className="col-md-8">
              <label className="form-label">Trang thai</label>
              <select className="form-select"
                onChange={(event) => setTrangThai(event.target.value)}
                value={trangThai}
              >
                <option value="hoạt động">Hoat dong </option>
                <option value="ngừng hoạt động">ngung  Hoat dong </option>
              </select>
            </div>


          </form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handSubmitCreateCompany()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CompanyModal
