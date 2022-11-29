import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch, useSelector } from "react-redux";
import { deleteAllCart } from "../../redux/actions/cartAction";
import { useNavigate } from "react-router-dom";

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
    const dispatch = useDispatch();
    const navigate = useNavigate()
    dispatch(deleteAllCart())
    return (
        <Container>
            <Text>
                Su compra se procesó satisfactoriamente
            </Text>
            <Icono />
            <Text>
                {"Gracias por confiar en nosotros :)"}
            </Text>
            <Button variant="contained" onClick={() => navigate("/home")}>Volver al HOME</Button>
        </Container>
    )
}