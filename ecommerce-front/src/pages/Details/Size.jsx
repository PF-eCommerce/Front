import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {obj} from "../../utils/data/productDetail";

const Size = ({arrSize}) => {
    const talles = () => arrSize.map(s => {
        return(
            <Typography sx={{
                backgroundColor: "#1F3116",
                color: "white",
                width: "40px",
                height: "33px",
                borderRadius: "30px",
                textAlign: "center",
                paddingTop: "7px",
                marginRight: "10px"
                }}
            >
                {s}
            </Typography>
        )
    })
    return (
        <Box sx={{display: "flex"}}>
            {talles()}
        </Box>
    )
}

export default Size;