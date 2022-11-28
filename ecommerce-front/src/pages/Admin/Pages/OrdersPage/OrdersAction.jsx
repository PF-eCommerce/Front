import { Box, Button, styled } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonAction = styled(Button)({
    backgroundColor: "#94744F",
    color: "white",
    "&:hover": {
        backgroundColor: "#4C4034"
    }
})

export default function OrdersAction({ text, action, datos }) {

    const navigate = useNavigate();

    const handleClick = () => {
        switch (action) {
            case "order":
                navigate(`/admin/orders/${datos.id}`);
                break;
            case "user":
                alert("sin implementar");
                break;
            default:
                break;
        }
    }
    return (
        <Box>
            <ButtonAction variant="contained" onClick={handleClick}>{text}</ButtonAction>
        </Box>

    )
}