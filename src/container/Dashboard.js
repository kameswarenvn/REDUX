import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { ProductList } from "../data/ProductList";

const Dashboard = ({ filter }) => {
  const [filteredVal, setFilteredVal] = useState([]);
  useEffect(() => {
    if (filter !== "") {
      console.log("filtred val", filter);
      let arr = ProductList.filter((item) => {
        console.log(
          "filter",
          item.title.toLowerCase() === filter.toLowerCase()
        );
        return item.title
          .toLowerCase()
          .replace(" ", "")
          .startsWith(filter.toLowerCase().replace(" ", ""));
      });
      setFilteredVal(arr);
      console.log("arr", arr);
    }
  }, [filter]);
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {filter === ""
        ? ProductList.length > 0 &&
          ProductList.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))
        : filteredVal.length > 0 &&
          filteredVal.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
    </div>
  );
};

export default Dashboard;
