import { Button, Modal, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import { updateProduct } from "../../../../redux/actions/productsAction";
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const ButtonAction = styled(Button)({
    backgroundColor: "#94744F",
    color: "white",
    "&:hover": {
        backgroundColor: "#4C4034"
    }
})
const AdminWindows = styled('div')({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    borderRadius: '5px',
    boxShadow: 24,
    backgroundColor: "white",
    paddingBottom: "20px",
    display: "flex",
    justifyContent: "center",
    
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
    textAlign: "start",
    marginTop : "25px"
})
const insideBox = styled('div')({
    width: 500,
    display: "flex",
    flexDirection: "column",
  
})

const CheckTrue = styled(CheckCircleOutlineIcon)({
    color: "green",
})

const CheckFalse = styled(HighlightOffIcon)({
    color: "red"
})
export default function Action({ datos }) {
    
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [active , setActive] = useState(false)
    const [active2 , setActive2] = useState(false)
    const [active3 , setActive3] = useState(false)
    const [input, setInput] = useState({
         id : datos.id,
         title : datos.title,
         price: datos.price,
         img : datos.img,
         inStock : datos.inStock
    })

    const handleOnChange = (evt) => {
        setInput({
            ...input,
            [evt.target.name] : evt.target.value,
        
        })
    }
    const handleSetAdmin = () => {
        dispatch(updateProduct(datos.id, input))
        .then(setTimeout(()=> {
            window.location.reload()
        },500));

        setInput({})
    }

    return (
        <Box>
            <ButtonAction onClick={handleOpen}>
                Editar
            </ButtonAction> 
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <AdminWindows>
                    <insideBox>
                    <Title>Editar el Producto</Title>


                    <Box sx={{ display: 'flex', alignItems: 'center'}}>
                    <SubTitle>{datos.title}</SubTitle>
                    <Button onClick={() => setActive(!active)}><EditIcon/></Button>
                    </Box>
                    
                    {active && <TextField id="filled-basic" label={datos.title} variant="filled" name="title" value={input?.title} onChange={handleOnChange} />}

                    
                    
                   

                   <Box sx={{ display: 'flex', alignItems: 'center'}}>
                   <SubTitle>precio</SubTitle>
                   <Button onClick={() => setActive2(!active2)}><EditIcon/></Button>
                   </Box>

                   {active2 && <FilledInput
                   name="price"
            value={input?.price}
            onChange={handleOnChange}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />}
                     
                   <Box sx={{ display: 'flex', alignItems: 'center'}}>
                   <SubTitle>Imagen</SubTitle>
                   <Button onClick={() => setActive3(!active3)}><EditIcon/></Button>
                    </Box>

                    {active3 && <TextField id="filled-basic" label="imagen" variant="filled" name="img" value={input?.img} onChange={handleOnChange} />}
                    
                    <Box sx={{ display: 'flex', alignItems: 'center'}}>
                   <SubTitle>stock :</SubTitle>
                   {input?.inStock ? <CheckTrue/> : <CheckFalse/>}
                   
                    <Button onClick={() => setInput({...input, inStock: true})}>si</Button>
                    <Button onClick={() => setInput({...input, inStock: false})}>no</Button>
                    </Box>
                    <Title>Acciones</Title>
                    <ButtonAction onClick={handleSetAdmin}>Actualizar este Producto</ButtonAction>
                    </insideBox>
                </AdminWindows>
            </Modal>
        </Box>
    )
}