import { GET_ALL_PRODUCTS, USE_PAGINATION, GET_PRODUCT_BY_NAME, GET_PRODUCT_BY_COLOR, LINK_MP, ADD_FAVORITES, SHOW_FAVORITES, GET_BY_CATEGORY, GET_PRODUCT_DETAIL, DELETE_DETAIL, ALL_PRODUCTS } from "../actions/productsAction";

const initialState = {
  products: [],
  detail: [],
  // allProducts: [],
  linkMP:'',
  favorites:[],
  allProductsNoLimit : [],
  flag : true,

};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        // allProducts: action.payload,
      };
    case ALL_PRODUCTS:
        return {
          ...state,
          allProductsNoLimit : action.payload
        }  
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
      // console.log('action payload', action.payload)
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

      return {
        ...state,
        detail: []
      }
    case LINK_MP:
      return {
        ...state,
        linkMP: action.payload
      }
    case ADD_FAVORITES:
      const docs = {
        docs: action.payload
      }
      return{
        ...state,
        products: docs
      }
    case SHOW_FAVORITES:
      return {
        ...state,
        products: action.payload
      }
   
    default:
      return {
        ...state,
      };
  }
}
