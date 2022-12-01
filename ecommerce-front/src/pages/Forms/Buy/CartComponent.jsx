import { Box, Button, CardMedia, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";



export const Cart = ({cart}) => {
    const navigate = useNavigate()
    const handleCheckout = () => {
     navigate('/buy')
    }
    console.log('CART', cart)
    return (
        <Box  justifyContent="center"display={"flex"} pl={2} pr={4}>
        <Box  
      sx={{
        width: 300,
        height:'100%',
        backgroundColor: 'primary',
       
      }}
         >

        <Typography  variant="h5" color="initial">Resumen del Pedido</Typography>
        <Divider/>
        {cart&&cart.map(el=>{
            return(
            <Grid container xs={12}>
                <Grid xs={2}>
                <CardMedia
                component="img"
                height="280"
                image={el.img?.[0]}
                style={{
                    height:'80px',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundAttachment: 'fixed'
            }}
              />
                </Grid>
                <Grid xs={7}
                style={{
                width:'60px',
                fontSize:'13px',
                margin:10}}
                >
                {/* <p>{el.title}</p> */}
                {el.sizee.length>0?
                <p>{el.title}, Talle: {el.sizee}</p>
                :
                <p>{el.title}</p>
                }
                </Grid>
                <Grid xs={1.2}
                style={{
                    margin:10}}
                >
                <p>{el.qty}x${el.price}</p>
                </Grid>
            </Grid>
            
            )
        })}
        
        <Typography pt={4} variant="body1" color="initial">{cart.length === 1 ? "(1) Articulo ": `(${cart.length}) Articulos`}</Typography>
        <Divider/>
        <Typography  variant="h5" color="initial">Total: $
        {cart.reduce(
										(currentSum, currentCartItem) =>
											currentSum +
											currentCartItem.qty *
												currentCartItem.price,
										0
									)
									.toFixed(2)}</Typography>
        {/* <Button fullWidth sx={{mt:"2rem"}} variant="contained"
        onClick={handleCheckout}>Proceder a Pagar</Button> */}
    </Box>
    </Box>
    )
}