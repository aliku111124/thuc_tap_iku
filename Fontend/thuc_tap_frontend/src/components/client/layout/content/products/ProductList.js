import React from "react";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();
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
    // Thêm sản phẩm khác
  ];

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              margin: "10px",
              padding: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleProductClick(product.id)}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "150px" }}
            />
            <h3>{product.name}</h3>
            <p>Giá: {product.price} đ</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
