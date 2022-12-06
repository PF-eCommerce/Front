import { styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import Action from "./action";
import {getAllProductsNoPaginate } from "../../../../redux/actions/productsAction";

const CheckTrue = styled(CheckCircleOutlineIcon)({
    color: "green",
})
const CheckFalse = styled(HighlightOffIcon)({
    color: "red"
})
const Container = styled('div')({
    width: "90%",
    height: "635px",
    display:"flex",
    boxShadow:"0px 0px 5px black",
    borderRadius:"5px"
})

const columns = [
    { field: "id", headerName: "id", width: 200 },
    { field: "title", headerName: "Titulo", width: 250 },
    { field: "price", headerName: "Precio", width: 250 },
    {
        field: "img",
        type : "image",
        headerName: "Imagen",
        width: 85,
        renderCell: (params) => <img style={{width : '50px', height: '50px'}} src={params.value}/>,
       
    },

    {
        field: "inStock",
        headerName: "Stock",
        width: 65,
        renderCell: (params) => {
            return params.row.inStock? <CheckTrue /> : <CheckFalse />
        }
    },
    { 
        field: "action", 
        headerName: "Action", 
        width: 105,
        renderCell: (params) => {
          
            return <Action datos={params.row} />
        }
    },
];

export default function Data(){
    const products = useSelector((state) => state.product?.allProductsNoLimit)
     
    
    const dispatch = useDispatch();

    useEffect(() => {
        
        
            dispatch(getAllProductsNoPaginate())
        
         
         
    }, [dispatch])
   
    return(
        <Container>
            {products ? <DataGrid
                rows={products}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection={false}
                sx={{
                    backgroundColor: "white",
                }}
            /> : null}
        </Container>
    )
}