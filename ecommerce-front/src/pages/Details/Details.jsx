import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { obj } from "../../utils/data/productDetail";
import Size from "./Size";
import Colors from "./Colors";


const Details = () => {

  const boxStyle = {
    display: "flex",
    alignItems: "center"
  }
  const textStyle = {
    marginRight: "10px",
    marginBottom: "10px",
    width: "200px",
    backgroundColor: "#A28064",
    padding: "10px",
    textAlign: "center",
    borderRadius: "18px",
    color: "white",
    fontSize: 20
  }

  return (
    <Box >
      <Typography variant="h4" align="center" sx={{ margin: "30px" }}>
        {obj.title}
      </Typography>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
      }}>
        <Box
          component="img"
          sx={{
            maxHeight: "70vh",
            maxWidth: { xs: 350, md: "auto" },
          }}
          alt="Product"
          src={obj.img}
        />
        <Typography sx={{ padding: "10px", width: "30%", textAlign:"center" }}>{obj.desc}</Typography>
        <Box>
          <Box sx={boxStyle}>
            <Typography sx={textStyle}>Talles disponibles</Typography>
            <Size arrSize={obj.size} />
          </Box>
          <Box sx={boxStyle}>
            <Typography sx={textStyle}>Colores disponibles</Typography>
            <Colors arrColors={obj.color} />
          </Box>
          <Box sx={boxStyle}>
            <Typography sx={textStyle}>Precio</Typography>
            <Typography sx={{ fontSize: 20 }}>${obj.price}</Typography>
          </Box>
          <Typography sx={{ padding: "10px" }}>Hasta 3 cuotas sin interés de ${Math.round(obj.price / 3)}</Typography>
          <Box sx={{ marginTop: "30px" }}>
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
                "&:hover": {
                  backgroundColor: "#927960",
                }
              }}
            >Volver
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
};

export default Details;
