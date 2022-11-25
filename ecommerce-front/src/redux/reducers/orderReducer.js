import {
  GET_ALL_ORDERS,
  GET_ORDER,
  GET_PRODUCT_ORDERS,
  GET_USER_ORDERS,
  GET_USER_PRODUCTS,
} from "../actions/ordersAction";

const initialState = {
  allOrders: [],
  userOrders: [],
  productOrders: [],
  purchased: [],
  order: {},
};

export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_ORDERS:
      return {
        ...state,
        allOrders: action.payload,
      };
    case GET_USER_ORDERS:
      return {
        ...state,
        userOrders: action.payload,
      };
    case GET_USER_PRODUCTS:
      return {
        ...state,
        purchased: action.payload,
      };
    case GET_PRODUCT_ORDERS:
      return {
        ...state,
        productOrders: action.payload,
      };
    case GET_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
