import * as React from 'react';
import {FormGroup,Box} from '@mui/material/';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Checkbox} from '@mui/material/';

export default function CheckboxLabels() {
  return (
    <FormGroup>
    
    
          <FormControlLabel control={<Checkbox sx={{ color:"red"}} />} label="Rojo" />
          <FormControlLabel control={<Checkbox sx={{ color:"black"}}/>} label="Negro" />
          <FormControlLabel control={<Checkbox />} label="Blanco" />
          <FormControlLabel control={<Checkbox  sx={{ color:"blue"}}/>} label="Azul" />
    
   
    </FormGroup>
  );
}