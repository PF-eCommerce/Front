import { Button, Typography} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import {addToCart} from "../../redux/actions/cartAction"
import { selectSize, deleteSize } from "../../redux/actions/cardAction";
import Modal from '@mui/material/Modal';
import Grid from "@mui/material/Unstable_Grid2";
import CardMedia from '@mui/material/CardMedia';
import { SizeButton, SubmitButton} from "../../components/Styled/StyledButtons";
import { useEffect } from "react";
import { closeChildModal, closeNestModal } from "../../redux/actions/modalsAction";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  let sizeObj = {}
  let sizeArr =[]
  let stock = ''
export function ChildModal() {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
      setQty(1)
      
    };
    
    const product = useSelector((state) => state.product.detail)
    
    
    const sizee = useSelector(state=> state?.card.size)
    
    
    const [qty, setQty] = React.useState(1)
    const navigate = useNavigate()
  
    function handleClick(e){
      e.preventDefault()
      
      if(e.target.value==='less'){
        if (qty>1){
          setQty(qty-1)
        }
      } else if(e.target.value==='add'){
        
        if(qty<stock){
          setQty(qty+1)
        }
      }
    }
    
  if (product.size&&!Array.isArray(product.size)){
    sizeObj ={
      XS: product.size.extraSmall>0&&product.size.extraSmall,
      S: product.size.small>0&&product.size.small,
      M: product.size.medium>0&&product.size.medium,
      L: product.size.large>0&&product.size.large,
      XL: product.size.extraLarge>0&&product.size.extraLarge,
      36: product.size.num36>0&&product.size.num36,
      37: product.size.num37>0&&product.size.num37,
      38: product.size.num38>0&&product.size.num38,
      39: product.size.num39>0&&product.size.num39,
      40: product.size.num40>0&&product.size.num40,
      41: product.size.num41>0&&product.size.num41,
      42: product.size.num42>0&&product.size.num42,
      43: product.size.num43>0&&product.size.num43
    }
    stock = sizeObj[sizee]
     console.log('STOCK', stock)
  
  }else if(product.size&&Array.isArray(product.size)){
    stock = product.numStock
  }else if(product.size===undefined){
    stock = product.numStock
  }

  let producto = {
    ...product,
    qty,
    sizee,
    stock,
  }
    function sendToCart(e){
      dispatch(addToCart(producto))
      dispatch(deleteSize())
      navigate('/cart')
    }

    function continueShopping(e){
      e.preventDefault()
      dispatch(addToCart(producto))
      dispatch(deleteSize())
      setOpen(false);
      dispatch(closeChildModal())
    }
  
    return (
      <React.Fragment>
        <Button onClick={handleOpen}>Elije tus opciones</Button>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Grid container
          sx={{ ...style, width: 700 }}
          >
            <Grid xs={12}
            style={{margin:10}}
            >
            <h3 id="parent-modal-title">Lo que llevas en tu carro</h3>
            </Grid>
            <Grid container xs={12}>
              <Grid xs={2}
              style={{margin:10}}
              >
              <CardMedia
              component="img"
              height="280"
              image={product&&product.img?.[0]}
              style={{
                height:'80px',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundAttachment: 'fixed'
              }}
                />
              </Grid>
              <Grid xs={3}
              style={{
                width:'60px',
                margin:10}}
              >
                <p>{product.title}, Talle: {sizee&&sizee}</p>
              </Grid>
              <Grid xs={1.2}
              style={{
                margin:10}}
              >
                <p>${product.price}</p>
              </Grid>
              <Grid xs={5}
              style={{
                margin:10}}
              >
                <Grid xs={12}
                style={{
                  display:'flex',
                  alignItems:'center',
                  }}
                >
                  <SizeButton
                  value={'less'}
                  onClick={handleClick}
                  >-</SizeButton>
                  <p>{qty}</p>
                  <SizeButton
                  value={'add'}
                  onClick={handleClick}
                  >+</SizeButton>
                  <p>Máximo {stock} unidades</p>
                </Grid>
  
              </Grid>
  
            </Grid>
            <Grid container xs={12}
            style={{
              margin:10}}
            >
              <Grid xs={3}
              style={{
                marginLeft:230,
                display:'flex',
                alignItems:'center',
                textAlign: 'center',
                }}
              >
              <Link>
              <Typography onClick={continueShopping}>
                Agregar y seguir comprando
              </Typography>
              </Link>
              
              </Grid>
              <Grid xs={3}
              style={{
                marginLeft:20,
                }}
              >
              <SubmitButton
              onClick={sendToCart}
              style={{
                width:200
              }}
              >Ir al carro</SubmitButton>
              </Grid>
  
  
            </Grid>
  
  
          </Grid>
        </Modal>
      </React.Fragment>
    );
  }
  
export function NestedModal() {
    const [open, setOpen] = React.useState(false);
    const childClosed = useSelector(state=>state.modal.closed)
    useEffect(()=>{
      if (childClosed){
        dispatch(closeNestModal())
        setOpen(false)
      }
      
    },)
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
      dispatch(deleteSize())
    };
    const product = useSelector((state) => state.product.detail)
    const dispatch = useDispatch()
    const sizee = useSelector(state=> state?.card.size)
    
    const handleSelect = (e) =>{
      dispatch(selectSize(e.target.value))
    }

  let sizeObj = {}
  let sizeArr =[]
  if (product.size&&!Array.isArray(product.size)){
    sizeObj ={
      XS: product.size.extraSmall>0&&product.size.extraSmall,
      S: product.size.small>0&&product.size.small,
      M: product.size.medium>0&&product.size.medium,
      L: product.size.large>0&&product.size.large,
      XL: product.size.extraLarge>0&&product.size.extraLarge,
      36: product.size.num36>0&&product.size.num36,
      37: product.size.num37>0&&product.size.num37,
      38: product.size.num38>0&&product.size.num38,
      39: product.size.num39>0&&product.size.num39,
      40: product.size.num40>0&&product.size.num40,
      41: product.size.num41>0&&product.size.num41,
      42: product.size.num42>0&&product.size.num42,
      43: product.size.num43>0&&product.size.num43
    }
    for (let key in sizeObj){
      if(sizeObj[key]){
        sizeArr.push(key)
      }
      
    }
  }
   
    return (
      <div>
        <Button onClick={handleOpen}>
        <AddShoppingCartOutlinedIcon sx={{marginRight:"1rem"}} color="secondary" fontSize="large"/>
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Grid container
          sx={{ ...style, width: 600 }}
          >
            <Grid xs={12}
            style={{margin:10}}
            >
            <h3 id="parent-modal-title">Selecciona tus opciones para agregar el producto al carro</h3>
            </Grid>
            <Grid container xs={12}>
              <Grid xs={2}
              style={{margin:10}}
              >
              <CardMedia
              component="img"
              height="280"
              image={product&&product.img?.[0]}
              style={{
                height:'80px',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundAttachment: 'fixed'
              }}
                />
              </Grid>
              <Grid container xs={6}
              style={{margin:10}}
              >
                <Grid xs={12}>
                  <h3>{product.title}</h3>
                </Grid>
                <Grid xs={12}>
                  <p>descripcion resumida</p>
                </Grid>
              </Grid>
              <Grid container xs={2}
              style={{margin:10}}
              >
                <p>${product.price}</p>
              </Grid>
  
            </Grid>
            <Grid container xs={12}
            style={{margin:10}}
            >
              <Grid container xs={6}>
                <Grid xs={12}>
                  <p>Selecciona tu talle: {sizee&&sizee}</p>
                </Grid>
                <Grid xs={12}>
                  {product.size&&Array.isArray(product.size)?product.size.map(e=>{
                    return(
                    <SizeButton
                    value={e}
                     onClick={e=>handleSelect(e)}
                     >{e}</SizeButton>
                    )
                  })
                :
                sizeArr.map(e=>{
                  return(
                    <SizeButton
                    value={e}
                     onClick={e=>handleSelect(e)}
                     >{e}</SizeButton>
                    )
                })
                }
                </Grid>
              </Grid>
  
            </Grid>
  
            <ChildModal/>
          </Grid>
          {/* <Box sx={{ ...style, width: 400 }}>
            <h3 id="parent-modal-title">Selecciona tus opciones para agregar el producto al carro</h3>
            <p id="parent-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
            <ChildModal />
          </Box> */}
        </Modal>
      </div>
    );
  }