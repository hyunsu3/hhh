import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Container, Row, Col } from "react-bootstrap";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getproductDetail = async () => {
      try {
        const url = `https://my-json-server.typicode.com/hyunsu3/hhh/products/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.error("상품 정보를 불러오는 데 실패했습니다.", error);
      }
    };

    getproductDetail();
  }, [id]);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} alt="img" />
        </Col>
        <Col>
          <span className="product-title">{product?.title}</span>
          <br />
          <span className="product-price">{product?.price}</span>
          <br />
          <span className="product-choice">{product?.choice}</span>{" "}
          <span className="product-new">{product?.new}</span>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
