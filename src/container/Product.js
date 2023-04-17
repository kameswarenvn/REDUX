import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { ProductList } from "../data/ProductList";
import { Button } from "antd";
import { addItem } from "../redux/reducer/cart";
import { useEffect } from "react";

const Product = () => {
  const params = useParams();
  const navigate = useNavigate();
  // const reduxValue = useSelector((state) => state.cart?.list);
  const list = useSelector((state) => state.cart?.list);
  const dispatch = useDispatch();
  const itemList = ProductList.find(
    (element) => element.id === parseInt(params.id)
  );

  const element = list.find((item) => item.id === itemList.id);
  const addToCart = () => {
    dispatch(addItem(itemList));
  };
  console.log(addToCart, "addToCarttttttt");
  // useEffect(() => {
  //   console.log(reduxValue, "reduxValue");
  // }, [reduxValue]);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ borderRadius: "8px" }}
          src={itemList.thumbnail}
          height={"300px"}
          width={"300px"}
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
        <h5>{itemList.title}</h5>
        <h6>{itemList.category}</h6>
        <h6>price: ${itemList.price}</h6>
        <h6>rating: {itemList.rating}</h6>
        {itemList.stock > 0 ? (
          <>
            <Button type="primary">Buy Now</Button>
            {element?.count > 0 ? (
              <Button
                style={{ backgroundColor: "green" }}
                onClick={() => navigate("/cart")}
                // onClick={() => navigate("/checkout")}
                type="primary"
              >
                Go to Cart
              </Button>
            ) : (
              <Button onClick={addToCart} type="primary">
                Add to Cart
              </Button>
            )}
          </>
        ) : (
          <Button type="primary" danger>
            Out of Stock
          </Button>
        )}
      </div>
    </div>
  );
};

export default Product;

// const mapStateToProps = (state) => {
//   return {
//     cartValue: state.cart,
//   };
// };

// export default connect(mapStateToProps)(Product);
