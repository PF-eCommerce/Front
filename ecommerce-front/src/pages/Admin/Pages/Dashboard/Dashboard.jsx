import { Box } from "@mui/system";
import React from "react";
import Orders from "./Orders";
import Users from "./Users";

export default function Dashboard(){
    return(
        <Box sx={{width: "85%"}}>
            <Users />
            <Orders />
        </Box>
    )
}