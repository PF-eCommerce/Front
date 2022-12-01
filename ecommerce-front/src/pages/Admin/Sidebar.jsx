import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";

const user = JSON.parse(localStorage.getItem('auth0'));
const Container = styled('div')({
    display: "flex",
    flexWrap: "wrap",
    paddingLeft: "10px",
    width: "100%",
    marginTop: "15px",
});
const ItemContainer = styled(Link)({
    display: "flex",
    width: "100%",
    borderRadius: "5px 0px 0px 5px",
    cursor: "pointer",
    marginBottom: "5px",
    "&:hover": { backgroundColor: "wheat" },
})
const TextItem = styled('p')({
    transition: "all .5s",
    width: "72%",
    paddingTop: "3px",
    paddingLeft: "3px",
    color: "black"
})
const MainText = styled('p')({
    width: "100%",
    fontSize: "13px",
    marginBottom: "5px",
})
const styleIcon = {
    color: "#94744F",
    marginLeft: "5px",
    marginRight: "20px",
}

export default function Sidebar() {
    return (
        <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "20%",
            height: "500px",
            backgroundColor: "white",
            boxShadow: "0px 0px 5px black",
            borderRadius: "0px 5px 5px 0px",
        }}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "10px",
                    width: "100%",
                    borderBottom: "2px solid #DBD0C4"
                }}
            >
                <Typography
                    sx={{
                        fontSize: "20px",
                        marginRight: "5px",
                        color: "#D687AC",
                        fontWeight: "bold",
                    }}
                >
                    TresBien</Typography>
                <Typography
                    sx={{
                        fontSize: "20px",
                        color: "#94744F"
                    }}
                >
                    Admin</Typography>
            </Box>
            <Container>
                <MainText>Main</MainText>
                <ItemContainer to="/admin/dashboard">
                    <DashboardIcon sx={styleIcon} />
                    <TextItem>Dashboard</TextItem>
                </ItemContainer>
                <ItemContainer to="/home">
                    <HomeIcon sx={styleIcon} />
                    <TextItem>Home</TextItem>
                </ItemContainer>
            </Container>
            <Container>
                <MainText>Lista</MainText>
                <ItemContainer to="/admin/users">
                    <PersonIcon sx={styleIcon} />
                    <TextItem>Usuarios</TextItem>
                </ItemContainer>
                <ItemContainer to="/admin/products">
                    <StoreIcon sx={styleIcon} />
                    <TextItem>Productos</TextItem>
                </ItemContainer>
                <ItemContainer to="/admin/orders">
                    <CreditCardIcon sx={styleIcon} />
                    <TextItem>Órdenes</TextItem>
                </ItemContainer>
            </Container>
            <Container>
                <MainText>Utilidad</MainText>
                <ItemContainer to="/admin/notifications">
                    <MailIcon sx={styleIcon} />
                    <TextItem>Notificaciones</TextItem>
                </ItemContainer>
            </Container>
            <Container>
                <MainText>Usuario</MainText>
                <ItemContainer to={`/account/${user?._id}/profile`}>
                    <AccountCircleIcon sx={styleIcon} />
                    <TextItem>Perfil</TextItem>
                </ItemContainer>
                <ItemContainer to="/">
                    <LogoutIcon sx={styleIcon} />
                    <TextItem>Salir</TextItem>
                </ItemContainer>
            </Container>
        </Box>
    )
}