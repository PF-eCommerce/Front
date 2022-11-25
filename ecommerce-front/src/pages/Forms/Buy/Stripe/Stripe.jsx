import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { payStripe } from "../../../../redux/actions/pasarelaAction";
import logo from "./Image.png";

const Container = styled(Box)({
    width:"300px",
})
const PaypalButton = styled(Button)({
    backgroundColor:"#1A1F36",
    width:"300px",
    boxShadow:"0px 0px 5px black",
    borderRadius:"10px",
    "&:hover":{
        backgroundColor:"#131525"
    }
})
const Image = styled('img')({
    width:"200px"
})

export default function Stripe(){
    const dispatch = useDispatch()
    // const data = [
    //     {
    //         name:"producto 1",
    //         price: 500,
    //         units: 3
    //     },
    //     {
    //         name:"producto 2",
    //         price: 750,
    //         units: 6
    //     }
    // ]
    const cart = JSON.parse(localStorage.getItem("cart"))
    const data = cart.map(p => {
        return {
            name: p.title,
            price: p.price,
            units: p.qty,
        }
    })
    console.log(cart)
    const handleClick = () => {
        dispatch(payStripe(data))
    }
    return(
        <Container>
            <PaypalButton onClick={handleClick}>
                <Image src={logo} alt="logo" />
            </PaypalButton>
        </Container>
    )
}