import React from "react";
import { styled } from "@mui/material";
import DataGridX from "./DataGrid";

const Container = styled('div')({
    width: "80%",
    height: "635px",
    display:"flex",
})

export default function UsersPage() {
    return (
        <Container>
            <DataGridX />
        </Container>
    )
};