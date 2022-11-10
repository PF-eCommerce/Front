import { AppBar,Toolbar,Box, Typography, Button, IconButton, } from "@mui/material";
import React from "react";
import {styled} from "@mui/system";
import SearchBar from "./SearchBar/SearchBar";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import MenuCatalogo from "./MenuCatalogo"
import PositionedMenu from "./MenuSession"
import Logo from "./Logo";



const StyledToolbar = styled(Toolbar)(({theme})=>({
  display:"flex",
  justifyContent:"space-between",
  backgroundColor:"#fff3e0"
  

  
}))

const LogoBox = styled(Box)(({theme})=>({
  display:"none",
  gap:"5px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
      display:"flex"
     }

}))

const ButtonNav = styled(Button)(({theme})=>({
  display:"none",
  gap:"5px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
      display:"flex"
     }

}))






const Navbar = () => {
return(
  <AppBar position="sticky">
    <StyledToolbar >
      <LogoBox>
        <Logo/>
      </LogoBox>
      <MenuCatalogo/>
      <ButtonNav variant="outlined">Promos</ButtonNav>
      <Box sx={{display:"flex"}}>
         <SearchBar/>
      </Box>
      <PositionedMenu/>
      <IconButton>
        <AddShoppingCartOutlinedIcon sx={{marginRight:"1rem"}}/>
      </IconButton>
      
    </StyledToolbar>
   
    
  </AppBar>
)
};

export default Navbar;
