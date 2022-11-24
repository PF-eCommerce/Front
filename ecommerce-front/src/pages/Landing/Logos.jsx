import { Box, styled } from "@mui/system";
import React from "react";
import MP from "./MercadoPagoLogo.png";
import PP from "./PayPalLogo.png";
import St from "./StripeLogo.png";

const Image = styled('img')({
    width: "30%",
    backgroundColor:"transparent",
    borderRadius:"10px",
})
const Container = styled(Box)({
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    backgroundColor:"#E7F6FD",
    borderRadius:"10px"
})

export default function Logos() {
    return (
        <Container>
            <Image src={MP} />
            <Image src={PP} />
            <Image src={St} />
        </Container>
    )
}