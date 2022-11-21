import React from "react";
import RecipeReviewCard from "../../../components/Cards/Card/Card";
import { obj as purchases } from "../../../utils/data/productDetail";
import { Stack } from "@mui/system";
import RecipeReviewCard from "../../../components/Cards/Card/Card";

const LastPurchases = () => {
  /*
    const purchases = useSelector(state => state.orders)
    */
  // const lastPurchases = purchases?.slice(0, 3)
  return (
    <Stack direction='row' spacing={1}>
    
        <RecipeReviewCard
          key={obj._id}
          title={obj.title}
          price={obj.price}
          img={obj.img}
          numStock={obj.numStock}
        />
    
    </Stack>
  );
};

export default LastPurchases;
