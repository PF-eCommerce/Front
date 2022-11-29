import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, styled, Typography } from "@mui/material";
import React from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch } from "react-redux";
import { editOrder } from "../../../../redux/actions/adminAction";

const ButtonEdit = styled(Button)({
    backgroundColor: "#94744F",
    color: "white",
    marginLeft: "30px",
    marginTop: "30px",
    "&:hover": {
        backgroundColor: "#624D34",
    }
})
const Gear = styled(SettingsIcon)({
    color: "white",
})
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ChangeOrder({ datos }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [entrega, setEntrega] = React.useState(datos.isDelivered);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setEntrega(event.target.value);
    };
    const handleSubmitChange = () => {
        entrega === '' ? alert("Por favor complete el campo vacio") :
            dispatch(editOrder(datos._id, { isDelivered: entrega }))
        // console.log(datos._id, {isDelivered: entrega})
    }
    const handleSubmitDelete = () => {
        dispatch(deleteOrder())
    }

    return (
        <Box>
            <ButtonEdit onClick={handleOpen}>
                <Gear />
                Editar
            </ButtonEdit>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Entrega
                    </Typography>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={entrega}
                            label="entrega"
                            onChange={handleChange}
                        >
                            <MenuItem value={true}>Entregado</MenuItem>
                            <MenuItem value={false}>Pendiente</MenuItem>
                        </Select>
                    </FormControl>
                    <ButtonEdit onClick={handleSubmitChange}>Aceptar cambios</ButtonEdit>
                    <ButtonEdit onClick={handleSubmitDelete}>Eliminar orden</ButtonEdit>
                </Box>
            </Modal>
        </Box>
    )
}