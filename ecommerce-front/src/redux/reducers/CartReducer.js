import { DELETE_FROM_CART, ADD_TO_CART, DELETE_ALL_CART } from "../actions/cartAction"

const INITIAL_STATE = {
  cart: [],
};

if (localStorage.getItem("cart")) {
  INITIAL_STATE.cart = JSON.parse(localStorage.getItem("cart"));
} else {
  INITIAL_STATE.cart = []
}

export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cart: [...action.payload]
      }
    case DELETE_FROM_CART:
      return {
        cart: [...action.payload]
      }
      case DELETE_ALL_CART:
        return{
          ...state,
          cart: [],
        }
    default:
      return state;
  }
}