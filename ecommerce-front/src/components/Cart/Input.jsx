import { TextField } from "@mui/material";
import React from "react";



const Input = (numStock, count   ) =>{
    return (
        <div>
           <input type='number'
				min='1'
				max={numStock}
				value={count} />									
        </div>
    )
}


export default Input;