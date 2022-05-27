import React, { useEffect, useState } from "react";
import DeshboardProduct from "./DashboardProduct";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  return (
    <div>
      <h2 className="text-2xl">All Products: {products.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price </th>
              <th>Quantity</th>
              <th>Photo</th>
              <th>Buy</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <DeshboardProduct
                key={product._id}
                product={product}
              ></DeshboardProduct>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
