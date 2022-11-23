import { Button, Modal, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ButtonAction = styled(Button)({
    backgroundColor: "#94744F",
    color: "white",
    "&:hover": {
        backgroundColor: "#4C4034"
    }
})

export default function UserAction({ datos }) {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSetAdmin = () => {
        // dispatch()
        console.log("Este boton da privilegios de administrador")
    }

    const AdminWindows = styled('div')({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        backgroundColor: "white",
        paddingBottom: "20px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
    })
    const Title = styled(Typography)({
        width: "100%",
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "400",
        paddingTop: "30px"
    })
    const SubTitle = styled(Typography)({
        width: "100%",
        textAlign: "center"
    })
    const Verified = styled(SubTitle)({
        fontWeight: "500"
    })


    return (
        <Box>
            {!datos.admin ? <ButtonAction onClick={handleOpen}>
                Editar
            </ButtonAction> : 
            <Button disabled variant="contained">Denegado</Button>}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <AdminWindows>
                    <Title>Informacion de usuario</Title>
                    <SubTitle>{datos.userName}</SubTitle>
                    <SubTitle>{datos.email}</SubTitle>
                    <Title>Estado</Title>
                    <Verified sx={datos.confirmed ? {color:"green"} : {color:"red"}}>
                        {datos.confirmed ? "Verificado" : "No verificado"}
                    </Verified>
                    <Title>Acciones</Title>
                    <ButtonAction onClick={handleSetAdmin}>Promover a Administrador</ButtonAction>
                </AdminWindows>
            </Modal>
        </Box>
    )
}