import React from "react";
import { Stack } from "@mui/system";
import RecipeReviewCard from "../../../components/Cards/Card/Card";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

const LastPurchases = () => {
  const purchases = useSelector((state) => state.orders.purchased);

  const lastPurchases = purchases?.slice(0, 3);

  if (purchases.length >= 1) {
    return (
      <Stack direction='row' spacing={1}>
        <RecipeReviewCard
          key={purchases._id}
          title={purchases.length > 3 ? lastPurchases.title : purchases.title}
          price={purchases.length > 3 ? lastPurchases.price : purchases.price}
          img={purchases.length > 3 ? lastPurchases.img : purchases.img}
          numStock={
            purchases.length > 3 ? lastPurchases.numStock : purchases.numStock
          }
        />
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
