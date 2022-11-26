import { useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";
import Card from "./Card/Card";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/actions/productsAction";
import { getAllReviews } from "../../redux/actions/reviewActions";
import { Box } from "@mui/system";
import { getAllUsers } from "../../redux/actions/userAction";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
const Cards = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state?.product.products);
  const productsAll = useSelector((state) => state?.product.allProducts);
  
  useEffect(() => {
    products.length === 0 && dispatch(getAllProducts());
    // dispatch(getAllProducts());
    dispatch(getAllReviews());
    dispatch(getAllUsers());
  }, []);

  return (
    <Box flex={8} p={1}>
      {products.docs?.length > 0 ? (
        <Grid container spacing={2}>
          {products.docs?.map((produc) => (
            <Grid xs={12} md={6} lg={4} p={2}>
              {/* <Link to={`/detail/${produc._id}`}> */}
              <Card
                title={produc.title}
                desc={produc.desc}
                price={produc.price}
                img={produc.img}
                numStock={produc.numStock}
                id={produc._id}
                product={produc}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={2}>
          {[1,2,3,4,5,6,7,9,10].map(() => (
            <Grid xs={12} md={6} lg={4} p={2}>
          
              <CardSkeleton/>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>

    // <Container>
    //   <Grid container spacing={2}>
    //     {products.docs?.map((produc) => (
    //       <Grid xs={12} md={6} lg={4} p={4}>
    //         <Card
    //           title={produc.title}
    //           desc={produc.desc}
    //           price={produc.price}
    //           img={produc.img}
    //           numStock={produc.numStock}
    //         />
    //       </Grid>
    //     ))}
    //   </Grid>
    // </Container>
  );
};

export default Cards;
