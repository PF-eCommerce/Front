import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { Grid, inputAdornmentClasses, TextField } from '@mui/material';
import axios from "axios";
import {auth0User} from "../../../redux/actions/userAction";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from 'react-redux';
import { isRouteErrorResponse, useNavigate } from 'react-router-dom';
import Paypal from "./Paypal/Paypal";
import Stripe from "./Stripe/Stripe"
import Sumas from '../../../components/Cart/Sumas';
import { SubmitButton } from '../../../components/Styled/StyledButtons';
import { MercadoPago } from './MercadoPago';
import { Cart } from './CartComponent';

const steps = ['Login', 'Datos', 'Pago'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const { loginWithRedirect, logout, isAuthenticated, getAccessTokenSilently, loginWithPopup } = useAuth0();
  const userLocalStorage = JSON.parse(localStorage.getItem("auth0"));
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [inputs, setInputs] = React.useState({
    name: '',
    surname: '',
    phone: '',
    country: '',
    street_name: '',
    street_number: '',
    zip_code: '',
  })
  const [infoCompleted, setInfoCompleted]= React.useState(false)
  const mercadoPagoLink = useSelector(state=>state?.product.linkMP)
  const cartItems = useSelector(state=>state.cart.cart)
  const [errors, setErrors] = React.useState('')

  React.useEffect(() => {
    if (isAuthenticated && localStorage.getItem("auth0") === null) {
      callApiProtected();
    } else if (isAuthenticated && localStorage.getItem("auth0")!== null && infoCompleted===false) {
      setActiveStep(1)
    } else if (isAuthenticated && localStorage.getItem("auth0")!== null && infoCompleted===true){
      setActiveStep(2)
    }
  },[isAuthenticated, infoCompleted]);
  
  const inputsError = ['name', 'surname', 'phone','country', 'street_name', 'street_number', 'zip_code']

  function validate(input) {
    let errors = {};

    if (!input.name) {
      errors.name = 'Nombre de usuario requerido';
    }
    else if (input.name.length>30){
      errors.name = 'Máximo 30 caracteres'
    }
    if (!input.surname) {
      errors.surname = 'Apellido de usuario requerido';
    }
    else if (input.surname.length>30){
      errors.surname = 'Máximo 30 caracteres'
    }
    if (!input.phone) {
      errors.phone = 'Telefono requerido';
    }
    else if (input.phone.length!==8){
      errors.phone = 'Debe contener 8 caracteres'
    }
    else if (input.phone<0){
      errors.phone = 'Numero invalido'
    }
    if (!input.country) {
      errors.country = 'Pais requerido';
    }
    if (!input.street_name) {
      errors.street_name = 'Direccion de entrega requerida';

    }else if (input.street_name.length>30){
      errors.street_name = 'Maximo 30 caracteres'
    }
    if (!input.street_number) {
      errors.street_number = 'Altura de entrega requerida';

    }else if (input.street_number.length>7){
      errors.street_number = 'Maximo 7 caracteres'
    }
    else if (input.street_number<0){
      errors.street_number = 'Numero invalido'
    }
    if (!input.zip_code) {
      errors.zip_code = 'Altura de entrega requerida';

    }else if (input.zip_code.length>5){
      errors.zip_code = 'Maximo 5 caracteres'
    }else if (input.zip_code<0){
      errors.zip_code = 'Numero invalido'
    }

    return errors;
  };
  
  

  const callApiProtected = async () => {
    try {
      const token = isAuthenticated && (await getAccessTokenSilently());

      const response = await axios.get(`${process.env.REACT_APP_API_URL}/protected`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      localStorage.setItem("auth0", JSON.stringify(response.data));
      const userAction = JSON.parse(localStorage.getItem("auth0"));
      dispatch(auth0User(userAction));
    } catch (error) {
      console.log(error.message);
    }
  };

  

  const handleReset = () => {
    setActiveStep(0);
  };

  function handleChange(e){
    e.preventDefault()
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
  });
  setErrors(validate({
    ...inputs,
    [e.target.name]:e.target.value
}))
console.log('INPUTS', inputs)
console.log('ERRORS', errors)
  }

  function handleSubmit(e){
    
    e.preventDefault()
    console.log('GFDHFD')
    if(!inputsError.some(inp=>errors.hasOwnProperty(inp))&&inputs.name.length>0){
      console.log('ASDASDD')
    const location = {
      country: inputs.country,
      street_name: inputs.street_name,
      street_number: inputs.street_number,
      zip_code: inputs.zip_code
    }
    const input = {
      name: inputs.name,
      surname: inputs.surname,
      phone: inputs.phone,
    }
    localStorage.setItem('location', JSON.stringify(location) )
    localStorage.setItem('input', JSON.stringify(input) )
    setInfoCompleted(true)
    console.log('26151')
    }
  }

  

  return (
    <Box
    sx={{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        marginTop:3,
    }}
    >
        <Box sx={{ width: '80%' }}>
        <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
        <React.Fragment>
            {activeStep===0?
            <Grid container xs={12} >
                <Grid container xs={9}
                style={{
                    backgroundColor:'aquamarine',
                    padding:30,
                    borderRadius:'20px',
                    marginTop:20,
                }}
                >
                    <Grid xs={12}>
                        <Typography
                        style={{
                            fontSize:25,
                            marginBottom:25,
                        }}
                        >Compra mas rapido y facil</Typography>
                        <Typography
                        style={{
                            fontSize:13,
                        }}
                        >Para continuar tu compra Logueate con tu cuenta.</Typography>
                        <Typography
                        style={{
                            fontSize:13,
                            marginBottom:30,
                        }}
                        >En caso de no estar regisgtrado, podrás hacerlo al intentar loguearte.</Typography>  
                    </Grid>
                    <Grid container xs={12}>
                        <Grid container xs={6}>
                            {/* <Grid xs={12}>
                            <Typography>Correo electronico:</Typography>  
                            </Grid>
                            
                            <TextField
                            label="Email" variant="standard"
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField> */}
                            <SubmitButton onClick={loginWithPopup}>Loguearse</SubmitButton>
                        </Grid>
                        <Grid xs={6}>
                            <Box>

                            </Box>

                        </Grid>

                    </Grid>

                </Grid>
            </Grid>
            : activeStep===1?
            <Grid container xs={12} >
                <Grid container xs={9}
                style={{
                    backgroundColor:'aquamarine',
                    padding:30,
                    borderRadius:'20px',
                    marginTop:20,
                }}
                >
                    <Grid xs={12}>
                        <Typography
                        style={{
                            fontSize:25,
                            marginBottom:25,
                        }}
                        >Completa tus datos para continuar</Typography>
                          
                    </Grid>
                    <Grid container xs={12}>
                        <Grid container xs={6}
                        style={{
                          display:'flex',
                          alignContent:'flex-start'
                        }}
                        >
                            <Grid xs={12}>
                            <Typography>Nombre</Typography>  
                            </Grid>
                            {errors.name?
                              <TextField
                              name='name'
                              value={inputs.name}
                              variant="standard"
                              // label={localStorage.getItem('auth0')?`${JSON.parse(localStorage.getItem('auth0')).name}`:'Nombre'}
                              onChange={handleChange}
                              helperText={errors.name}
                              style={{
                                  width:400,
                                  marginBottom: 30,
                              }}
                              ></TextField>
                            :
                            <TextField
                            name='name'
                            value={inputs.name}
                            variant="standard"
                            // label={localStorage.getItem('auth0')?`${JSON.parse(localStorage.getItem('auth0')).name}`:'Nombre'}
                            onChange={handleChange}
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField>
                            }
                            
                          <Grid xs={12}>
                            <Typography>Apellido</Typography>  
                            </Grid>
                            {errors.surname?
                            <TextField
                            label="Apellido" variant="standard"
                            name='surname'
                            value={TextField.name}
                            onChange={handleChange}
                            helperText={errors.surname}
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField>
                            :
                            <TextField
                            label="Apellido" variant="standard"
                            name='surname'
                            value={TextField.name}
                            onChange={handleChange}
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField>
                            }
                            
                            <Grid xs={12}>
                            <Typography>Telefono</Typography>  
                            </Grid>
                            {errors.phone?
                            <TextField
                            name='phone'
                            value={TextField.name}
                            onChange={handleChange}
                            label="Telefono" variant="standard"
                            helperText={errors.phone}
                            type='number'
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField>
                            :
                            <TextField
                            name='phone'
                            value={TextField.name}
                            type='number'
                            onChange={handleChange}
                            label="Telefono" variant="standard"
                            // helperText='Debe ser de 8 digitos'
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField>
                            }
                            
                          </Grid>
                          
                          <Grid container xs={6}
                          style={{
                            display:'flex',
                            alignContent:'flex-start'
                          }}
                          >
                            <Grid xs={12}>
                            <Typography>Pais</Typography>  
                            </Grid>
                            {errors.country?
                            <TextField
                            name='country'
                            value={TextField.name}
                            onChange={handleChange}
                            label="Pais" variant="standard"
                            helperText={errors.country}
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField>
                            :
                            <TextField
                            name='country'
                            value={TextField.name}
                            onChange={handleChange}
                            label="Pais" variant="standard"
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField>
                            }
                            
                            <Grid xs={12}>
                            <Typography>Calle</Typography>  
                            </Grid>
                            {errors.street_name?
                            <TextField
                            name='street_name'
                            value={TextField.name}
                            onChange={handleChange}
                            label="Ej: 9 de Julio..." variant="standard"
                            helperText={errors.street_name}
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField>
                            :
                            <TextField
                            name='street_name'
                            value={TextField.name}
                            onChange={handleChange}
                            label="Ej: 9 de Julio..." variant="standard"
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField>
                            }
                            <Grid xs={12}>
                            <Typography>Altura</Typography>  
                            </Grid>
                            {errors.street_number?
                            <TextField
                            name='street_number'
                            value={TextField.name}
                            onChange={handleChange}
                            label="Ej: 3700..." variant="standard"
                            type='number'
                            helperText={errors.street_number}
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField>
                            :
                            <TextField
                            name='street_number'
                            value={TextField.name}
                            onChange={handleChange}
                            type='number'
                            label="Ej: 3700..." variant="standard"
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField>
                            }                            
                            <Grid xs={12}>
                            <Typography>Codigo Postal</Typography>  
                            </Grid>
                            {errors.zip_code?
                            <TextField
                            name='zip_code'
                            value={TextField.name}
                            onChange={handleChange}
                            type='number'
                            helperText={errors.zip_code}
                            label="Ej: 1111" variant="standard"
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField>
                            :
                            <TextField
                            name='zip_code'
                            value={TextField.name}
                            onChange={handleChange}
                            label="Ej: 1111" variant="standard"
                            type='number'
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField>
                            }
                            
                          </Grid> 
                            
                            
                            
                          </Grid>
                        
                        {/* <SubmitButton onClick={handleSubmit}>Continuar</SubmitButton> */}
                        {inputs.name&&!inputsError.some(inp=>errors.hasOwnProperty(inp))?
                        <SubmitButton onClick={handleSubmit}>Continuar</SubmitButton>
                          :
                        <SubmitButton
                          style={{
                          opacity: 0.33,
                          pointerEvents:'none'
                          }}
                        >Continuar</SubmitButton>
                         }
                    </Grid>

                    <Grid container xs={2}
                    style={{
                      margin:10,
                      marginTop:25
                    }}
                    >
                      <Cart cart={cartItems}
                      
                      />
                    </Grid>
                </Grid>
            
            : activeStep===2?
            <Grid container xs={12} >
                <Grid container xs={9}
                style={{
                    backgroundColor:'aquamarine',
                    padding:30,
                    borderRadius:'20px',
                    marginTop:20,
                    height:500,
                }}
                >
                    
                        <MercadoPago/>
                        <Paypal />
                        <Stripe />
                    
                    </Grid>
                    <Grid container xs={2}
                    style={{
                      margin:10,
                      marginTop:25,
                      
                    }}
                    >
                      <Cart cart={cartItems}
                      />
                    </Grid>
                </Grid>
            :
            null
            }
          
        </React.Fragment>
    </Box>
    </Box>
    
  );
}