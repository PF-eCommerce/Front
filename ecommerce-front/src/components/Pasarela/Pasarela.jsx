import { Box } from "@mui/material";
import React from "react";
import Paypal from "./Paypal/Paypal";
import Stripe from "./Stripe/Stripe";

export default function Pasarela(){
    return(
        <Box>
            <Paypal />
            <Stripe />
        </Box>
    )
}