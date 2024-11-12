// src/components/Product.js
import React, { useRef, useState, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import ProductList from "./ProductList";

const Product = ({ id, name, price, image }) => {
  // Trạng thái sản phẩm và tình trạng tải
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  // Hàm giả lập API để tải sản phẩm
  const fetchProducts = (page) => {
    setLoading(true);
    setTimeout(() => {
      // Dữ liệu giả lập (20 sản phẩm mỗi trang)
      const newProducts = Array.from({ length: 5 }, (_, index) => ({
        id: page * 20 + index + 1,
        name: `Sản phẩm ${page * 20 + index + 1}`,
        price: Math.floor(Math.random() * 500) + 100,
      }));
      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setLoading(false);
      console.log(page);
    }, 1000);
  };

  // Gọi fetchProducts khi component được mount lần đầu
  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  // Sử dụng Intersection Observer để phát hiện khi người dùng gần đến cuối danh sách
  const lastProductRef = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1); // Tăng số trang để tải thêm sản phẩm
      }
    });

    if (node) observer.current.observe(node);
  };

  return (
    <Container>
      <ProductList></ProductList>
      <h2>Sản phẩm nổi bật</h2>
      <Row>
        {products.map((product, index) => (
          <Col key={product.id} md={4}>
            <Card
              className="mb-4"
              ref={index === products.length - 1 ? lastProductRef : null}
            >
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Giá: {product.price}k</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {loading && (
        <div className="text-center">
          <Spinner animation="border" />
          <p>Đang tải...</p>
        </div>
      )}
    </Container>
  );
};

export default Product;
