import { Box, Button, Typography, Link, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Size from "./Size";
import Colors from "./Colors";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetail,
  deleteDetail,
} from "../../redux/actions/productsAction";
import Carrusel from "./Carrusel";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { addToCart } from "../../redux/actions/cartAction";
import Alert from "../../components/Cart/Alert";

const Details = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetail(id));
    return function () {
      dispatch(deleteDetail());
    };
  }, [dispatch, id]);

  const product = useSelector((state) => state.product.detail);
  const [alert, setAlert] = useState(false);
  console.log(product.img);
  console.log(product.id);
  console.log(id);

  const boxStyle = {
    display: { xs: "block", md: "flex" },
    alignItems: "center",
  };
  const textStyle = {
    marginRight: "10px",
    marginBottom: "10px",
    width: { xs: "90%", md: "200px" },
    backgroundColor: "#A28064",
    padding: "10px",
    textAlign: "center",
    borderRadius: "18px",
    color: "white",
    fontSize: 20,
  };

  const handleProduct = () => {
    dispatch(addToCart(product));
    setAlert(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ margin: "30px", width: "100%" }}
      >
        {product.title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {product._id === id ? (
          <Carrusel images={product.img ? product.img : []} autoplay={true} />
        ) : null}
        <Typography
          sx={{
            padding: "10px",
            width: { xs: "100%", sm: "50%", md: "25%" },
            textAlign: "center",
          }}
        >
          {product.desc}
        </Typography>
        <Box sx={{ width: { xs: "90%", sm: "auto", md: 450 } }}>
          <Box sx={boxStyle}>
            <Typography sx={textStyle}>Talles disponibles</Typography>
            <Size arrSize={product.size} />
          </Box>
          <Box sx={boxStyle}>
            <Typography sx={textStyle}>Colores disponibles</Typography>
            <Colors arrColors={product.color} />
          </Box>

          <Box sx={boxStyle}>
            <Typography sx={textStyle}>Precio</Typography>
            <Typography
              sx={{
                fontSize: 20,
                textAlign: "center",
              }}
            >
              ${product.price}
            </Typography>
          </Box>

          <Typography
            sx={{
              padding: "10px",
              textAlign: { xs: "center", md: "start" },
            }}
          >
            Hasta 3 cuotas sin interés de ${Math.round(product.price / 3)}
          </Typography>

          <Typography
            sx={{
              padding: "10px",
              paddingBottom: "5px",
              textAlign: { xs: "center", md: "start" },
            }}
          >
            {product.numStock} unidades disponibles
          </Typography>
          <Box
            sx={{
              marginTop: "10px",
              marginBottom: "20px",
              display: "flex",
            }}
          >
            {/* <Link href="/cart"> */}
            <IconButton onClick={handleProduct}>
              <AddShoppingCartOutlinedIcon
                sx={{ marginRight: "1rem" }}
                color="secondary"
                fontSize="large"
              />
            </IconButton>

            {/* </Link> */}
            <Button
              sx={{
                backgroundColor: "#7B5B3E",
                color: "white",
                fontSize: 15,
                "&:hover": {
                  backgroundColor: "#927960",
                },
              }}
            >
              Volver
            </Button>
          </Box>
        </Box>
      </Box>
      {alert ? <Alert /> : null}
    </Box>
  );
};

export default Details;
