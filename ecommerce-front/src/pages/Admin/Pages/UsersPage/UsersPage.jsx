import React from "react";
import { styled } from "@mui/material";
import DataGridX from "./DataGrid";

const Container = styled('div')({
    width: "75%",
    height: "635px",
    display:"flex",
    marginLeft:"20px"
})

export default function UsersPage() {
    return (
        <Container>
            <DataGridX />
        </Container>
    )
};