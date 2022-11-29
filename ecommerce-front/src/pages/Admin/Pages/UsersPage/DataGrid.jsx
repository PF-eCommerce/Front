import { styled } from "@mui/material";
import React, { useEffect } from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { getAllUsers } from "../../../../redux/actions/adminAction";
import UserAction from "./UserAction";

const CheckTrue = styled(CheckCircleOutlineIcon)({
    color: "green",
})
const CheckFalse = styled(HighlightOffIcon)({
    color: "red"
})
const Container = styled('div')({
    width: "100%",
    height: "635px",
    display:"flex",
    boxShadow:"0px 0px 5px black",
    borderRadius:"5px"
})
const user = JSON.parse(localStorage.getItem('auth0'));
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
        width: 105,
        renderCell: (params) => {
            // console.log(params.row)
            return <UserAction datos={params.row} superAdmin={user.admin?.includes("super")} />
        }
    },
];

console.log("datos",user)
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