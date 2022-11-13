import axios from 'axios';

export const REGISTER_ERROR = "REGISTER_ERROR";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const RESET_ERROR = 'RESET_ERROR';
export const USER_REGISTER = 'USER_REGISTER';


axios.defaults.baseURL = "http://localhost:3001";

export const userRegister = (user) => {
  
  return async (dispatch) => {
    try {
      await axios.post("/register/user", user);
      return dispatch({
        type: USER_REGISTER,
      })
    
    } catch (error) {
      
      return dispatch({
        type: REGISTER_ERROR,
        payload: error.response.data,
      });
    }
  };
};


export const userLogin = (user) => {
    return async (dispatch) => {
      try {
        const token = await axios.post("/login", user);
  
        localStorage.setItem("token", token.data.token);
          
        // si quiero guardar el token con redux
        // return dispatch({
        //   type: TOKEN,
        //   payload: token.data,
        // });
      } catch (error) {
        return dispatch({
          type: LOGIN_ERROR,
          payload: error.response.data,
        });
      }
    };
  };

export const resetError = () => {
    return {
      type: RESET_ERROR,
    };
  };