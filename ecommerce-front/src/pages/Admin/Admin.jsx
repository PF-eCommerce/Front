import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Admin() {
    return (
        <Box sx={{ backgroundColor: "#DBD0C4", paddingTop: "20px", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            <Sidebar />
            <Outlet />
        </Box>
    )
}