import productReducer from "../reducers/productReducer";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "../reducers/userReducer";


const reducer = combineReducers({
    product: productReducer,
<<<<<<< HEAD
     user: userReducer,
=======
    user: userReducer,
>>>>>>> 24467e5970b76500d5aebb8a681e74b6dc4a7417
    // cart: cartReducer,
    // review: reviewReducer,
    // orders: ordersReducer,
  });
  const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
 
  
  export default store;
  