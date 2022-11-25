import { Box, styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../../redux/actions/adminAction";
import OrdersAction from "./OrdersAction";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'Usuario', width: 130 },
    { field: 'status', headerName: 'Estado', width: 130 },
    { field: 'payment', headerName: 'Metodo', width: 130 },
    { field: 'price', headerName: 'Monto', width: 130 },
    { field: 'delivered', headerName: 'Entregado', width: 130 },
    {
        field: 'userAction',
        headerName: 'Ordenes del usuario',
        description: 'No se puede ordenar esta columna',
        sortable: false,
        width: 160,
        renderCell: (params) => {
            // console.log(params.row)
            return <OrdersAction datos={params.row} text={"Ver"} action={"user"} />
        }
        
    },
    {
        field: 'orderAction',
        headerName: 'Detalles de orden',
        description: 'No se puede ordenar esta columna',
        sortable: false,
        width: 160,
        renderCell: (params) => {
            // console.log(params.row)
            return <OrdersAction datos={params.row} text={"Editar"} action={"order"} />
        }
        
    },
];

const Container = styled(Box)({
    width: "100%",
    height: "650px",
    display:"flex",
    boxShadow:"0px 0px 5px black",
    borderRadius:"5px",
    backgroundColor:"white"
})

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