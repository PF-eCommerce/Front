import * as React from 'react';
import {FormGroup,Box, Button} from '@mui/material/';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Checkbox} from '@mui/material/';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {getItemColor} from "../../../redux/actions/productsAction"

export default function CheckboxLabels() {

  const [input, setInput] = useState("")
  const [checked, setChecked] = useState(false)

  const dispatch = useDispatch()

  function changeInput(e){
    e.preventDefault()
    const value = e.target.value
    
    setChecked(!checked)
    setInput(dispatch(getItemColor(value)))
   
    console.log("checked",checked)
   
  }
  
  return (
    <FormGroup onChange={(e)=>changeInput(e)}>
    
    
          <FormControlLabel disabled value={"Rojo"}control={<Checkbox  sx={{ color:"red"}} />} label="Rojo" />
          <FormControlLabel disabled value={"Negro"} control={<Checkbox value={"negro"} sx={{ color:"Black"}}/>} label="Negro" />
          <FormControlLabel disabled value={"Blanco"} control={<Checkbox />} label="Blanco" />
          <FormControlLabel disabled value={"Azul"} control={<Checkbox  sx={{ color:"blue"}}/>} label="Azul" />
          
    
   
    </FormGroup>
  );
}