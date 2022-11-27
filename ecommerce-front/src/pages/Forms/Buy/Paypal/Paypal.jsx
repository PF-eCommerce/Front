import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { payPaypal } from "../../../../redux/actions/pasarelaAction";
import logo from "./Image.png"

const Container = styled(Box)({
    width:"300px",
})
const PaypalButton = styled(Button)({
    backgroundColor:"#F2BC38",
    width:"300px",
    boxShadow:"0px 0px 5px black",
    borderRadius:"10px",
    marginBottom:"10px",
    "&:hover":{
        backgroundColor:"#FDC950"
    }
})
const Image = styled('img')({
    width:"200px"
})



export default function Paypal(){
    const dispatch = useDispatch()
    const cart = JSON.parse(localStorage.getItem("cart"))
    const location = JSON.parse(localStorage.getItem("location"))
    const user = JSON.parse(localStorage.getItem("input"));
    const idUser = JSON.parse(localStorage.getItem("auth0"))._id

    const data = {
        data: cart,
        user:{
            id: idUser,
            ...location,
            ...user,
        },
        PaymentMethod: "Paypal"
    }
    const handleClick = () => {
        dispatch(payPaypal(data))
    }
    return(
        <Container>
            <PaypalButton onClick={handleClick}>
                <Image src={logo} alt="logo" />
            </PaypalButton>
        </Container>
    )
}