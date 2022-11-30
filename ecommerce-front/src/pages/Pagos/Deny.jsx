import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Link, useNavigate } from "react-router-dom";

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
const Icono = styled(SentimentVeryDissatisfiedIcon)({
    color: "red",
    fontSize: "200px"
})


export default function Deny(){
    const navigate = useNavigate();
    return(
        <Container>
            <Text>Lo sentimos, su pago ha sido rechazado</Text>
            <Icono />
            <Text>Por favor, intente nuevamente</Text>
            <Button variant="contained" onClick={() => navigate("/home")}>Volver al HOME</Button>
        </Container>
    )
}