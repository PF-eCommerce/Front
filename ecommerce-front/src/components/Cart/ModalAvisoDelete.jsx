import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CardMedia from '@mui/material/CardMedia';
import {deleteFromCart} from "../../redux/actions/cartAction"
import { useDispatch } from 'react-redux';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: "white",
  border: '2px solid  rgb(240, 118, 99)',
  boxShadow: 24,
  borderRadius:3,
  
  p: 4,
};

export default function BasicModal({item}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch()
  
  let title = ''
  let img = ''
  if (item){
   title = item.title
   img = item.img[0]
  }
  
  return (
    <div>
      <Button onClick={handleOpen}><DeleteForeverIcon/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CardMedia
            component="img"
            height="280"
            image={img}
            style={{
              height:'300px',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundAttachment: 'fixed'
            }}
              />
          <Typography sx={{ml:4}} id="modal-modal-title" variant="h6" component="h2">
            Borrar el producto  {title}  del Carrito?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        
            <Button
            onClick={()=>dispatch(deleteFromCart(item))}sx={{ml:6}}  variant="contained">si
            </Button>
            <Button sx={{ml:8}} variant="contained"
             onClick={handleClose}>No</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}