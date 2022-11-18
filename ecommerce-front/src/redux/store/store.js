import productReducer from "../reducers/productReducer";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "../reducers/userReducer";
import cartReducer from "../reducers/CartReducer";


const reducer = combineReducers({
    product: productReducer,
    user: userReducer,
    cart: cartReducer,
    // review: reviewReducer,
    // orders: ordersReducer,
  });
  const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
 
  
  export default store;