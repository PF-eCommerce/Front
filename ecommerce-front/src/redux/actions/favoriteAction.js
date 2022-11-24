export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const DELETE_FROM_FAVORITE = "DELETE_FROM_FAVORITE";



export const addToFavorite = item => async dispatch => {
	// if cart already exists in local storage, use it, otherwise set to empty array
	console.log('ITEM', item)
	const favorite = localStorage.getItem('favorite')
		? JSON.parse(localStorage.getItem('favorite'))
		: [];
	
	// check if duplicates
	const duplicates = favorite?.filter(fav => fav._id === item._id);
	
	// if no duplicates, proceed
	if (duplicates.length === 0) {

		// add product data to cart
		favorite.push(item);

		// add cart to local storage
		localStorage.setItem('favorite', JSON.stringify(favorite));

		// add cart to redux
		dispatch({
			type: ADD_TO_FAVORITE,
			payload: favorite,
		});
	}
};

export const deleteFromFavorite = item => async dispatch => {
	const favorite = localStorage.getItem('favorite')
		? JSON.parse(localStorage.getItem('favorite'))
		: [];

	const updateFavorite = favorite.filter(fav => fav._id !== item._id);

	localStorage.setItem('favorite', JSON.stringify(updateFavorite));

	dispatch({
		type: DELETE_FROM_FAVORITE,
		payload: updateFavorite,
	});
};