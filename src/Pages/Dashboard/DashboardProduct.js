import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const DeshboardProduct = ({ product }) => {
  //     const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     fetch("http://localhost:5000/product")
  //       .then((res) => res.json())
  //       .then((data) => setProducts(data));
  //   }, []);
  return (
    <tr>
      <th>1</th>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.quantity}</td>
      <td>{product.email}</td>
    </tr>
  );
};

export default DeshboardProduct;
