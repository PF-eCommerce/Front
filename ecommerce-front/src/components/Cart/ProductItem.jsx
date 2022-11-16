import React from "react";
import {Typography,Box} from "@mui/material"
// import Box from "@mui/material";



const ProductItem = ({id,name,image}) => {
    return (
        <div>
            <Box>
                <Typography variant="body1" color="initial">{id}</Typography>
                <Typography variant="body1" color="initial">{name}</Typography>
                <img src={image} width="80rem"/>
            </Box>
        </div>
    )
}

export default ProductItem