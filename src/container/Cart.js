import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductListItem from "../component/ProductListItem";
import { modifyItem, removeItem } from "../redux/reducer/cart";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const list = useSelector((state) => state?.cart?.list);
  const dispatch = useDispatch();
  const incrementItem = (item) => {
    dispatch(modifyItem({ ...item, count: item.count + 1 }));
  };
  const decrementItem = (item) => {
    if (item.count === 1) {
      dispatch(removeItem(item));
    } else {
      dispatch(modifyItem({ ...item, count: item.count - 1 }));
    }
  };
  const removeItemFromCart = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div style={{backgroundColor:'#d9c1f5'}}>
      {list.length > 0 ? (
        <>
          {list.map((item) => (
            <ProductListItem
              {...item}
              key={item.id}
              incrementItem={() => incrementItem(item)}
              decrementItem={() => decrementItem(item)}
              removeItem={() => removeItemFromCart(item)}
            />
          ))}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              type="primary"
              style={{ background: "green" }}
              onClick={() => navigate("/success")}
            >
              Go to Checkout
            </Button>
          </div>
        </>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3>No item in cart</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
