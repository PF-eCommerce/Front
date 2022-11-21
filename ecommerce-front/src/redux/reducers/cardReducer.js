import { SELECT_SIZE, DELETE_SIZE} from '../actions/cardAction'

const initialState = {
  size: '',
//   product:{}
};

export default function cardReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_SIZE:
      return {
        ...state,
        size: action.payload
      };
      case DELETE_SIZE:
        return{
            ...state,
            size:''
        }
    //   case PREV_CART:
    //     return{
    //         ...state,
    //         product:[...state.product+action.payload]
    //     }
      default:
      return {
        ...state,
      };
  }
}