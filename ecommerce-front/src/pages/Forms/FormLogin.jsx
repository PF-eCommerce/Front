import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { width } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { userRegister } from "../../redux/actions/userAction";


const SubmitButton = styled(Button)({
  width:400,
  color:'white',
  borderRadius:'20px',
  boxShadow: '0 0 7px black',
  textTransform: 'none',
  fontSize: 20,
  padding: '6px 12px',
  border: 'none',
  lineHeight: 1.5,
  backgroundColor: 'rgb( 255, 107, 107)',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: 'rgb( 23, 87, 45)',
    borderColor: '#0062cc',
    boxShadow: 'none',
    opacity: '0.5',
    transform: 'scale(1)',
    boxShadow: '0 0 10px white',
    // transition: 'all .3s',
    // cursor: 'pointer',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const FormLogin = () => {

  const dispatch = useDispatch()
  const errorBack = useSelector(state=>state.user.error_register)
  const [errors, setErrors] = useState('')
  const [input, setInput] = useState({
    userName:'',
    email:'',
    password:'',
})

  const inputsError = ['userName', 'email', 'password','password2']

  function validate(input) {
    let errors = {};
    
    if (!input.userName) {
      errors.userName = 'Nombre de usuario requerido';
    }
    else if (input.userName.length>20){
      errors.userName = 'Máximo 20 caracteres'
    }
    if (!input.email) {
      errors.email = 'Email requerido'; 
    }     
    else if (!(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(input.email))) {
      errors.email = 'Email invalido'
    }
    
    if (!input.password) {
      errors.password = 'Contraseña requerida';
    } 
    else if (input.password.length<8) {
      errors.password = 'Entre 8 y 20 caracteres';
    }
    if (!input.password2) {
      errors.password2 = 'Repetir contraseña';
      
    }else if (input.password2 !== input.password) {
      errors.password2 = 'La contraseña debe coincidir';
    } 
    
    return errors;
  };

  function handleChange(e){
    e.preventDefault()
    setInput({
        ...input,
        [e.target.name]: e.target.value
    });
    setErrors(validate({
        ...input, 
        [e.target.name]:e.target.value
    }))
    // console.log('INPUT', input)
    // console.log('ERROR', errors)
    
}

    function handleSubmit(e){
    e.preventDefault()
    if(!inputsError.some(inp=>errors.hasOwnProperty(inp))&&input.userName.length>0){
          dispatch(userRegister(input))
          if(!errorBack){
              alert('Usuario creado correctamente')
              setInput({
              userName:'',
              email:'',
              password:''
              })
              
          } else alert(errorBack.msg)
      }
    } 

  const Item = styled(Paper)(({ theme }) => ({
    //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    backgroundColor: "none",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    //   color: theme.palette.text.secondary,
    color: "black",
    background: "none",
    border: "none",
    boxShadow: 'none',
    
  }));

  return (
    
      <Grid container xs={12}
    style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: 50,
      
      
    }}>
      <Grid container xs={10}
      style={{
        display: 'flex',
        justifyContent: 'center',
        border: 'none',
        backgroundColor: '#b8ffef',
        boxShadow: '5px 5px 5px black',
      }}
      >
        <Grid container xs={6}>
          <Grid xs={12}>
          <Item
          style={{
            display:'flex',
            justifyContent:'flex-start',
            fontSize: '30px',
            marginTop:20,
            marginLeft: 40,
          }}
          >Regístrate</Item>
          <Item
          style={{
            display:'flex',
            justifyContent:'flex-start',
            fontSize: '14px',
            marginTop:-10,
            marginLeft: 40,
          }}
          >Ingresa tus datos personales y disfruta de una experiencia de compra más rápida.</Item>
          </Grid>
          <Grid xs={5}
          style={{
            marginTop:30,
            marginLeft:60,
          }}
          >
          {!errors.userName?
            <TextField
            required
            id="outlined-required"
            name='userName'
            value={input.value}
            // label="Requerido"
            placeholder="Nombre de usuario"
            onChange={handleChange}
            style={{
              backgroundColor:'white'
            }}
            />
            :
            <TextField
            required
            id="outlined-required"
            name='userName'
            value={input.value}
            // label="Requerido"
            placeholder="Nombre de usuario"
            onChange={handleChange}
            style={{
              backgroundColor:'white'
            }}
            />
          }
          
          </Grid>
          <Grid xs={5}
          style={{
            marginTop:30,
            marginLeft:20,
          }}
          >
          {!errors.email?
          <TextField
          required
          id="outlined-required"
          name='email'
          value={input.value}
          // label="Requerido"
          placeholder="Email"
          onChange={handleChange}
          style={{
            backgroundColor:'white'
          }}
          />
          :
          <TextField
          required
          id="outlined-required"
          name='email'
          value={input.value}
          // label="Requerido"
          placeholder="Email"
          onChange={handleChange}
          helperText={errors.email}
          style={{
            backgroundColor:'white'
          }}
          />
        }
          
          </Grid>
          <Grid container xs={12}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop:30,
            marginLeft:40,
          }}
          >
            <Grid xs={6}>
          {!errors.password?
          <TextField
          required
          id="outlined-required"
          type='password'
          name='password'
          value={input.value}
          // label="Requerido"
          placeholder="Contraseña"
          // helperText="Debe contener mas de 8 caracteres"
          onChange={handleChange}
          style={{
            backgroundColor:'white',
            width:230
          }}
          />
          :
          <TextField
          required
          id="outlined-required"
          type='password'
          name='password'
          value={input.value}
          // label="Requerido"
          placeholder="Contraseña"
          helperText={errors.password}
          onChange={handleChange}
          style={{
            backgroundColor:'white',
            width:230
          }}
          />
          }
          
          </Grid>
          </Grid>
          {/* <Item
          style={{
            marginLeft:20,
            marginTop:10,
            marginBottom:10,
            fontSize:'15px'
          }}
          >Repetir contraseña</Item> */}
          <Grid container xs={12}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop:20,
            marginLeft:40,
          }}
          >
            <Grid xs={6}>
          {!errors.password2?
          <TextField
          required
          id="outlined-required"
          name='password2'
          type='password'
          value={input.value}
          // label="Requerido"
          placeholder="Repetir Contraseña"
          // helperText="Debe coincidir con la anterior"
          onChange={handleChange}
          style={{
            backgroundColor:'white',
            width:230
          }}
          />
          :
          <TextField
          required
          id="outlined-required"
          type='password'
          name='password2'
          value={input.value}
          // label="Requerido"
          placeholder="Repetir Contraseña"
          helperText={errors.password2}
          onChange={handleChange}
          style={{
            backgroundColor:'white',
            width:230
          }}
          />
          }
          
          </Grid>
          </Grid>
          
        </Grid>
        <Grid container xs={6}>
          <Item
          style={{
            marginLeft:50,
            marginTop:30,
            fontSize:'20px'
          }}
          >Beneficio Trés Bien</Item>
        <Grid container xs={10}
        style={{
          display:'flex',
          justifyContent:'center',
          // alignItem: 'center',
        }}
        >
          <Grid xs={1}>
            <NotificationsActiveOutlinedIcon/>
          </Grid>
          <Grid xs={10}
          style={{
            display:'flex',
            justifyContent:'flex-start',
          }}
          >
            <Item
            style={{
              marginTop:-7
            }}
            >Recibir notificaciones en tiempo real de tus pedidos.</Item>
          </Grid>

        </Grid>
        <Grid container xs={10}
        style={{
          display:'flex',
          justifyContent:'center',
          marginTop:-40,
          // alignItem: 'center',
        }}
        >
          <Grid xs={1}>
            <FeedOutlinedIcon/>
          </Grid>
          <Grid xs={10}
          style={{
            display:'flex',
            justifyContent:'flex-start',
          }}
          >
            <Item
            style={{
              marginTop:-7
            }}
            >Revisar tus boletas online.</Item>
          </Grid>

        </Grid>
        <Grid container xs={10}
        style={{
          display:'flex',
          justifyContent:'center',
          marginTop:-50,
          // alignItem: 'center',
        }}
        >
          <Grid xs={1}>
            <StarBorderOutlinedIcon/>
          </Grid>
          <Grid xs={10}
          style={{
            display:'flex',
            justifyContent:'flex-start',
          }}
          >
            <Item
            style={{
              marginTop:-5
            }}
            >Guardar medios de pago y direcciones favoritas.</Item>
          </Grid>

        </Grid>
        </Grid>
        <Grid container xs={12}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 40,
            marginTop:30
          }}
          > 
            {input.userName&&!inputsError.some(inp=>errors.hasOwnProperty(inp))?
            <SubmitButton>Registrarse</SubmitButton>
            :
            <SubmitButton
            style={{
              opacity: 0.33,
              pointerEvents:'none'
            }}
            >Registrarse</SubmitButton>
            }
            {/* <SubmitButton>Registrarse</SubmitButton> */}
          </Grid>
      </Grid>
    </Grid>
    
    

  )
};

export default FormLogin;
