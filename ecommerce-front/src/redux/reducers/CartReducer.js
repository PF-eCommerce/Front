import { REMOVE_ONE_FROM_CART,REMOVE_ALL_FROM_CART, CLEAR_CART, ADD_TO_CART} from "../actions/cartAction"



const INITIAL_STATE = {
    cart: [],
   
  };

  if(localStorage.getItem("cart")){
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
        
        

        
      

      case REMOVE_ONE_FROM_CART: {} 
      
      case REMOVE_ALL_FROM_CART:{}

      case CLEAR_CART:{}

      default:
        return state;
    




    }
  }