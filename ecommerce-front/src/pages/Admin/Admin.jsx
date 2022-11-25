import { Box, styled } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Container = styled(Box)({
    backgroundColor: "#DBD0C4", 
    paddingTop: "20px", 
    display: "flex", 
    flexWrap: "wrap", 
    justifyContent: "start"
})

export default function Admin() {
    return (
        <Container>
            <Sidebar />
            <Outlet />
        </Container>
    )
}