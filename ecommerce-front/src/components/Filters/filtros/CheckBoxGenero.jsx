import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/system';

export default function CheckboxLabels() {


    // const myCheckbox = styled(Checkbox)(({theme})=>({
       
    //     backgroundColor:"#F9F3EE",
        
       
        
    //   }))
  return (
    <FormGroup >
    <Box  sx={{display:"flex"}} >
      <FormControlLabel  control={<Checkbox  />} label="Hombre" />
      <FormControlLabel control={<Checkbox  />} label="Mujer" />
    
    </Box>
    </FormGroup>
  );
}