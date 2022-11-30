
import { GET_ALL_PRODUCTS, USE_PAGINATION,FILTER_BY_GENERO,FILTER_NEW_PRODUCTS, GET_PRODUCT_BY_NAME,ALL_PRODUCTS, GET_PRODUCT_BY_COLOR, LINK_MP,FILTER_BY_RATING, ADD_FAVORITES, SHOW_FAVORITES, GET_BY_CATEGORY, GET_PRODUCT_DETAIL, DELETE_DETAIL } from "../actions/productsAction";

const initialState = {
  products: [],
  detail: [],
   allProducts: [],
  linkMP:'',
  favorites:[],
  allProductsNoLimit : [],
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
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
    case FILTER_BY_RATING:

    const productsFilter = state.products
    console.log(productsFilter)
    const productsByRating = productsFilter.docs.filter(product=>product.rating>=3)
    productsByRating.docs = productsByRating

      return{
        ...state,
        products:productsByRating
      }
    case FILTER_NEW_PRODUCTS:
      console.log("desde redux",action.payload)
      const newsproducts ={docs:action.payload}
     
      return {
        ...state,
        products:newsproducts
      }
    case FILTER_BY_GENERO:
      let productsGenero = state.products
      let productsByGenero = [];
      
      console.log("payload",action.payload)
      action.payload==="men" ?
      productsByGenero= productsGenero.docs.filter(product=>product.men===true)
      : 
      productsByGenero= productsGenero.docs.filter(product=>product.woman===true)
      console.log("desde redux",productsByGenero)
      productsByGenero.docs =productsByGenero
     

      return {
        ...state,
        products:productsByGenero.length?productsByGenero:state.allProducts
      }
      

    default:
      return {
        ...state,
      };
  }
}
