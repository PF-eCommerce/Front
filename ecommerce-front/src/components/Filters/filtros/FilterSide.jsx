import { Box, Divider, ListItemButton, Typography } from "@mui/material";
import React from "react";
import CheckBoxGenero from "./CheckBoxGenero"
import CheckBoxColors from "./CheckBoxColors"
import FilterCategory from "./FilterCategory"
import { addFavorites,showFavorites } from "../../../redux/actions/productsAction";
import { useDispatch, useSelector } from "react-redux";


export default function FilterSide(){

    const dispatch = useDispatch()
    const favorites = useSelector(state=>state?.product.favorites)

    function filterFavorites(e){
        e.preventDefault()
        dispatch(addFavorites(JSON.parse(localStorage.getItem('favorite'))))
        // const favoritos = (JSON.parse(localStorage.getItem('favorite'))).map(elem=>{
        //     dispatch(addFavorites(elem))
        // })
    }
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
             <ListItemButton component="a" 
             onClick={filterFavorites}
             >
                 <Typography>Favoritos</Typography>
             </ListItemButton>   
             <ListItemButton component="a" >
                 <Typography>Mexico vs Argentina</Typography>
             </ListItemButton>        
               
                 
           
            
                
           {/* <Typography>Lo mas Comprado</Typography>
                 <Typography>Con mas Reviews</Typography> */}
            

        </Box>
    )
}