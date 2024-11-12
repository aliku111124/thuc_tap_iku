import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"; // Nếu bạn sử dụng Redux

const ProductDetail = () => {
  const { id } = useParams();

  // Giả sử bạn có một danh sách sản phẩm trong Redux store
  // const product = useSelector((state) => state.products.find((p) => p.id === id));

  // Dữ liệu mẫu để demo (có thể thay bằng dữ liệu từ Redux hoặc API)
  const products = [
    {
      id: "550e8400-e29b-41d4-a716-446655440000",
      name: "Balenciaga Grey 2023",
      brand: "Balenciaga",
      price: 104500,
      image: "https://example.com/image1.jpg",
      colors: ["Black", "White", "Purple"],
      sizes: [40, 41, 42, 43],
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440001",
      name: "Nike Air Max 2023",
      brand: "Nike",
      price: 95000,
      image: "https://example.com/image2.jpg",
      colors: ["Red", "Blue", "Green"],
      sizes: [38, 39, 40, 41],
    },
  ];

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p>Không tìm thấy sản phẩm</p>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Thương hiệu: {product.brand}</p>
      <p>Giá: {product.price} đ</p>
      <img src={product.image} alt={product.name} style={{ width: "300px" }} />
      {/* Thêm các chi tiết khác của sản phẩm */}
    </div>
  );
};

export default ProductDetail;
