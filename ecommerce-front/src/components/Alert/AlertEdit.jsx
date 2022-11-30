import React from 'react'
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const AlertEdit = ({type, msg}) => {
    const [open, setOpen] = React.useState(true);
  return (
    
   
      <Box sx={{width: '90%'}}>
    <Collapse in={open}>
      <Alert
        severity= {type}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}
           
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        {msg}
      </Alert>
    </Collapse>
    <Button
      disabled={open}
      variant="outlined"
      onClick={() => {
        setOpen(true);
      }}
    >
      Abrir Mensaje
    </Button>
    </Box>
  
  
  )
}

export default AlertEdit
