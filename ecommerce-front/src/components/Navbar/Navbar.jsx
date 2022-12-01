import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import SearchBar from "./SearchBar/SearchBar";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import MenuCatalogo from "./MenuCatalogo";
import PositionedMenu from "./MenuSession";
import Logo from "./Logo";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "#F9F3EE",
}));
// "  #fff3e0 primer propuesta
const LogoBox = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "5px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const ButtonNav = styled(Button)(({ theme }) => ({
  display: "none",
  gap: "5px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const Navbar = () => {
  const cartState = useSelector((state) => state.cart.cart);
  const user = JSON.parse(localStorage.getItem("auth0"));
  const admin = (user) => {
    if (user && user.admin) {
      if (user.admin.includes("admin")) return true;
      else return false;
    } else {
      return false;
    }
  };

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <LogoBox>
          <Logo />
        </LogoBox>
        <MenuCatalogo />
        {/* <ButtonNav variant='outlined' color='secondary'>
          Promos
        </ButtonNav> */}
        <Box sx={{ display: "flex" }}>
          <SearchBar />
        </Box>
        <PositionedMenu />
        <Box style={{ position: "relative" }}>
          <Link to='/cart'>
            <IconButton>
              <AddShoppingCartOutlinedIcon fontSize='large' color='secondary' />
            </IconButton>

            <Box color={"white"}>
              <Typography
                variant='body1'
                style={{ position: "absolute", top: "0px" }}
                backgroundColor={"#f44336"}
                padding={0}
                border='solid 1px white'
                paddingBottom={0}
                paddingRight={0.2}
                paddingTop={0}
                paddingLeft={0.2}
                borderRadius='5px'
              >
                {cartState.length}
              </Typography>
            </Box>
          </Link>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
