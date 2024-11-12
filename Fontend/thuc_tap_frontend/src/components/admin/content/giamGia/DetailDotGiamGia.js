import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
const DetailDotGiamGia = () => {
  const { onTitleChange } = useOutletContext();
  useEffect(() => {
    const title = "Chi tiết đợt giảm giá";
    onTitleChange(title);
  }, [onTitleChange]);
  return <div>hehehe</div>;
};
export default DetailDotGiamGia;
