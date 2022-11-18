import productReducer from "../reducers/productReducer";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "../reducers/userReducer";
import reviewReducer from '../reducers/reviewReducer'


const reducer = combineReducers({
    product: productReducer,
    user: userReducer,
    review: reviewReducer
  });
  const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
 
  
  export default store;