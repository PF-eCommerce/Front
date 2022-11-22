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
import Paypal from '../../../utils/Paypal';


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
    let productArray = [{
      name: 'vestido',
      count: 1,
      image: 'not valid',
      price: 100,
      _id: '637695d20cf126c6d70830ae'
    }]
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
                        <ImageButton
                        name="Stripe"
                        // onClick={paypal}
                        style={{
                          backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png)`,
                          height: "150px",
                          width: "65%",
                          borderRadius: "25px",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center center",
                        }}
                        ></ImageButton>
                        <ImageButton
                        name="Paypal"
                        onClick={paypal}
                        style={{
                          backgroundImage: `url(data:image/png;base64,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)`,
                          height: "150px",
                          width: "65%",
                          borderRadius: "25px",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center center",
                        }}
                        ></ImageButton>
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