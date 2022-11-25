import { Box, styled } from "@mui/material";
import React from "react";
import OrdersTable from "./OrdersTable";



const Container = styled(Box)({
    marginLeft: "20px",
    width:"75%"
})

export default function OrdersPage() {
    return (
        <Container>
            <OrdersTable />
        </Container>
    )
}