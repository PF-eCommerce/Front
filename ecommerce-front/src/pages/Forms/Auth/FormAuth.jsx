import React, { useState, forwardRef, useEffect } from "react";
import style from "./FormAuth.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Typography } from "@mui/material";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import PasswordIcon from '@mui/icons-material/Password';
import Link from '@mui/material/Link';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { getUserData, userLogin } from "../../../redux/actions/userAction";
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";

const FormAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    email: "",
    password : "",
    showPassword: false,
  });

  const [userStorage, setUserStore] = useState(JSON.parse(localStorage.getItem("user")))
  const token = useSelector((state) => state.user.token);
  const handleClickShowPassword = () => {
    setInput({
      ...input,
      showPassword: !input.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

   
  };

  console.log(input);
  const handleOnSubmit = (e) => {
    e.preventDefault();
     
    dispatch(userLogin(input))
    setInput({
    
      email: "",
      password : "",
      showPassword: false,
     
    });
    
    
  };
   console.log(Object.keys(token).length)
  useEffect(()=> {
    if (Object.keys(token).length > 0 && localStorage.getItem("token")?.length >0 ) {
      dispatch(getUserData());
      return navigate("/");
    }
  }, [dispatch, token])
  console.log(token)
  return (
    <>
     <div className={style.container}>
      <form  onSubmit={handleOnSubmit} className={style.form}>
        <div >
        <Typography variant="h2" component="h2">Iniciar Sesion</Typography>
        </div>

        <Box sx={{ display: 'flex', alignItems: 'flex-end' , flexDirection: 'column'}}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <AccountCircleIcon sx={{ color: 'action.active', mr: 1, my: 2.5 }} />
        <TextField
         error={error.email && true}
         helperText={error.email}
         name="email"
         onChange={handleOnChange}
         value={input.email}
         label="Email"
         variant="outlined"
        id="input-with-sx"  sx={{
            "& > :not(style)": { m: 2, width: "60ch", height: "6ch" },
          }} />
         </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <PasswordIcon sx={{ color: 'action.active', mr: 1, my: 2.5 }}/>
           
            <OutlinedInput
            sx={{ m: 2, width: "60ch", height: "6ch" }}
            label= "Password"
            name = "password"
            type={input.showPassword ? 'text' : 'password'}
            value={input.password}
            
            onChange={handleOnChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {input.showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
            

            />
          
          
          </Box>
        

        
      
      </Box>
       

       

          <input className={style.button}
            type="submit"
            disabled={Object.keys(error).length !== 0 && true}
            
            value="Ingresar"
          ></input>
         <Box  >
         <Link href="#">olvidaste la contraseña?</Link>
         </Box>
      </form>
      {
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Logeado Correctamente!
          </Alert>
        </Snackbar>
      }

       </div>
    </>
  );
};

export default FormAuth;