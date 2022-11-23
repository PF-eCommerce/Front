import productReducer from "../reducers/productReducer";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "../reducers/userReducer";
import cartReducer from "../reducers/CartReducer";
import cardReducer from "../reducers/cardReducer";
import adminReducer from "../reducers/adminReducer";
import reviewReducer from '../reducers/reviewReducer'


const reducer = combineReducers({
    product: productReducer,
    user: userReducer,
    cart: cartReducer,
    admin: adminReducer,
    review: reviewReducer,
    // orders: ordersReducer,
    card: cardReducer,
  });
  const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


  export default store;