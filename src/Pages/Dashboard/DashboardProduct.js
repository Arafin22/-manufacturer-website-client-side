import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";

const DeshboardProduct = ({ product }) => {
  //     const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     fetch("http://localhost:5000/product")
  //       .then((res) => res.json())
  //       .then((data) => setProducts(data));
  //   }, []);
  return (
    <tr>
      <th></th>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.quantity}</td>
      <td>
        <div class="avatar">
          <div class="w-8 rounded">
            <img src={product.image} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>
        <Link to={`/dashboard/order/${product._id}`}>
          <button className="btn btn-link">Buy Now</button>
        </Link>
      </td>
    </tr>
  );
};

export default DeshboardProduct;
