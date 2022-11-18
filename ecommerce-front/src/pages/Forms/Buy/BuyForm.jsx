import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';
import { styled } from "@mui/material/styles";


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
                            <SubmitButton>Continuar</SubmitButton>
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
                        <Grid container xs={6}>
                            <Grid xs={12}>
                            <Typography>Pais</Typography>  
                            </Grid>
                            
                            <TextField
                            label="Pais" variant="standard"
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField>
                          <Grid xs={12}>
                            <Typography>Calle y numero</Typography>  
                            </Grid>
                            <TextField
                            label="Ej: Av. 9 de Julio 123..." variant="standard"
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField>
                          </Grid>
                          <Grid container xs={6}>
                            <Grid xs={12}>
                            <Typography>Dpto/Casa/Oficina</Typography>  
                            </Grid>
                            <TextField
                            label="Ej: casa, oficina..." variant="standard"
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField>
                          </Grid> 
                            
                            
                            
                          </Grid>
                        
                        <SubmitButton>Continuar</SubmitButton>
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
                    {/* <Grid xs={12}>
                        <Typography
                        style={{
                            fontSize:25,
                            marginBottom:25,
                        }}
                        >Completa tus datos para continuar</Typography>
                          
                    </Grid>
                    <Grid container xs={12}>
                        <Grid container xs={6}>
                            <Grid xs={12}>
                            <Typography>Pais</Typography>  
                            </Grid>
                            
                            <TextField
                            label="Pais" variant="standard"
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField>
                          <Grid xs={12}>
                            <Typography>Calle y numero</Typography>  
                            </Grid>
                            <TextField
                            label="Ej: Av. 9 de Julio 123..." variant="standard"
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField>
                          </Grid>
                          <Grid container xs={6}>
                            <Grid xs={12}>
                            <Typography>Dpto/Casa/Oficina</Typography>  
                            </Grid>
                            <TextField
                            label="Ej: casa, oficina..." variant="standard"
                            style={{
                                width:400,
                                marginBottom: 30,
                            }}
                            ></TextField>
                          </Grid> 
                            
                            
                            
                          </Grid>
                        
                        <SubmitButton>Continuar</SubmitButton> */}
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