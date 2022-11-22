import * as React from 'react';
import {Table,Stack, TextField, Box, Button} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';  
import Sumas from './Sumas';
import { Link } from 'react-router-dom';
import s from "./TableProducts.module.css"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {addToCart, deleteFromCart} from "../../redux/actions/cartAction"
import Input from "./Input"
import {ADD_TO_CART} from "../../redux/actions/constantes";
import {styled} from "@mui/system";
import cartReducer from './../../redux/reducers/CartReducer';


export default function BasicTable() {


    const BoxSuma = styled(Box)(({theme})=>({
        display:"inline-flex",
        gap:"5px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]:{
            display:"flex"
           }
      
      }))

    const cartItems = useSelector(state=>state.cart.cart)
    
    const dispatch = useDispatch();

    const handleQtyChange = (ee , item) => {
      
        const cart = localStorage.getItem('cart')
              ? JSON.parse(localStorage.getItem('cart'))
              : [];

              cart.forEach(cartItem => {
              if (cartItem._id === item._id) {
                if (ee.target.id === '+' && cartItem.numStock > cartItem.qty ) {
                cartItem.qty  = cartItem.qty  + 1
          }else if ( ee.target.id === '-'&& cartItem.qty > 1  ) cartItem.qty  = cartItem.qty  - 1
          }
              })

        localStorage.setItem("cart", JSON.stringify(cart))

    
        dispatch({
			type: ADD_TO_CART,
			payload: cart,
		});

    }
  return (
    <div>
    
     <Stack direction="row" spacing={1} justifyContent="space-between" >
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow hover >
            <TableCell>Imagen</TableCell>
            <TableCell align="left">Articulo</TableCell>
            <TableCell align="left">Stock</TableCell>
            <TableCell align="left">Precio</TableCell>
            <TableCell align="left">Cantidad</TableCell>
            <TableCell align="left">Borrar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems?.map((item) => (
            <TableRow
              key={item._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="item">
                 <img src= {item.img[0]} Width="70px" alt='product'/>
              </TableCell>
              {' '}
              
              <TableCell align="left">
                <Link className={s.link}										
				to={`/detail/${item._id}`}>
                {item.title}
                </Link>
                </TableCell>
            
              <TableCell align="left">{item.numStock}</TableCell>
              <TableCell align="left">${item.price}.00</TableCell>
              <TableCell align="left"> <Button align="left" id="-" onClick={(ee) => handleQtyChange(ee , item)} >-</Button>
                  {item.qty }
                <Button align="left" id="+" onClick={(ee) => handleQtyChange(ee , item)} >+</Button>  
       
													
               </TableCell>
              <TableCell align="left"><DeleteForeverIcon
              onClick={()=>dispatch(deleteFromCart(item))}/></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
            
     <BoxSuma>
        <Sumas cart={cartItems}/>
     </BoxSuma>
        </Stack>
    </div>
    
  );
}