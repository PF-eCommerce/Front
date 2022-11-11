import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Colors = ({arrColors}) => {
    const colors = () => {
        return arrColors.map((c, i) => {
            return <Typography key={i} sx={{
                backgroundColor: c,
                width: "30px",
                height: "30px",
                boxShadow: "0px 0px 5px black",
                borderRadius: "30px",
                marginRight: "10px"
            }}
            ></Typography>
        })
    }
    return(
        <Box sx={{display:"flex"}}>
            {colors()}
        </Box>
    )
}

export default Colors;