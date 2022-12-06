
import { GET_ALL_PRODUCTS, USE_PAGINATION, GET_PRODUCT_BY_NAME,ALL_PRODUCTS, GET_PRODUCT_BY_COLOR, LINK_MP,FILTER_BY_RATING, ADD_FAVORITES, SHOW_FAVORITES, GET_BY_CATEGORY, GET_PRODUCT_DETAIL, DELETE_DETAIL, FILTER_NEW_PRODUCTS, FILTER_BY_GENERO, FILTER_BY_GENERO2, ALL_PRODUCTS_REMIX } from "../actions/productsAction";

const initialState = {
  products: [],
  detail: [],
  //allProducts: [],
  linkMP:'',
  favorites:[],
  allProductsNoLimit : [],
  allProductsNoLimitRemix : [],
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        //allProducts: action.payload,
      };
    case ALL_PRODUCTS:
        return {
          ...state,
          allProductsNoLimit : action.payload,
        }  
    case ALL_PRODUCTS_REMIX:
      const doc = {
        docs: action.payload
      }
        return {
          ...state,
          allProductsNoLimitRemix : doc
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
    console.log("payload",action.payload)
    const genMen = {docs:action.payload}
    
    return {
      ...state,
      products: genMen
    }

    case FILTER_BY_GENERO2:
    console.log("payload",action.payload)
    const genWom = {docs:action.payload}
    
    return {
      ...state,
      products: genWom
    }

    default:
      return {
        ...state,
      };
  }
}
