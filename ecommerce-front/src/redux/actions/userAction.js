import axios from 'axios';

export const REGISTER_ERROR = "REGISTER_ERROR";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const RESET_ERROR = 'RESET_ERROR';
export const USER_REGISTER = 'USER_REGISTER';
export const USER = 'USER'
export const RESET_USER = 'RESET_USER'
export const TOKEN = 'TOKEN'
export const ALL_USERS = "ALL_USERS";


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
        const token = await axios.post("/login/user", user);
  
        localStorage.setItem("token", token.data.token);
          
        // si quiero guardar el token con redux
        return dispatch({
          type: TOKEN,
          payload: token.data,
        });
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

  export const getUserData = () => {
    return async (dispatch) => {
      try {
        const user = await axios.get("/perfil", {
          headers: {
            Bearer: localStorage.getItem("token"),
          },
        });
  
        localStorage.setItem("user", JSON.stringify(user.data));
        return dispatch({
          type: USER,
          payload: user.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  };

  export const userLogOut = () => {
    return async (dispatch) => {
      try {
        return dispatch({
          type: RESET_USER,
        });
      } catch (error) {
       console.log(error)
      }
    };
  };

  export const registerUserAuth0 = (user) => {
    console.log(user)
    return async () => {
      try {
        await axios.post("/register/auth0", user);
       
      
      } catch (error) {
        
        console.log(error)
      }
    };
  }

  export const auth0User = (user) => {
   console.log(user)
    return  {
        type: USER,
        payload: user,
     
    }
  }

  export const getAllUsers = () => {
    return async (dispatch) => {
      try {
        const users = await axios.get("/users");
        return dispatch({
          type: ALL_USERS,
          payload: users.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  };
