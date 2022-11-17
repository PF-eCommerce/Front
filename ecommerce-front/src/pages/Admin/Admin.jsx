import { Box } from "@mui/system";
import React from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

export default function Admin(){
    return(
        <Box sx={{backgroundColor:"#DBD0C4", paddingTop:"20px"}}>
            <Sidebar />
        </Box>
    )
}