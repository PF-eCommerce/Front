import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";


const handleCheckout = () => {
  console.log("handleCheckout")
}

const Sumas = ({cart}) => {
    return (
        <Box  justifyContent="center"display={"flex"} pl={2} pr={4}>
        <Box  
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary',
       
      }}
         >

        <Typography  variant="h5" color="initial">Resumen del Pedido</Typography>
        <Divider/>
        <Typography pt={4} variant="body1" color="initial">{cart.length === 1 ? "(1) Articulo ": `(${cart.length}) Articulos`}</Typography>
        <Divider/>
        <Typography  variant="h5" color="initial">Total: $
        {cart.reduce(
										(currentSum, currentCartItem) =>
											currentSum +
											currentCartItem.count *
												currentCartItem.price,
										0
									)
									.toFixed(2)}</Typography>
        <Button fullWidth sx={{mt:"2rem"}} variant="contained"
        onClick={handleCheckout}>Proceder a Pagar</Button>
    </Box>
    </Box>
    )
}

export default Sumas