import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar,Typography } from '@mui/material';
import { styled } from "@mui/system";



export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const TypografiaInicio = styled(Typography)(({theme})=>({
    display:"none",
    gap:"5px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
       }
  
  }))

  return (
    <div>
      <Button
        color='primary'
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <Avatar sx={{width: 28, height: 28, bgcolor:"#D4D3D3"}} />
     
      <TypografiaInicio sx={{marginLeft:"1rem"}} variant='span'
      color="secondary">Iniciar Sesion</TypografiaInicio>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}