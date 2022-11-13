import { REGISTER_ERROR, LOGIN_ERROR, RESET_ERROR, USER_REGISTER} from "../actions/userAction";

const initialState = {
  error_register : {},
  error_login : {},
  register_done: false,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_ERROR:
      return {
        ...state,
        error_register: action.payload,
      };

    case USER_REGISTER:
      return{
        ...state,
        register_done: true,
      }

      case LOGIN_ERROR : 
      return {
        ...state,
        error_login : {}
      }

      case RESET_ERROR:
        
      return {
        ...state,
        error_register : {},
        register_done: false,
      };

    default:
      return {
        ...state,
      };
  }
}
