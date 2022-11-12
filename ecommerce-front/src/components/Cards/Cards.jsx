import { useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";
import Card from "./Card/Card";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/actions/productsAction";

const Cards = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const products = useSelector((state) => state.product.products);
  // const products = useSelector((state)=>state.product.products)
  // console.log(products)

  return (
    <Container>
      <Grid container spacing={2}>
        {products.docs?.map((produc) => (
          <Grid xs={12} md={6} lg={4} p={4}>
            <Card
              title={produc.title}
              desc={produc.desc}
              price={produc.price}
              img={produc.img}
              numStock={produc.numStock}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cards;
