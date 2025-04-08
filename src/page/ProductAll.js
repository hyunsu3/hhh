import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query] = useSearchParams();

  const getProducts = async () => {
    const searchQuery = query.get("q")?.trim() || "";
    console.log("쿼리값은?", searchQuery);
    let url = `https://my-json-server.typicode.com/hyunsu3/hhh/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    // 쿼리 파라미터 가져오기

    // 한글 포함 검색: title 필드 기준
    const filtered = searchQuery
      ? data.filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : data;

    setProductList(filtered);
  };

  useEffect(() => {
    getProducts();
  }, [query.toString()]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3} key={menu.id}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
