import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Size from "./Size";
import Colors from "./Colors";
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../redux/actions/productsAction";
import Carrusel from "./Carrusel";
import styles from "./Detail.module.css";
import Reviews from "../../components/Review/Review";
import Rating from "@mui/material/Rating";


const Details = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoBackBtn = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getProductDetail(id))
  }, [dispatch, id]);
  
  const product = useSelector((state) => state.product.detail);
  console.log(product.img)
  console.log(product.id)
  console.log(id)

  const boxStyle = {
    display: {xs:"block", md:"flex"},
    alignItems: "center",
  }
  const textStyle = {
    marginRight: "10px",
    marginBottom: "10px",
    width: {xs: "90%", md: "200px"},
    backgroundColor: "#A28064",
    padding: "10px",
    textAlign: "center",
    borderRadius: "18px",
    color: "white",
    fontSize: 20
  }

  const reviewPro = useSelector((state) => state.review);
  let score = 0;
  const reducer = (accumulator, curr) => accumulator + curr;
  const sumaryScore = () => {
    const sumary = [];
    if (reviewPro?.reviews?.length > 0) {
      reviewPro?.reviews?.map((element) => {

        sumary.push(element.rating);
      });
      score = sumary.reduce(reducer) / sumary.length;
    }
  };
  sumaryScore();

  const reviewsTotales = reviewPro?.reviews?.length;

  return (
    <Box 
      sx={{ 
        display: "flex", 
        flexWrap: "wrap", 
        justifyContent: "space-around"
      }}>
      <Typography 
        variant="h4" 
        align="center" 
        sx={{ margin: "30px", width: "100%" }}
      >
        {product.title}
        <div id={styles.review_block}>
          <span id={styles.review_detail}>
            Rating:{" "}
            <strong>
              {score === 0
                ? "Sin calificación aún"
                : score.toFixed(1)}
            </strong>{" "}
          </span>
          <div id={styles.review_block2}>
            <span id={styles.review_detail}>
              <Box
                sx={{
                  '& > legend': { mt: 2 },
                }}
              >
                <Rating
                  name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly
                  value={score}
                />
              </Box>
            </span>

            {reviewsTotales > 0 ? <span id={styles.review_letter}>{reviewsTotales} reviews</span> : null}
          </div>
        </div>
        
      </Typography>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
      }}>
        {product._id === id ? <Carrusel images={product.img ? product.img : []} autoplay={true}/> : null}
        
        <Typography 
          sx={{ 
            padding: "10px", 
            width: {xs: "100%", sm: "50%", md: "25%"}, 
            textAlign: "center"
          }}
        >
          {product.desc}
        </Typography>
        <Box 
          sx={{width: { xs: "90%", sm: "auto", md: 450 }}}
        >
          <Box sx={boxStyle}>
            <Typography 
              sx={textStyle}
            >
              Talles disponibles
            </Typography>
            <Size arrSize={product.size} />
          </Box>
          <Box sx={boxStyle}>
            <Typography 
              sx={textStyle}
            >
              Colores disponibles
            </Typography>
            <Colors arrColors={product.color} />
          </Box>

          <Box sx={boxStyle}>
            <Typography 
              sx={textStyle}
            >
              Precio
            </Typography>
            <Typography 
              sx={{ 
                fontSize: 20, 
                textAlign: "center" 
              }}
            >
              ${product.price}
            </Typography>
          </Box>

          <Typography 
            sx={{ 
              padding: "10px", 
              textAlign: {xs: "center", md: "start"} 
            }}
          >
            Hasta 3 cuotas sin interés de ${Math.round(product.price / 3)}
          </Typography>

          <Typography 
            sx={{ 
              padding: "10px", 
              paddingBottom : "5px" , 
              textAlign: {xs: "center", md: "start"} 
            }}
          >
            {product.numStock} unidades disponibles
          </Typography>
          <Box 
            sx={{ 
              marginTop: "10px", 
              marginBottom: "20px", 
              display: "flex" 
            }}
          >
            <Button
              sx={{
                backgroundColor: "#7B5B3E",
                color: "white",
                paddingLeft: "20px",
                paddingRight: "20px",
                fontSize: 15,
                marginRight: "10px",
                "&:hover": {
                  backgroundColor: "#927960",
                }
              }}
            >Agregar al carrito
            </Button>
            <Button
              sx={{
                backgroundColor: "#7B5B3E",
                color: "white",
                fontSize: 15,
                "&:hover": {
                  backgroundColor: "#927960",
                }
              }}
              onClick={handleGoBackBtn}
            >Volver
            </Button>
          </Box>
          <Box
            sx={{ 
              marginTop: "10px", 
              marginBottom: "20px", 
              display: "flex" 
            }}>
            <Reviews id={id} image={product.img} name={product.name} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
};

export default Details;
