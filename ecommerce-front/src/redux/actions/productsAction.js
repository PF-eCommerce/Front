import axios from "axios"

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";






axios.defaults.baseURL = "http://localhost:3001";

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const products = await axios.get("/products");

      return dispatch({
        type: GET_ALL_PRODUCTS,
        payload: products.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};