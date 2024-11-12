import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import dayjs from "dayjs";
import { addNewSale } from "../../../../services/dotGiamGia/DotGiamGiaService";
import { useNavigate } from "react-router-dom";
import FormDotGiamGia from "./FormDotGiamGia";
import { toastError, toastSuccess } from "../../../../configs/ToastConfig";
const AddDotGiamGia = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ma: "",
    ten: "",
    giaTri: 0,
    ngayBatDau: dayjs().format("YYYY-MM-DDTHH:mm:ss"),
    ngayKetThuc: dayjs().add(1, "year").format("YYYY-MM-DDTHH:mm:ss"),
    loai: "Tiền mặt",
    trangThai: "Hoạt động",
    hinhThuc: "Theo hóa đơn",
    dieuKien: "-1",
  });

  const [formAdd, setFormAdd] = useState({
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    mapFormDataToFormAdd(formData);
  };
  const mapFormDataToFormAdd = (formData) => {
    if (formData.ngayBatDau && formData.ngayKetThuc) {
      setFormAdd({
        ma: formData.ma,
        ten: formData.ten,
        giaTri: formData.giaTri.toString(), // Chuyển số thành chuỗi
        ngayBatDau: dayjs(formData.ngayBatDau).toISOString(), // Chuyển sang ISO 8601
        ngayKetThuc: dayjs(formData.ngayKetThuc).toISOString(), // Chuyển sang ISO 8601
        loai: formData.loai === "Tiền mặt",
        trangThai: formData.trangThai,
        hinhThuc: formData.hinhThuc,
        dieuKien: formData.dieuKien,
      });
    }
  };

  const handleSubmitDotGiamGia = async (e) => {
    e.preventDefault();
    try {
      await addNewSale(formAdd);
      toastSuccess("Thêm mới đợt giảm giá thành công");
      navigate("/admin/dot-giam-gia");
    } catch (error) {
      console.error("Error submitting form:", error);
      toastError("Thêm mới đợt giảm giá thất bại");
    }
  };

  const { onTitleChange } = useOutletContext();
  useEffect(() => {
    const title = "Thêm mới đợt giảm giá";
    onTitleChange(title);
    mapFormDataToFormAdd(formData);
  }, [onTitleChange, formData]);
  return (
    <>
      <Container>
        <FormDotGiamGia
          handleSubmitDotGiamGia={handleSubmitDotGiamGia}
          formData={formData}
          handleInputChange={handleInputChange}
          actionP={"Add"}
        ></FormDotGiamGia>
      </Container>
    </>
  );
};
export default AddDotGiamGia;
