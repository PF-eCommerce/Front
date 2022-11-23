import { GET_ALL_PRODUCTS, USE_PAGINATION, GET_PRODUCT_BY_NAME, GET_PRODUCT_BY_COLOR, LINK_MP, ADD_FAVORITES, SHOW_FAVORITES, GET_BY_CATEGORY, GET_PRODUCT_DETAIL, DELETE_DETAIL } from "../actions/productsAction";


const initialState = {
  products: [],
  detail: [],
  allProducts: [],
  linkMP:'',
  favorites:[],
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
        allProducts: action.payload,
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
      case LINK_MP:
        return {
          ...state,
          linkMP : action.payload
        }
    case ADD_FAVORITES:
      // const allProducts = state.allProducts
      // console.log('PRODUCTOS', allProducts.docs)
      // const favorites = action.payload.map(el=>allProducts.docs.map(elem=>{
      //   if (elem._id===el) return elem
      // }
      //   ))
      console.log('FAVORITESSS', action.payload)
      const asd ={docs: action.payload}
      return{
        ...state,
        products: asd
      }
    case SHOW_FAVORITES:
      return{
        ...state,
        products: action.payload
      }
    
    default:
      return {
        ...state,
      };
  }
}
