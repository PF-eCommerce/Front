import { Box, Button, Typography, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Size from "./Size";
import Colors from "./Colors";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetail,
  deleteDetail,
} from "../../redux/actions/productsAction";
import Carrusel from "./Carrusel";
import {addToCart} from "../../redux/actions/cartAction"
import Alert from "../../components/Cart/Alert";
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from "./Detail.module.css";
import Review from "../../components/Review/Review";
import Rating from "@mui/material/Rating";
import Comentarios from '../../components/Review/Comentarios';
import { getAllUsers } from "../../redux/actions/userAction";
import { addToFavorite } from "../../redux/actions/favoriteAction";
import { NestedModal } from "../../components/Modals/ModalToCart";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const [loading, setLoading] = useState(false)

  const handleGoBackBtn = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getProductDetail(id));
    return function () {
      dispatch(deleteDetail());
    };
  }, [dispatch, id]);

  const product = useSelector((state) => state.product?.detail);
  const [alert, setAlert] = useState(false);
  
  const reviewsByProduct = useSelector((state) => state.review?.reviews);
  const allUsers = useSelector((state) => state.user?.users)?.map((u) => ({
    name: u?.name,
    id: u?._id,
  }));


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

  function handleClick(e, id){
    e.preventDefault()
    dispatch(addToFavorite(product))
    
  }
 
  const imagen = product.img?.map(el=>el)


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
        justifyContent: "space-around",
      }}
    >
      <Typography
        variant='h4'
        align='center'
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
             <IconButton aria-label="add to favorites">
              <FavoriteIcon 
              onClick={e=>handleClick(e, {
                id:`${product._id}`,
                title:`${product.title}`,
                desc:`${product.desc}`,
                price:`${product.price}`,
                img:[`${imagen}`],
                numStock:`${product.numStock}`,
                })}/>
             </IconButton>
              <IconButton >
               <NestedModal/>
              </IconButton>


            <Button
              sx={{
                backgroundColor: "#7B5B3E",
                color: "white",
                fontSize: 15,
                "&:hover": {
                  backgroundColor: "#927960",
                },
              }}
              onClick={handleGoBackBtn}
            >
              Volver
            </Button>
          </Box>
          <Box
            sx={{ 
              marginTop: "10px", 
              marginBottom: "20px", 
              display: "flex" 
            }}>
            <Review id={id} image={product.img} name={product.name} />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Typography
          variant='h4'
          align='center'
          sx={{ marginTop: "10px",
          marginBottom: "20px", width: "100%" }}
        >
          { reviewsTotales > 0 ? <Comentarios allUsers={allUsers} reviewsByProduct={reviewsByProduct} /> : null }
        </Typography>
      </Box>
      {alert ? <Alert /> : null}
    </Box>
    
  );
};

export default Details;

