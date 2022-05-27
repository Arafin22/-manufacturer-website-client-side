import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import auth from "../../firebase.init";
// import "./EditProduct.css";

const MyOrder = () => {
  const [user] = useAuthState(auth);

  let { id } = useParams();

  //   const [update,setUpdate] = useState(true);
  const [product, setProduct] = useState({});
  const [isReload, setIsreload] = useState(false);
  console.log(product);
  // const udproduct =product.quantity;
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [isReload]);

  const handelUpload = (e) => {
    e.preventDefault();
    const storeQuantity = parseInt(product?.quantity);
    const newQuantity = parseInt(e.target.quantity.value);

    const quantity = storeQuantity + newQuantity;
    const totalPrice = product.price * newQuantity;
    console.log(totalPrice);
    const order = {
      productid: product._id,
      product: product.name,
      price: totalPrice,
      // date: formattedDate,
      quantity,

      user: user.email,
      username: user.displayName,
      // phone: event.target.phone.value
    };

    if (newQuantity > 9) {
      fetch(`http://localhost:5000/order/${id}`, {
        method: "PUT",

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ order }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("success", data);
          alert("users added successfully!!!");
          e.target.reset();
          setIsreload(!isReload);
        });
    } else {
      console.log("input number");
    }
  };

  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img src={product.image} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">{product.name}</h1>
            <h1 class="text-5xl font-bold">{product.quantity}</h1>

            <p class="py-6">Minimum Order 10 items</p>
            <form onSubmit={handelUpload}>
              <div className="mb-3">
                {/* <label>Quantity</label> */}
                <input
                  name="quantity"
                  type="text"
                  placeholder="Quantity"
                  class="input w-full max-w-xs"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                pay now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
