import React from 'react'
import { styled } from "@mui/material";
import Data from "./Data";

const Container = styled('div')({
    width: "80%",
    height: "635px",
    display:"flex",
})

const ProductPage = () => {
  return (
    <Container>
            <Data/>
        </Container>
  )
}

export default ProductPage
