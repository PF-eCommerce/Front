import { GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, USE_PAGINATION } from "../actions/productsAction";

const initialState = {
  products: [],
  detail: [],
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case USE_PAGINATION:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        detail: action.payload,
      }

    default:
      return {
        ...state,
      };
  }
}
