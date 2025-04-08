import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetails = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="card" onClick={showDetails}>
      <img src={item?.img} alt="productimg" />
      <div className="productName">{item?.title}</div>
      <div className="productPrice">{item?.price}</div>
      <div className="productNew">{item?.new === true ? "신제품" : ""}</div>
      <div className="MDrecommend">{item?.choice === true ? "추천" : ""}</div>
    </div>
  );
};

export default ProductCard;
