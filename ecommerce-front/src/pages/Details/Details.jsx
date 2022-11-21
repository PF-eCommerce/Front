import { Box, Button, Typography, Link, IconButton } from "@mui/material";
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

import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import {addToCart} from "../../redux/actions/cartAction"
import { selectSize, deleteSize } from "../../redux/actions/cardAction";
import Alert from "../../components/Cart/Alert";
import Modal from '@mui/material/Modal';
import Grid from "@mui/material/Unstable_Grid2";
import CardMedia from '@mui/material/CardMedia';
import { styled } from "@mui/material/styles";
import { SubmitButton } from "../Forms/FormLogin";
// import e from "express";
// import Button from '@mui/material/Button';

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

const SizeButton = styled(Button)({
  // width:400,
  color:'white',
  borderRadius:'2px',
  boxShadow: '0 0 4px black',
  textTransform: 'none',
  fontSize: 15,
  padding: '6px 12px',
  border: 'none',
  lineHeight: 1.5,
  backgroundColor: 'rgb( 23, 87, 45)',
  borderColor: '#0063cc',
  margin: 7,
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: 'rgb( 23, 87, 45)',
    borderColor: '#0062cc',
    boxShadow: 'none',
    opacity: '0.5',
    transform: 'scale(1)',
    boxShadow: '0 0 10px white',
    // transition: 'all .3s',
    // cursor: 'pointer',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const product = useSelector((state) => state.product.detail)
  
  const sizee = useSelector(state=> state?.card.size)
  const [qty, setQty] = React.useState(1)
  const navigate = useNavigate()

  function handleClick(e){
    e.preventDefault()
    
    if(e.target.value==='less'){
      if (qty>1){
        setQty(qty-1)
      }
    } else if(e.target.value==='add'){
      
      if(qty<10){
        setQty(qty+1)
      }
    }
  }
  function sendToCart(e){
    e.preventDefault()
    const carro = {
      _id: product._id,
      size: sizee,
      qty
    }
    
    localStorage.setItem('cart', JSON.stringify(carro) )
    navigate('/home')
  }

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Elije tus opciones</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Grid container
        sx={{ ...style, width: 700 }}
        >
          <Grid xs={12}
          style={{margin:10}}
          >
          <h3 id="parent-modal-title">Lo que llevas en tu carro</h3>
          </Grid>
          <Grid container xs={12}>
            <Grid xs={2}
            style={{margin:10}}
            >
            <CardMedia
            component="img"
            height="280"
            image={product&&product.img?.[0]}
            style={{
              height:'80px',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundAttachment: 'fixed'
            }}
              />
            </Grid>
            <Grid xs={3}
            style={{
              width:'60px',
              margin:10}}
            >
              <p>{product.title}, Talle: {sizee&&sizee}</p>
            </Grid>
            <Grid xs={1.2}
            style={{
              margin:10}}
            >
              <p>${product.price}</p>
            </Grid>
            <Grid xs={5}
            style={{
              margin:10}}
            >
              <Grid xs={12}
              style={{
                display:'flex',
                alignItems:'center',
                }}
              >
                <SizeButton
                value={'less'}
                onClick={handleClick}
                >-</SizeButton>
                <p>{qty}</p>
                <SizeButton
                value={'add'}
                onClick={handleClick}
                >+</SizeButton>
                <p>Máximo 10 unidades</p>
              </Grid>

            </Grid>

          </Grid>
          <Grid container xs={12}
          style={{
            margin:10}}
          >
            <Grid
            style={{
              marginLeft:400,
              }}
            >
            <SubmitButton
            onClick={sendToCart}
            style={{
              width:200
            }}
            >Ir al carro</SubmitButton>
            </Grid>


          </Grid>


        </Grid>
      </Modal>
    </React.Fragment>
  );
}

function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const product = useSelector((state) => state.product.detail)
  const dispatch = useDispatch()
  const sizee = useSelector(state=> state?.card.size)

  const handleSelect = (e) =>{
    dispatch(selectSize(e.target.value))
    // dispatch(deleteSize())
  }
  console.log('SIZE', sizee)

  return (
    <div>
      <Button onClick={handleOpen}>
      <AddShoppingCartOutlinedIcon sx={{marginRight:"1rem"}} color="secondary" fontSize="large"/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Grid container
        sx={{ ...style, width: 600 }}
        >
          <Grid xs={12}
          style={{margin:10}}
          >
          <h3 id="parent-modal-title">Selecciona tus opciones para agregar el producto al carro</h3>
          </Grid>
          <Grid container xs={12}>
            <Grid xs={2}
            style={{margin:10}}
            >
            <CardMedia
            component="img"
            height="280"
            image={product&&product.img?.[0]}
            style={{
              height:'80px',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundAttachment: 'fixed'
            }}
              />
            </Grid>
            <Grid container xs={6}
            style={{margin:10}}
            >
              <Grid xs={12}>
                <h3>{product.title}</h3>
              </Grid>
              <Grid xs={12}>
                <p>descripcion resumida</p>
              </Grid>
            </Grid>
            <Grid container xs={2}
            style={{margin:10}}
            >
              <p>${product.price}</p>
            </Grid>

          </Grid>
          <Grid container xs={12}
          style={{margin:10}}
          >
            <Grid container xs={6}>
              <Grid xs={12}>
                <p>Selecciona tu talle: {sizee&&sizee}</p>
              </Grid>
              <Grid xs={12}>
                {product.size?.map(e=>{
                  return(
                  <SizeButton
                  value={e}
                   onClick={e=>handleSelect(e)}
                   >{e}</SizeButton>
                  )
                })}
              </Grid>
            </Grid>

          </Grid>

          <ChildModal />
        </Grid>
        {/* <Box sx={{ ...style, width: 400 }}>
          <h3 id="parent-modal-title">Selecciona tus opciones para agregar el producto al carro</h3>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <ChildModal />
        </Box> */}
      </Modal>
    </div>
  );
}


const Details = () => {
  const { id } = useParams();
  // console.log(id)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetail(id));
    return function () {
      dispatch(deleteDetail());
    };
  }, [dispatch, id]);

  const product = useSelector((state) => state.product.detail);
  const [alert, setAlert] = useState(false);
  // console.log(product.img)
  // console.log(product.id)
  // console.log(id)

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
        variant='h4'
        align='center'
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

              <IconButton >
               <NestedModal/>
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
