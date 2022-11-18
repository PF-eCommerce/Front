import { GET_ALL_PRODUCTS, USE_PAGINATION, GET_PRODUCT_BY_NAME, GET_PRODUCT_BY_COLOR, GET_BY_CATEGORY, GET_PRODUCT_DETAIL, DELETE_DETAIL } from "../actions/productsAction";


const initialState = {
  products: [],
  detail: [],
  allProducts: [],
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        // products: action.payload,
        allProducts: action.payload,
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
      console.log('action payload', action.payload)
      return {
        ...state,
        products:action.payload
      }
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        detail: action.payload
      }
    case DELETE_DETAIL:
            
      return{
          ...state,
          detail:[]
      }
    default:
      return {
        ...state,
      };
  }
}
