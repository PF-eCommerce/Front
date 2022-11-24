import { useReducer } from "react";
import {
  cartReducer,
  cartIntialState,
} from "../../redux/reducers/cartReducers";

const Cart = (product) => {
  const [state, dispatch] = useReducer(cartReducer, Cart);
  // console.log('Cart reducer: ____', cartReducer)
  // console.log('Cart: ____' ,Cart)
  const { products, cart } = state; // destructuring del state / cartReducer

  // console.log(products , 'PRODUCT')
  // console.log('cart del state' , cart)

  const addToCart = () => {};

  const deleteFromCart = () => {};

  const clearCart = () => {};

  return (
    <div>
      <h2>Carrito de compras</h2>
      <h3>Productos</h3>
      <article className='box'>
        {}
        {/* {products.map((product => <PruebaProduct key={id} data={product} addToCart={addToCart}/>))}*/}
      </article>
      <h3>Carrito</h3>
      <article className='box'></article>
    </div>
  );
};

export default Cart;

// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import { ADD_TO_CART } from '../../redux/actions/cartActions'; // hacer
// import { deleteFromCart } from '../../redux/actions/cartActions';// hacer
// import { orderProduct } from '../../redux/actions/productActions'; // hacer
// import { useEffect } from 'react';
// import ModalMsg from '../modal/ModalMsg';
// import BuyForm from '../buyForm/BuyForm';
// import { useDispatch } from 'react-redux';
// import PruebaProduct from './../PruebaProduct';
//function Cart() {

// 	const [location , setLocation] = useState('')
// 	const [error , setError] = useState(true)
// 	let value = 0;
// 	let navigate = useNavigate();

// 	const { cart } = useSelector(state => state.cart);
// 	const linkMP = useSelector(state => state.product.linkMP)

// 	const dispatch = useDispatch();

// 	const handleGoBackBtn = () => {
// 		navigate('/');
// 	};

// 	const handleQtyClick = (e, product) => {
// 		if (e.target.name === '+') {
// 			console.log('entré en +')
// 			value = product.count + 1;
// 			if (value > product.stock) {
// 				value = product.stock;
// 			}
// 		}
// 		else {
// 			console.log('entré en -')
// 			value = product.count - 1;
// 			if (value < 1) {
// 				value = 1;
// 			}
// 		}
// 		const cart = localStorage.getItem('cart')
// 			? JSON.parse(localStorage.getItem('cart'))
// 			: [];

// 		cart.forEach(cartItem => {
// 			if (cartItem._id === product._id) {
// 				cartItem.count = value;
// 			}
// 		});
// 		localStorage.setItem('cart', JSON.stringify(cart));

// 		dispatch({
// 			type: ADD_TO_CART,
// 			payload: cart,
// 		});
// 	}
// 	const handleCheckout = evt => {
// 		if (localStorage.getItem('user')) {
// 			const productArray = JSON.parse(localStorage.getItem('cart'))

// 			const id = JSON.parse(localStorage.getItem('user'))

// 			dispatch(orderProduct(productArray, id._id, location))
// 			localStorage.removeItem('cart')

// 			setTimeout(()=> {
// 				window.location.reload();
// 			},1500)
// 		} else {
// 			navigate('/account/login')

// 		}
// 	};

// 	useEffect(()=>{
// 		if(linkMP?.length > 0){
// 			window.open(linkMP, "PAGO", "width=300, height=200")
// 		}
// 	} , [linkMP])

// 	return (
// 		<div className={s.container}>
// 			<section className='cart-page m-4'>
// 				{cart.length <= 0 ? (
// 					<div >
// 						<h1 className='display-4'>
// 							El carrito está vacío{' '}
// 							<button

// 								onClick={handleGoBackBtn}
// 							>
// 								Volver
// 							</button>
// 						</h1>
// 					</div>
// 				) : (
// 					<div>

// 						{<div className={s.containerDiv}>
// 							<div>
// 								<h2 className={s.titleCart}> <img className={s.imagencarrito} src={carrito} alt="carrito" /> Carrito</h2>
// 								<div className={s.tableSection}>

// 									<table >
// 										<thead>
// 											<tr className={s.tableTh}>
// 												<th scope='col' className={s.colImage}></th>
// 												<th scope='col' className={s.colProducto}>Producto</th>
// 												<th scope='col' className={s.colCantidad}>Cantidad</th>
// 												<th scope='col' className={s.colPrecio}>Precio</th>
// 											</tr>
// 										</thead>
// 										<tbody>
// 											{cart.map(product => (
// 												<tr key={product._id}>
// 													<th scope='row'>
// 														{' '}
// 														<img
// 															className={s.imgContain}
// 															src={`${product.image}`}
// 															alt='product'
// 														/>
// 													</th>
// 													<td>
// 														<div>	{' '}
// 															<Link
// 																to={`/detail/${product._id}`}
// 															>
// 																{product.name}
// 															</Link></div>

// 														<button
// 															className={s.btnDelete}
// 															type='button'
// 															onClick={() =>
// 																dispatch(
// 																	deleteFromCart(
// 																		product
// 																	)
// 																)
// 															}
// 														>
// 															<img className={s.imagDelete} src={trash} alt="not found" />
// 														</button>
// 													</td>

// 													<td>
// 														<p className={s.botonesQ}>
// 															<button className={s.buttonQ} onClick={e => handleQtyClick(e, product)} name='-'>-</button>
// 															<div>
// 																<label className={s.labelQ}>{product.count}</label>
// 															</div>
// 															<button className={s.buttonQ} onClick={e => handleQtyClick(e, product)} name='+'>+</button>
// 														</p>

// 														<label className={s.disponible} >disponible: {product.stock}</label>
// 													</td>
// 													<td>
// 														<div className={s.priceUnit}>({product.price} c/u)</div>

// 														{/* {' '}.toLocaleString('es') */}
// 														${(product.count * product.price).toLocaleString('es', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
// 													</td>
// 												</tr>
// 											))}
// 										</tbody>
// 									</table>
// 								</div>

// 							</div>

// 							<div className={s.summary}>
// 								<h2 className={s.resumen}>Resumen del pedido</h2>
// 								<p className={s.item}>
// 									{cart.length === 1
// 										? '(1) Item'
// 										: `(${cart.length}) Items`}
// 								</p>
// 								<p className={s.precio} >
// 									Total: $
// 									{cart
// 										.reduce(
// 											(currentSum, currentCartItem) =>
// 												currentSum +
// 												currentCartItem.count *
// 												currentCartItem.price,
// 											0
// 										)
// 										/* .toFixed(2) */
// 										.toLocaleString('es', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
// 									}
// 								</p>
// 								<div>
// 									{localStorage.getItem('user') ? <ModalMsg location={location}
// 									setLocation={setLocation}
// 									error = {error}
// 									setError = {setError}

// 									/>:
// 									<button
// 									className={s.btnCheck}
// 									onClick={handleCheckout}
// 								>
// 									Inicia sesion
// 								</button>
// 									}
// 									{localStorage.getItem('user') && error === false && <button
// 										className={s.btnCheck}
// 										onClick={handleCheckout}
// 									>
// 										Proceder a la compra
// 									</button> }
// 									<button
// 										className={s.btnSeguirComp}
// 										onClick={handleGoBackBtn}
// 									>
// 										Agregar más productos
// 									</button>
// 								</div>
// 							</div>

// 						</div>}
// 					</div>
// 				)}

// 			</section>
// 			<BuyForm/>
// 		</div>

// 	)
// }

// export default Cart
