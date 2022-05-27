import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useForm } from "react-hook-form";
// import { useQuery } from "react-query";
// import { toast } from "react-toastify";
import auth from "../../firebase.init";
// import Loading from "../Shared/Loading";

const AddProduct = () => {
  const [userinfo, userloading, usererror] = useAuthState(auth);

  const [isReload, setIsreload] = useState(false);

  const handelUpload = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const image = event.target.image.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const email = userinfo.email;
    console.log(name, price);

    fetch("http://localhost:5000/product", {
      method: "POST",
      body: JSON.stringify({
        name,
        price,
        quantity,
        image,
        email,
      }),
      headers: {
        authorization: `${userinfo.email} ${localStorage.getItem(
          "accessToken"
        )}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        event.target.reset();

        setIsreload(!isReload);
      });
  };

  return (
    <div>
      <h2 className="text-2xl">Add a New Product</h2>

      <div className="mb-5">
        <div className="w-50 mx-auto">
          <form onSubmit={handelUpload}>
            <div class="mb-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                class="input input-bordered w-full max-w-xs"
                required
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="price"
                placeholder="Price"
                class="input input-bordered w-full max-w-xs"
                required
              />
            </div>
            <div class="mb-1">
              <input
                name="quantity"
                placeholder="Quantity "
                type="text"
                class="form-control input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="mb-1">
              <input
                type="text"
                name="image"
                placeholder="Image url"
                class="form-control input input-bordered w-full max-w-xs"
                required
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
