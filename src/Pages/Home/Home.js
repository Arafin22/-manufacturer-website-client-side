import React from "react";
import Products from "../Dashboard/Products";
import Banner from "./Banner";
import CustomerCounter from "./CustomerCounter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <CustomerCounter></CustomerCounter>
    </div>
  );
};

export default Home;
