import { Button, styled } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { getAllUsers } from "../../../../redux/actions/adminAction";

const CheckTrue = styled(CheckCircleOutlineIcon)({
    color: "green",
})
const CheckFalse = styled(HighlightOffIcon)({
    color: "red"
})
const Container = styled('div')({
    width: "90%",
    height: "635px",
    display:"flex"
})

const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "userName", headerName: "Usuario", width: 250 },
    { field: "email", headerName: "Email", width: 250 },
    {
        field: "confirmed",
        headerName: "Verificado",
        width: 85,
        renderCell: (params) => {
            return params.row.confirmed ? <CheckTrue /> : <CheckFalse />
        }
    },
    {
        field: "admin",
        headerName: "Admin",
        width: 65,
        renderCell: (params) => {
            return params.row.admin ? <CheckTrue /> : <CheckFalse />
        }
    },
    { 
        field: "action", 
        headerName: "Action", 
        width: 80,
        renderCell: (params) => {
            return <Button variant="contained">Editar</Button>
        }
    },
];

export default function DataGridX(){
    const info = useSelector((state) => state.admin.users)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    return(
        <Container>
            {info ? <DataGrid
                rows={info}
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