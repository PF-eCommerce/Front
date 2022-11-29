import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { styled } from "@mui/system";
import LoginIcon from "@mui/icons-material/Login";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  auth0User,
  registerUserAuth0,
  userLogOut,
} from "../../redux/actions/userAction";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useState } from "react";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export default function PositionedMenu() {
  const { loginWithRedirect, logout, isAuthenticated, getAccessTokenSilently } =
    useAuth0();
  const userLocalStorage = JSON.parse(localStorage.getItem("auth0"));
  const [user, setUser] = React.useState(userLocalStorage);
  const userRedux = useSelector((state) => state.user.user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const TypografiaInicio = styled(Typography)(({ theme }) => ({
    display: "none",
    gap: "5px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const handleLogout = () => {
    localStorage.removeItem("auth0");
    logout();
    dispatch(userLogOut());
  };

  const callApiProtected = async () => {
    try {
      const token = isAuthenticated && (await getAccessTokenSilently());

      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/protected`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.setItem("auth0", JSON.stringify(response.data));
      const userAction = JSON.parse(localStorage.getItem("auth0"));
      dispatch(auth0User(userAction));
      
    } catch (error) {
      // console.log(error.message);
    }
  };

  React.useEffect(() => {
    // console.log('ISAUTHENTIC', isAuthenticated)
    // console.log('LOCALSTORAGE', localStorage)
    // console.log('AUTH0', localStorage.getItem('auth0'))
    if (isAuthenticated && localStorage.getItem("auth0") === null) {
      callApiProtected();
    }
  });

  console.log(user);
  return (
    <div>
      {(localStorage.getItem("auth0") === null) |
      (localStorage.getItem("auth0") === undefined) ? (
        <>
          {" "}
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            <Button onClick={loginWithRedirect} variant='text'>
              Iniciar Sesión
            </Button>
            <LoginIcon />{" "}
          </Box>
        </>
      ) : (
        <>
          {" "}
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          > 
          <Button>{userRedux?.email ? userRedux?.email : user?.email}</Button>
            <Tooltip
              title={
                Object.values(userRedux).length > 0
                  ? userRedux?.email
                  : user?.email
              }
            >
              <IconButton
                onClick={handleClick}
                size='small'
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup='true'
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>
                  {Object.values(userRedux).length > 0
                    ? userRedux?.email.toUpperCase().charAt(0)
                    : user?.email.toUpperCase().charAt(0)}
                </Avatar>
                
              </IconButton>
            </Tooltip>
            
          </Box>
          <Menu
            anchorEl={anchorEl}
            id='account-menu'
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
             <Link style={{textDecoration: 'none' , color: '#4E4D4D'}}  to={`/account/${user?._id}/profile`}>
            <MenuItem>
               
               
              
                <Avatar /> Perfil
            </MenuItem>
            </Link>
            
            <Divider />
            { user?.admin?.includes('admin') || userRedux?.admin?.includes('admin') ? <Link to={`/admin/dashboard`}>
            <MenuItem>
              <ListItemIcon>
              <AdminPanelSettingsIcon/>
              </ListItemIcon>
              Herramienta Admin
            </MenuItem>
            </Link> : null}
            
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize='small' />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>{" "}
        </>
      )}
    </div>
  );
}
