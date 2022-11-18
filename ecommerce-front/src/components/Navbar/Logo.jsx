import React from "react";
import logo from "../../assets/images/Trés_bien__2_-removebg-preview.png"
import { Link } from "@mui/material";



const Logo = ()=>{
    return (
        <div>
        <Link href="/">
           <img src={logo} width="90rem" />
        </Link>
        </div>
    )
}
// 
export default Logo