import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, styled, Typography } from "@mui/material";
import React from "react";
import SettingsIcon from '@mui/icons-material/Settings';

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

export default function ChangeOrder() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

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
                            value={age}
                            label="entrega"
                            onChange={handleChange}
                        >
                            <MenuItem value={"Entregado"}>Entregado</MenuItem>
                            <MenuItem value={"Despachado"}>Despachado</MenuItem>
                            <MenuItem value={"Pendiente"}>Pendiente</MenuItem>
                        </Select>
                    </FormControl>
                    <ButtonEdit>Aceptar cambios</ButtonEdit>
                    <ButtonEdit>Eliminar orden</ButtonEdit>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Sin implementar
                    </Typography>
                </Box>
            </Modal>
        </Box>
    )
}