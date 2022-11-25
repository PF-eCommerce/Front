import { styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Orders from "./Orders";
import Users from "./Users";

const Container = styled(Box)({
    marginLeft:"20px",
    display:"flex",
    
})

export default function Dashboard(){
    return(
        <Container>
            <Users />
            <Orders />
        </Container>
    )
}