import { Box, styled, Typography } from "@mui/material";
import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useSelector } from "react-redux";

const Container = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "60vh",
    flexWrap: "wrap",
})
const Text = styled(Typography)({
    fontSize: "30px",
    width: "100%",
    textAlign: "center",
})
const Icono = styled(CheckCircleIcon)({
    color: "green",
    fontSize: "200px"
})
export default function Success() {
    localStorage.setItem('cart', [])
    // const awa = JSON.parse(localStorage.getItem("cart"))
    // console.log(awa)
    // console.log(data)
    // const data = useSelector((state) => state)
    return (
        <Container>
            <Text>
                Su compra se procesó satisfactoriamente
            </Text>
            <Icono />
            <Text>
                {"Gracias por confiar en nosotros :)"}
            </Text>
        </Container>
    )
}