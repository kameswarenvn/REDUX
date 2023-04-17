import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "300px",
        margin: "10px",
        justifyContent: "center",
        border: "1px solid #abaaa9",
        cursor: "pointer",
        borderRadius: "8px",
      }}
      onClick={() => navigate(`/product/${props.id}`)}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ borderRadius: "8px" }}
          src={props.thumbnail}
          height={"200px"}
          width={"250px"}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "auto",
          gap: "5px",
          marginBottom: "10px",
        }}
      >
        <h3>{props.title}</h3>
        <h6>${props.price}</h6>
        <h6>rating: {props.rating}</h6>
        {props.stock > 0 ? (
          <Button type="primary">Available</Button>
        ) : (
          <Button type="primary" danger>
            Out of Stock
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
