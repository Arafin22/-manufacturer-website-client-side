import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2 className="m-4 mx-auto text-center text-primary">Products</h2>
      <div className="grid grid-cols-4 gap-4 auto-cols-auto md:grid-cols-2 sm:grid-cols-1">
        {/* <div className="row m-3"> */}
        {products.slice(0, 6).map((pd) => (
          <div key={pd._id}>
            <SingleProduct pd={pd}></SingleProduct>
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Products;
