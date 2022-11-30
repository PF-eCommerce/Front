import React from "react";
import { Stack } from "@mui/system";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import PurchasedCard from "./PurchasedCard";

const LastPurchases = () => {
  const purchases = useSelector((state) => state.orders.purchased);

  const lastPurchases = purchases?.slice(0, 3);

  if (purchases?.length >= 1) {
    return (
      <Stack direction='row' spacing={1}>
        {purchases?.length >= 4
          ? lastPurchases?.map((prod) => (
              <PurchasedCard
                key={prod?.product + prod?._id}
                name={prod?.name}
                price={prod?.price}
                image={prod?.image}
                _id={prod?._id}
                product={prod?.product}
              />
            ))
          : purchases?.map((prod) => (
              <PurchasedCard
                key={prod?.product + prod?._id}
                name={prod?.name}
                price={prod?.price}
                image={prod?.image}
                _id={prod?._id}
                product={prod?.product}
              />
            ))}
      </Stack>
    );
  } else {
    return (
      <>
        <Typography>Aún no has comprado nada</Typography>
      </>
    );
  }
};

export default LastPurchases;
