import { Box, Divider, ListItemButton, Typography } from "@mui/material";
import React from "react";
import CheckBoxGenero from "./CheckBoxGenero"
import CheckBoxColors from "./CheckBoxColors"
import FilterCategory from "./FilterCategory"
import { addFavorites,showFavorites } from "../../../redux/actions/productsAction";
import { useDispatch, useSelector } from "react-redux";
import {filterRating} from "../../../redux/actions/productsAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export default function FilterSide(){

    const dispatch = useDispatch()
    const favorites = useSelector(state=>state?.product.favorites)

    function filterFavorites(e){
        e.preventDefault()
        dispatch(addFavorites(JSON.parse(localStorage.getItem('favorite'))))
        
    }

    function handleRating(e){
        e.preventDefault()
        dispatch(filterRating())
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
             <ListItemButton component="a"
             onClick={handleRating} >
                 <Typography>Con mas Rating</Typography>
             </ListItemButton> 
             <ListItemButton component="a" 
             onClick={filterFavorites}
             >
                 <Typography
                 style={{
                    display: 'flex',
                    justifyContent:'center',
                    alignItems:'center',
                 }}
                 >Favoritos<FavoriteBorderIcon/></Typography>
             </ListItemButton>   
             <ListItemButton component="a" >
                 <Typography>Mexico vs Argentina</Typography>
             </ListItemButton>        
               
                 
           
            
                
           {/* <Typography>Lo mas Comprado</Typography>
                 <Typography>Con mas Reviews</Typography> */}
            

        </Box>
    )
}