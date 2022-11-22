import { REGISTER_ERROR, LOGIN_ERROR, RESET_ERROR, USER_REGISTER, USER, RESET_USER, TOKEN, ALL_USERS,} from "../actions/userAction";

const initialState = {
  error_register: {},
  error_login: {},
  user: {},
  register_done: false,
  token: {}
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_ERROR:
      return {
        ...state,
        error_register: action.payload,
      };

    case USER_REGISTER:
      return {
        ...state,
        register_done: true,
      }

    case LOGIN_ERROR:
      return {
        ...state,
        error_login: {}
      }

    case RESET_ERROR:

      return {
        ...state,
        error_register: {},
        register_done: false,
      };
   
      case USER:
        return {
          ...state,
          user : action.payload
        }
      case ALL_USERS:
        return {
          ...state,
          users: action.payload,
        };
      case RESET_USER:
        return {
          ...state,
          user : {}
        }
        
        case TOKEN : 
        return {
          ...state,
          token : action.payload
        }
    default:
      return {
        ...state,
      };
  }
}
