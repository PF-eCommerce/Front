import { Box, Divider, ListItemButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
// import CheckBoxGenero from "./CheckBoxGenero"
// import CheckBoxColors from "./CheckBoxColors"
import FilterCategory from "./FilterCategory"
import { addFavorites,showFavorites } from "../../../redux/actions/productsAction";
import { useDispatch, useSelector } from "react-redux";
import {filterRating, filterByNews, filterBygeneroH, filterBygeneroM} from "../../../redux/actions/productsAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export default function FilterSide(){

   
    const dispatch = useDispatch()
    const favorites = useSelector(state=>state?.product.favorites)
    const productsFilter = useSelector(state=>state.product.allProductsNoLimitRemix)
    const productsFilterGeneros = useSelector(state=>state.product.allProductsNoLimitRemix)

    
  
    let nuevosProducts = []

    function dates(products){

        let fechaActual = new Date()
      
      

            products.docs.forEach(element => {
            let fechaCreacion = new Date(element.date)
            let resta = fechaActual.getTime() - fechaCreacion.getTime()
            let days= Math.round(resta/ (1000*60*60*24))
            console.log("days", days)
            if( days<=0){
                nuevosProducts.push(element)
                
            }
        return {
          
           
           nuevosProducts
        }
       
           
        });
        console.log("hey",nuevosProducts)
         
        //  let dayItem = mounth?.map(m=>m[2].split("",2).join(""))
        //  dayCreation.push(mounth)
        //  dayCreation.push(dayItem)

         
    }
    let mens =[]
    function generoMen(products){
    mens = products.docs.filter(g=>g.men===true)
       return mens
    }
    
    let woman =[]
    function generoWoman(products){
    woman = products.docs.filter(g=>g.woman===true)
       return woman
    }
    

    function filterFavorites(e){
        e.preventDefault()
        dispatch(addFavorites(JSON.parse(localStorage.getItem('favorite'))))
        
    }

    function handleRating(e){
        e.preventDefault()
        dispatch(filterRating())
    }
    function handleBuys(e){
        e.preventDefault()
        dates(productsFilter)
        dispatch(filterByNews(nuevosProducts))
    }
    function handleMen(e){
        e.preventDefault()
        generoMen(productsFilterGeneros)
        dispatch(filterBygeneroH(mens))
        
    }
    function handleWoman(e){
        e.preventDefault()
        generoWoman(productsFilterGeneros)
        dispatch(filterBygeneroM(woman))
        
    }
    return (
        <Box flex={1} p={2} sx={{display:{xs: "none", sm:"block"}}}>
            {/* <Typography variant="body1">
                Genero:
            </Typography> */}
            {/* <CheckBoxGenero/> */}
                {/* <Divider/> */}
            
            {/* <Typography variant="body1">
                Colores:
            </Typography> */}
            {/* <CheckBoxColors/> */}
                {/* <Divider/> */}
            <FilterCategory/>
            <ListItemButton component="a" 
             onClick={handleMen}>
                 <Typography>Ropa Hombre</Typography>
            </ListItemButton>
            <ListItemButton component="a" 
             onClick={handleWoman}>
                 <Typography>Ropa Mujer</Typography>
            </ListItemButton>
            <ListItemButton component="a" 
             onClick={handleBuys}>
                 <Typography>Lo mas Nuevo</Typography>
             </ListItemButton> 
             {/* <ListItemButton component="a" >
                 <Typography>Lo mas Comprado</Typography>
             </ListItemButton>    */}
             {/* <ListItemButton component="a"
             onClick={handleRating} >
                 <Typography>Con mas Rating</Typography>
             </ListItemButton>  */}
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
             {/* <ListItemButton component="a" >
                 <Typography>Mexico vs Argentina</Typography>
             </ListItemButton>        
                */}
                 
           
            
                
           {/* <Typography>Lo mas Comprado</Typography>
                 <Typography>Con mas Reviews</Typography> */}
            

        </Box>
    )
}