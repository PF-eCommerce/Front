import React from "react";
import RecipeReviewCard from "../../../components/Cards/Card/Card";
import { obj as purchases } from "../../../utils/data/productDetail";
import { Stack } from "@mui/system";

const LastPurchases = () => {
  /*
    const purchases = useSelector(state => state.orders)
    */
  const lastPurchases =
    purchases.length > 4 ? purchases.slice(0, 3) : purchases;
  return (
    <Stack direction='row' spacing={1}>
      {lastPurchases?.map((produc) => (
        <Card
          key={produc._id}
          title={produc.title}
          price={produc.price}
          img={produc.img}
          numStock={produc.numStock}
        />
      ))}
    </Stack>
  );
};

export default LastPurchases;
