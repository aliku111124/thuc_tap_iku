import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import dayjs from "dayjs";
import FormDotGiamGia from "./FormDotGiamGia";
import { useNavigate } from "react-router-dom";
import { updateSale } from "../../../../services/dotGiamGia/DotGiamGiaService";
import { toastError, toastSuccess } from "../../../../configs/ToastConfig";

function ModalDotGiamGia({
  show,
  handleClose,
  dotGiamGia,
  fetchListDotGiamGia,
  paramsPaginate,
  currentPage,
}) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    ma: "",
    ten: "",
    giaTri: "",
    ngayBatDau: "",
    ngayKetThuc: "",
    loai: "",
    trangThai: "",
    hinhThuc: "",
    dieuKien: "",
  });

  useEffect(() => {
    if (dotGiamGia) {
      setFormData({
        ma: dotGiamGia.ma,
        ten: dotGiamGia.ten,
        giaTri: dotGiamGia.giaTri,
        ngayBatDau: dayjs(dotGiamGia.ngayBatDau).format("YYYY-MM-DDTHH:mm:ss"),
        ngayKetThuc: dayjs(dotGiamGia.ngayKetThuc).format(
          "YYYY-MM-DDTHH:mm:ss"
        ),
        loai: dotGiamGia.loai ? "Tiền mặt" : "Phần trăm",
        trangThai: dotGiamGia.trangThai,
        hinhThuc: dotGiamGia.hinhThuc,
        dieuKien: dotGiamGia.dieuKien,
      });
    }
  }, [dotGiamGia]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitDotGiamGia = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        ...formData,
        giaTri: formData.giaTri.toString(),
        loai: formData.loai === "Tiền mặt",
        ngayBatDau: dayjs(formData.ngayBatDau).toISOString(),
        ngayKetThuc: dayjs(formData.ngayKetThuc).toISOString(),
      };
      const response = await updateSale(dotGiamGia.id, updatedData);
      console.log(response.data);
      fetchListDotGiamGia({
        ...paramsPaginate,
        page: currentPage,
      }); // Gọi hàm cập nhật danh sách
      handleClose();
      navigate("/admin/dot-giam-gia");
      toastSuccess("Cập nhật đợt giảm giá thành công");
    } catch (error) {
      console.error("Error submitting form:", error);
      toastError("Cập nhật đợt giảm giá thất bại");
    }
  };

  return (
    <Modal size="xl" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Chỉnh sửa đợt giảm giá</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormDotGiamGia
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmitDotGiamGia={handleSubmitDotGiamGia}
          onUpdate={"update"}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {/* <Button variant="primary" onClick={handleSubmitDotGiamGia}>
          Save Changes
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDotGiamGia;
