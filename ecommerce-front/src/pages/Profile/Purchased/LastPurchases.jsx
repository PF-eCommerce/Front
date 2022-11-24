import React from "react";
import { Stack } from "@mui/system";
import RecipeReviewCard from "../../../components/Cards/Card/Card";

const LastPurchases = () => {
  const purchases = React.useSelector((state) => state.orders.purchased);

  const lastPurchases = purchases?.slice(0, 3);
  return (
    <Stack direction='row' spacing={1}>
      <RecipeReviewCard
        key={purchases.length > 3 ? lastPurchases._id : purchases._id}
        title={purchases.length > 3 ? lastPurchases.title : purchases.title}
        price={purchases.length > 3 ? lastPurchases.price : purchases.price}
        img={purchases.length > 3 ? lastPurchases.img : purchases.img}
        numStock={
          purchases.length > 3 ? lastPurchases.numStock : purchases.numStock
        }
      />
    </Stack>
  );
};

export default LastPurchases;
