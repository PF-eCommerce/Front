import { Box, styled, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../../redux/actions/adminAction";
import OrdersAction from "./OrdersAction";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Container = styled(Box)({
    width: "100%",
    height: "650px",
    display: "flex",
    boxShadow: "0px 0px 5px black",
    borderRadius: "5px",
    backgroundColor: "white"
})
const Success = styled(Typography)({
    backgroundColor: "green",
    color: "white",
    padding: "5px",
    borderRadius: "10px",
    fontWeight: "bold",
})
const Pending = styled(Typography)({
    backgroundColor: "orange",
    color: "black",
    padding: "5px",
    borderRadius: "10px",
    
})
const CheckTrue = styled(CheckCircleOutlineIcon)({
    color: "green"
})
const CheckFalse = styled(HighlightOffIcon)({
    color: "red"
})

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'Usuario', width: 130 },
    {
        field: 'status',
        headerName: 'Estado',
        width: 90,
        renderCell: (params) => {
            return (
                params.row.status === "Success" ? 
                <Success>{params.row.status}</Success>
                :
                <Pending>{params.row.status}</Pending>
                )
        }
    },
    { field: 'payment', headerName: 'Metodo', width: 130 },
    { field: 'price', headerName: 'Monto', width: 130 },
    { 
        field: 'delivered', 
        headerName: 'Entregado', 
        width: 80,
        renderCell: (params) => {
            return(
                params.row.delivered ?
                <CheckTrue /> : <CheckFalse />
            )
        }
    },
    { field: 'date', headerName: 'Fecha', width: 100 },
    {
        field: 'orderAction',
        headerName: 'Detalles de orden',
        description: 'No se puede ordenar esta columna',
        sortable: false,
        width: 140,
        renderCell: (params) => {
            // console.log(params.row)
            return <OrdersAction datos={params.row} text={"Editar"} action={"order"} />
        }

    },
];

export default function OrdersTable() {
    const rows = useSelector((state) => state.admin.orders)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrders())
    }, [dispatch])

    return (
        <Container>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection={false}
            />
        </Container>
    )
}