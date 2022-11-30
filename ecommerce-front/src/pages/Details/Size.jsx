import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Size = ({ arrSize, sizeAr }) => {
    console.log('ARRAYSIZE', arrSize)
    console.log('SIZEARR', sizeAr)
    const talles = () => {
        if(!arrSize&&!sizeAr){
            console.log('NO EXISTEN');
            <Typography></Typography>
        } else if (arrSize){
            console.log('EXISTE1')
            arrSize.map((s, i) => {
                return (
                    <p>asd</p>
                    // <Typography key={i} sx={{
                    //     backgroundColor: "#1F3116",
                    //     color: "white",
                    //     width: "40px",
                    //     height: "33px",
                    //     borderRadius: "30px",
                    //     textAlign: "center",
                    //     paddingTop: "7px",
                    //     marginRight: "10px",
                    // }}
                    // >
                    //     {s}
                    // </Typography>
                )
            })
        } else{
            console.log('EXISTE2')
        }
        // return !arrSize ? <Typography></Typography> : arrSize.map((s, i) => {
        //     return (
        //         <Typography key={i} sx={{
        //             backgroundColor: "#1F3116",
        //             color: "white",
        //             width: "40px",
        //             height: "33px",
        //             borderRadius: "30px",
        //             textAlign: "center",
        //             paddingTop: "7px",
        //             marginRight: "10px",
        //         }}
        //         >
        //             {s}
        //         </Typography>
        //     )
        // })
    }
    return (
        <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "start" }, marginBottom: "20px" }}>
            {/* {talles()} */}
            {arrSize?
            arrSize.map((s, i)=>{
                return(
                <Typography key={i} sx={{
                        backgroundColor: "#1F3116",
                        color: "white",
                        width: "40px",
                        height: "33px",
                        borderRadius: "30px",
                        textAlign: "center",
                        paddingTop: "7px",
                        marginRight: "10px",
                    }}
                    >
                        {s}
                    </Typography>
                )
            })
            :
            sizeAr?.map((s, i)=>{
                return(
                <Typography key={i} sx={{
                        backgroundColor: "#1F3116",
                        color: "white",
                        width: "40px",
                        height: "33px",
                        borderRadius: "30px",
                        textAlign: "center",
                        paddingTop: "7px",
                        marginRight: "10px",
                    }}
                    >
                        {s}
                    </Typography>
                )
            })
            }
        </Box>
    )
}

export default Size;