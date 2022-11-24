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

const Cards = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state?.product.products);
  const productsAll = useSelector((state) => state?.product.allProducts);

  useEffect(() => {
    products.length===0&&dispatch(getAllProducts());
    // dispatch(getAllProducts());
    dispatch(getAllReviews());
    dispatch(getAllUsers());
  }, [dispatch]);

  if (productsAll.docs?.length > 0) {
    return (
      <Box flex={8} p={1}>
        <Grid container spacing={2}>
          {productsAll.docs?.map((produc) => (
            <Grid xs={12} md={6} lg={4} p={2}>
              <Card
                title={produc.title}
                desc={produc.desc}
                price={produc.price}
                img={produc.img}
                numStock={produc.numStock}
                id={produc._id}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  } else {
    <h2>Cargando productos</h2>;
  }
};

export default Cards;
