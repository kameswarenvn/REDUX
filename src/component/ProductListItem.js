import React from "react";
import { Button } from "antd";

const ProductListItem = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <img
          style={{ borderRadius: "8px" }}
          src={props.thumbnail}
          height={"100px"}
          width={"150px"}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          marginBottom: "10px",
          marginLeft: "20px",
        }}
      >
        <div style={{ width: "100px" }}>
          <h3>{props.title}</h3>
        </div>
        <div style={{ width: "100px" }}>
          <h5>${props.price}</h5>
        </div>
        <div style={{ width: "100px" }}>
          <h5>rating: {props.rating}</h5>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <Button
            type="primary"
            style={{ background: "red" }}
            onClick={props.incrementItem}
          >
            +
          </Button>
          <span>Quantity {props.count}</span>
          <Button
            type="primary"
            style={{ background: "red" }}
            onClick={props.decrementItem}
          >
            -
          </Button>
          <Button
            type="primary"
            style={{ background: "red" }}
            onClick={props.removeItem}
          >
            Remove
          </Button>
        </div>
        {/* {props.stock > 0 ? (
          <Button type="primary">Available</Button>
        ) : (
          <Button type="primary" danger>
            Out of Stock
          </Button>
        )} */}
      </div>
    </div>
  );
};

export default ProductListItem;
