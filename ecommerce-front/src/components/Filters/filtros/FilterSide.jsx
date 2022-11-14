import { Box, Divider, ListItemButton, Typography } from "@mui/material";
import React from "react";
import CheckBoxGenero from "./CheckBoxGenero"
import CheckBoxColors from "./CheckBoxColors"
import FilterCategory from "./FilterCategory"





export default function FilterSide(){


    return (
        <Box flex={1} p={2} sx={{display:{xs: "none", sm:"block"}}}>
            <Typography variant="body1">
                Genero:
            </Typography>
            <CheckBoxGenero/>
                <Divider/>
            <Typography variant="body1">
                Colores:
            </Typography>
            <CheckBoxColors/>
                <Divider/>
            <FilterCategory/>
            <ListItemButton component="a" >
                 <Typography>Lo mas Nuevo</Typography>
             </ListItemButton> 
             <ListItemButton component="a" >
                 <Typography>Lo mas Comprado</Typography>
             </ListItemButton>   
             <ListItemButton component="a" >
                 <Typography>Con mas Review</Typography>
             </ListItemButton>   
             <ListItemButton component="a" >
                 <Typography>Mexico vs Argentina</Typography>
             </ListItemButton>        
               
                 
           
            
                
           {/* <Typography>Lo mas Comprado</Typography>
                 <Typography>Con mas Reviews</Typography> */}
            

        </Box>
    )
}