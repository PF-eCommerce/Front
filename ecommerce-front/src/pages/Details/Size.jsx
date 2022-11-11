import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Size = ({arrSize}) => {
    const talles = () => arrSize.map((s, i) => {
        return(
            <Typography key={i} sx={{
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