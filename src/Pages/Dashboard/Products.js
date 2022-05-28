import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import "./Product.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://safe-inlet-43341.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2 className="m-4 mx-auto text-center text-primary">Products</h2>
      <div className="product-body">
        {/* <div className="row m-3"> */}
        {products.slice(0, 6).map((pd) => (
          <spam key={pd._id}>
            <SingleProduct pd={pd}></SingleProduct>
          </spam>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Products;
