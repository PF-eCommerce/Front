import React from "react";
import { redirect } from "react-router-dom";


export default function Paypal() {
  const data = () => {
    fetch("http://localhost:3001/create-order-paypal", {
      method: "post"
    }).then((response) => response.json())
    .then(response => {
      console.log(response.links[1].href)
      window.location.replace(response.links[1].href);
    })
  }
  return (
    <button onClick={data}>Pagar con paypal</button>
  );
}