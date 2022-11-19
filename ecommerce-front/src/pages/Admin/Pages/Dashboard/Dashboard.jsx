import { Box } from "@mui/system";
import React from "react";
import Users from "./Users";

export default function Dashboard(){
    return(
        <Box sx={{width: "85%"}}>
            <Users />
        </Box>
    )
}