import * as React from 'react';
import {Table,Stack, TextField} from '@mui/material';
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
import {addToCart} from "../../redux/actions/cartAction"
import Input from "./Input"
import {ADD_TO_CART} from "../../redux/actions/constantes"


export default function BasicTable() {

    const cartItems = useSelector(state=>state.cart.cart)
    console.log("desdetable", cartItems)
    const dispatch = useDispatch();

   const handleQtyChange = (e,item) => {
    e.preventDefault()
    const cartLocal = localStorage.getItem("cart") 
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

    cartLocal.forEach(cartItem=> {
        if(cartItem._id===item._id){
            cartItem.count = e.target.value
        }
    });

        localStorage.setItem("cart", JSON.stringify(cartLocal))

        // dispatch(addToCart(cartLocal))
        dispatch({
			type: ADD_TO_CART,
			payload: cartLocal,
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
              <TableCell align="left"><TextField
                    size='small'
          
                 id="filled-number"
                 max={item.numStock}
                 label="Cantidad"
                 type="number"
                 defaultValue={"1"}
                 variant="outlined"
                 onChange={e =>
                    handleQtyChange( e,item )
                }
        //   value={item.count || item.numStock}
          InputLabelProps={{
            shrink: true,
          }} />
         
       
													
               </TableCell>
              <TableCell align="left"><DeleteForeverIcon/></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
            
        
        <Sumas cart={cartItems}/>
        
        </Stack>
    </div>
    
  );
}