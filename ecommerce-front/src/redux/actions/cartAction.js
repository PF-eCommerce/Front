

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ONE_FROM_CART = "REMOVE_ONE_FROM_CART";
export const REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";



export const addToCart = product => async dispatch => {
	// if cart already exists in local storage, use it, otherwise set to empty array
	const cart = localStorage.getItem('cart')
		? JSON.parse(localStorage.getItem('cart'))
		: [];

	// check if duplicates
	const duplicates = cart.filter(cartItem => cartItem._id === product._id);

	// if no duplicates, proceed
	if (duplicates.length === 0) {
		// prep product data
		const productToAdd = {
			...product,
			count: 1,
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

	const updatedCart = cart.filter(cartItem => cartItem._id !== product._id);

	localStorage.setItem('cart', JSON.stringify(updatedCart));

	dispatch({
		type: DELETE_FROM_CART,
		payload: updatedCart,
	});
};