import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, inputAdornmentClasses, TextField } from '@mui/material';
import { styled } from "@mui/material/styles";
import axios from "axios";
import {auth0User} from "../../../redux/actions/userAction";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { orderProduct } from '../../../redux/actions/productsAction';
import Paypal from "./Paypal/Paypal";
import Stripe from "./Stripe/Stripe"
import Sumas from '../../../components/Cart/Sumas';


const ImageButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  // fontSize: 20,
  padding: "6px 12px",
  // border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: "aquamarine",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
    opacity: "0.7",
    transform: "scale(1.05)",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const steps = ['Carro', 'Entrega', 'Pago'];
// const mp = new MercadoPago('TEST-2b431a09-2059-4817-981a-382d3a6af349')

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

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const { loginWithRedirect, logout, isAuthenticated, getAccessTokenSilently, loginWithPopup } = useAuth0();
  const userLocalStorage = JSON.parse(localStorage.getItem("auth0"));
  const dispatch = useDispatch()
  // const [user, setUser] = React.useState(userLocalStorage);
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
  console.log('CARTITEMS', cartItems)
  const productArray = cartItems.map(el=>{
    return{
      name: el.title,
      count: el.qty,
      image: el.img&&el.img[0],
      price: el.price,
      _id: el._id
    }
  })
  
  

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

  React.useEffect(() => {
    if (isAuthenticated && localStorage.getItem("auth0") === null) {
      callApiProtected();
    } else if (isAuthenticated && localStorage.getItem("auth0")!== null && infoCompleted===false) {
      setActiveStep(1)
    } else if (isAuthenticated && localStorage.getItem("auth0")!== null && infoCompleted===true){
      setActiveStep(2)
    }
  });


  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
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
  }

  function handleSubmit(e){
    
    e.preventDefault()
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
  }

  function linkMP(e){
    e.preventDefault()
    // let productArray = JSON.parse(localStorage.getItem('productArray'))
    // let productArray = [{
    //   name: 'vestido',
    //   count: 1,
    //   image: 'not valid',
    //   price: 100,
    //   _id: '637695d20cf126c6d70830ae'
    // }]
    console.log ('PRODUCTARRAY', productArray)
    let id = JSON.parse(localStorage.getItem('auth0'))._id
    let location = JSON.parse(localStorage.getItem('location'))
    let input = JSON.parse(localStorage.getItem('input'))
    console.log('ID', id)
    console.log('LOCATION', location)
    console.log('INPUT', input)
    
    dispatch(orderProduct(productArray, id, location, input))
  }
  function paypal(e){
    e.preventDefault()
    Paypal()
  }

  

  return (
    <Box
    sx={{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        marginTop:10,
    }}
    >
        <Box sx={{ width: '80%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
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
                        >Para continuar tu compra ingresa tu correo electrónico.</Typography>
                        <Typography
                        style={{
                            fontSize:13,
                            marginBottom:30,
                        }}
                        >Recuerda que si eres cliente CMRElitey pagas con tu tarjeta tienes 3 despachos gratis al mes. Revisa las condiciones.</Typography>  
                    </Grid>
                    <Grid container xs={12}>
                        <Grid container xs={6}>
                            <Grid xs={12}>
                            <Typography>Correo electronico:</Typography>  
                            </Grid>
                            
                            <TextField
                            label="Email" variant="standard"
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField>
                            <SubmitButton onClick={loginWithPopup}>Continuar</SubmitButton>
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
                            <TextField
                            name='name'
                            value={TextField.name}
                            variant="standard"
                            // placeholder={localStorage.getItem('auth0')?`${JSON.parse(localStorage.getItem('auth0')).name}`:null}
                            label={localStorage.getItem('auth0')?`${JSON.parse(localStorage.getItem('auth0')).name}`:'Nombre'}
                            onChange={handleChange}
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField>
                          <Grid xs={12}>
                            <Typography>Apellido</Typography>  
                            </Grid>
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
                            <Grid xs={12}>
                            <Typography>Telefono</Typography>  
                            </Grid>
                            <TextField
                            name='phone'
                            value={TextField.name}
                            onChange={handleChange}
                            label="Telefono" variant="standard"
                            helperText='Debe ser de 8 digitos'
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField>
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
                            <Grid xs={12}>
                            <Typography>Calle y Altura</Typography>  
                            </Grid>
                            <TextField
                            name='street_name'
                            value={TextField.name}
                            onChange={handleChange}
                            label="Ej: 9 de Julio 335..." variant="standard"
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField>
                            <Grid xs={12}>
                            <Typography>Dpto/Casa/Oficina</Typography>  
                            </Grid>
                            <TextField
                            name='street_number'
                            value={TextField.name}
                            onChange={handleChange}
                            label="Ej: casa, oficina..." variant="standard"
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField>
                            <Grid xs={12}>
                            <Typography>Codigo Postal</Typography>  
                            </Grid>
                            <TextField
                            name='zip_code'
                            value={TextField.name}
                            onChange={handleChange}
                            label="Ej: 1111" variant="standard"
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField>
                          </Grid> 
                            
                            
                            
                          </Grid>
                        
                        <SubmitButton onClick={handleSubmit}>Continuar</SubmitButton>
                    </Grid>

                    <Grid container xs={2}
                    style={{
                      margin:10,
                      marginTop:60
                    }}
                    >
                      <Sumas cart={cartItems}
                      
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
                }}
                >
                    
                        <ImageButton
                        name="MercadoPago"
                        onClick={linkMP}
                        style={{
                          backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUb3s6MFqaj8sB3k4bBzVaiR9exgjoKY1DQ&usqp=CAU)`,
                          height: "150px",
                          width: "65%",
                          borderRadius: "25px",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center center",
                        }}
                        ></ImageButton>
                        <Paypal />
                        <Stripe />
                    <script src="https://sdk.mercadopago.com/js/v2"></script>
                    </Grid>

                </Grid>
            :
            null
            }
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
    </Box>
    
  );
}