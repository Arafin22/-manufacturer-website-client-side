import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutFrom";

const stripePromise = loadStripe(
  "pk_test_51L3exCIPL0CGKJi1NhN6GZcXYpf0tudoXYen6EIVmhy8DJhQSwtxx6ZSueonilac4T2KyyVRGFt8KTphC4GP6bcj00EiQi7j4s"
);

const Payment = () => {
  let { id } = useParams();

  //   const [update,setUpdate] = useState(true);
  const [productt, setProductt] = useState({});
  const [isReload, setIsreload] = useState(false);

  const url = `https://shielded-savannah-13705.herokuapp.com/order/${id}`;

  // const { data: OrderIs, isLoading } = useQuery(["ordering", id], () =>
  //   fetch(url, {
  //     method: "GET",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   }).then((res) => res.json())
  // );
  // console.log(OrderIs);

  // if (isLoading) {
  //   return <Loading></Loading>;
  // }
  // console.log(product);
  // const udproduct =product.quantity;
  useEffect(() => {
    fetch(`https://shielded-savannah-13705.herokuapp.com/order/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProductt(data));
  }, [isReload]);
  //   const { id } = useParams();
  //   const url = `https://shielded-savannah-13705.herokuapp.com/order/${id}`;

  //   const { data, isLoading } = useQuery(["orderss", id], () =>
  //     fetch(url, {
  //       method: "GET",
  //       headers: {
  //         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //     }).then((res) => res.json())
  //   );

  // if (isLoading) {
  //   return <Loading></Loading>;
  // }

  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">Hello, {productt?.product}</p>
          <h2 class="card-title">Please Pay for {productt?.quantiry}</h2>
          {/* <p>
            Your Appointment:{" "}
            <span className="text-orange-700">{data.date}</span> at {data.slot}
          </p> */}
          <p>Please pay: ${productt?.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm Order={productt} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
