import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/system';
import {useDispatch} from "react-redux"
import {filterBygenero} from "../../../redux/actions/productsAction.js"

export default function CheckboxLabels() {


  const [men, setMen] = React.useState(true);
  const [woman, setWomen] = React.useState(true)

  const dispatch = useDispatch()



    // const myCheckbox = styled(Checkbox)(({theme})=>({
       
    //     backgroundColor:"#F9F3EE",
        
       const handleChange = (data) => {
          if(data=="men"){
            if(men==true){
              console.log(data)
              dispatch(filterBygenero(data))
              setMen(!men)
                
            }
          }
         
          if(data=="woman"){
            if(woman==true){
              console.log(data)
              dispatch(filterBygenero(data))
              setWomen(!woman)
            }
          }
       }
        
    //   }))
  return (
    <FormGroup >
    <Box  sx={{display:"flex"}} >
      <FormControlLabel onChange={(e)=>handleChange("men")}  control={<Checkbox value={men}
     
     inputProps={{ 'aria-label': 'controlled' }}/>} label="Hombre"
     />
      <FormControlLabel onChange={(e)=>handleChange("woman")}  control={<Checkbox  value={woman}
     />} label="Mujer" />
    
    </Box>
    </FormGroup>
  );
}