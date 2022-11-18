import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";




const Sumas = ({cart}) => {
    return (
        <Box  justifyContent="center"display={"flex"} pl={8} >
        <Box  
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary',
       
      }}
         >

        <Typography  variant="h5" color="initial">Sumas</Typography>
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
        <Button pt={8} variant="contained">Proceder a Pagar</Button>
    </Box>
    </Box>
    )
}

export default Sumas