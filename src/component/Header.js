import React, { useState } from "react";
import "./Header.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { ProductList } from "../data/ProductList";

const Header = ({setFilter}) => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  // const titleName = ProductList.title.toLowerCase();
  // console.log(titleName);

  function handleSearchInput(event) {
    // const titleName = ProductList.title.toLowerCase();
    setSearchText(event.target.value);
    setFilter(event.target.value);
    // console.log(titleName);
  }
  console.log(setSearchText);
  return (
    <div className="container" style={{ width: "100vw" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#958bc7",
          paddingBottom: "10px",
        }}
      >
        E-comm site
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: "#958bc7",
          marginBottom: "20px",
          paddingBottom: "10px",
        }}
      >
        <Button onClick={() => navigate("/")} type="primary">
          Home
        </Button>
        <input
          style={{
            height: "30px",
            width: "300px",
            paddingLeft: "5px",
            outline: "none",
          }}
          value={searchText}
          onChange={handleSearchInput}
          type="search"
          placeholder="search..."
        />
        <Button onClick={() => navigate("/cart")} type="primary">
          Cart
        </Button>
      </div>
    </div>
  );
};

export default Header;
