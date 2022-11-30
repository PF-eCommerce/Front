

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ONE_FROM_CART = "REMOVE_ONE_FROM_CART";
export const REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const DELETE_ALL_CART = "DELETE_ALL_CART";



export const addToCart = item => async dispatch => {
	// if cart already exists in local storage, use it, otherwise set to empty array
	
	const cart = localStorage.getItem('cart')
		? JSON.parse(localStorage.getItem('cart'))
		: [];
	
	// check if duplicates
	const duplicates = cart?.filter(cartItem => (cartItem._id === item._id)&&(cartItem.size === item.size));
	
	// if no duplicates, proceed
	if (duplicates.length === 0) {
		// prep product data
		
		const productToAdd = {
			...item,
			qty : item.qty 
		};

		// add product data to cart
		cart.push(productToAdd);

		// add cart to local storage
		localStorage.setItem('cart', JSON.stringify(cart));

		// add cart to redux
		dispatch({
			type: ADD_TO_CART,
			payload: cart,
		});
	}
};

export const deleteFromCart = product => async dispatch => {
	const cart = localStorage.getItem('cart')
		? JSON.parse(localStorage.getItem('cart'))
		: [];

	const updatedCart = cart.filter(cartItem => {
		if (cartItem._id !== product._id){
			return true
		}else if (cartItem.size !== product.size){
				return true
		}else{
			return false
		}
	
	});
	
	localStorage.setItem('cart', JSON.stringify(updatedCart));

	dispatch({
		type: DELETE_FROM_CART,
		payload: updatedCart,
	});
};

export const deleteAllCart = () => {
	return (dispatch) => {
		localStorage.setItem("cart", []);
		dispatch({
			type: DELETE_ALL_CART,
		})
	}
}