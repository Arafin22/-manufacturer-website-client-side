import React from "react";
import { Link } from "react-router-dom";
// import "./singleProduct.css";

const SingleProduct = (props) => {
  // console.log(props);
  const { _id, name, image, price, description, supplier, email } = props.pd;

  const hendelDelevery = () => {
    const quantity = parseInt(quantity);
    console.log(quantity);
  };
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title"> {name}</h2>
          <h2 class="card-title"> Price : {price}</h2>
          <p>description: {description}</p>
          <div class="card-actions justify-end">
            <Link to={`/dashboard/order/${_id}`}>
              <button onClick={hendelDelevery} className="btn btn-link">
                Buy Now
              </button>
            </Link>
            {/* <button class="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>
    </div>

    // <div className="">
    //   <div className="product-container">
    //     <h5 className="mt-1">Name: {name}</h5>
    //     <hr />
    //     {/* <h6 className="">description: {description}</h6> */}
    //     {/* <h5 className="">supplier: {supplier}</h5> */}

    //     <img className="home-product-img" src={image} />

    //     <h6 className="text-success mt-2">Price : {price}</h6>

    //     <Link to={`/dashboard/order/${_id}`}>
    //       <button onClick={hendelDelevery} className="btn btn-link">
    //         Delevery Now
    //       </button>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default SingleProduct;
