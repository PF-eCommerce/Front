import axios from 'axios';

export const REGISTER_ERROR = "REGISTER_ERROR";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const RESET_ERROR = 'RESET_ERROR'


axios.defaults.baseURL = "http://localhost:3001";

export const userRegister = (user) => {
  console.log('INPUT', user)
  return async (dispatch) => {
    try {
      await axios.post("/register", user);
    
    } catch (error) {
      console.log('ERROR', error)
      console.log('ERROR RESPONSE', error.response)
      console.log('ERROR RESPONSE DATA', error.response.data)
      console.log('ERROR RESPONSE DATA MSG', error.response.data.msg)
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