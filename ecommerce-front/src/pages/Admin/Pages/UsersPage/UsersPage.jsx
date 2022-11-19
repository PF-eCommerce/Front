import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../../redux/actions/adminAction";
import { Button, styled } from "@mui/material";
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
}