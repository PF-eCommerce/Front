import { GET_ALL_PRODUCTS, USE_PAGINATION, GET_PRODUCT_BY_NAME, GET_PRODUCT_BY_COLOR, GET_BY_CATEGORY } from "../actions/productsAction";

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
    case GET_PRODUCT_BY_NAME:
      return {
        ...state,
        products: action.payload
      }
    case GET_PRODUCT_BY_COLOR:
      return {
        ...state,
        products: action.payload
      }
    case GET_BY_CATEGORY:
      return {
        ...state,
        products:action.payload
      }

    default:
      return {
        ...state,
      };
  }
}
