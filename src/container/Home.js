import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../component/Header";
import Cart from "./Cart";
import Dashboard from "./Dashboard";
import Product from "./Product";
import Checkout from "./Checkout";
import Success from "./Success";

const Home = () => {
  const [filter, setFilter] = useState("");
  console.log(filter);
  return (
    <div>
      <Header setFilter={setFilter} />
      <Routes>
        <Route path="/" element={<Dashboard filter={filter} />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/checkout" >
          <Route path='' element={<Checkout/>}/>
          <Route path=':id' element={<Checkout/>}/>
        </Route> */}
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
};

export default Home;
