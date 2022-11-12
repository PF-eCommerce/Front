import { REGISTER_ERROR, LOGIN_ERROR} from "../actions/userAction";

const initialState = {
  error_register : {},
  error_login : {}
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_ERROR:
      return {
        ...state,
        error_register: action.payload,
      };
    
      case LOGIN_ERROR : 
      return {
        ...state,
        error_login : {}
      }

    default:
      return {
        ...state,
      };
  }
}
