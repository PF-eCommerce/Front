import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const USE_PAGINATION = "USE_PAGINATION";
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
export const GET_PRODUCT_BY_COLOR = "GET_PRODUCT_BY_COLOR";
export const GET_BY_CATEGORY = "GET_BY_CATEGORY";


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
export const getProductByName = (value) => {
  return async (dispatch) => {
    try {
      const products = await axios.get(`/products/search?search=${value}`);
      console.log(products.data)
      return dispatch({
        type: GET_PRODUCT_BY_NAME,
        payload: products.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getItemColor = (value) => {
  console.log("desde actioncolor", value)
  return async (dispatch) => {
    try {
      const products = await axios.get(`/products?type&size&color=${value}`);
      console.log(products.data)
      return dispatch({
        type: GET_PRODUCT_BY_COLOR,
        payload: products.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getCategories = (value) => {
  return async (dispatch) => {
    try {
      console.log("desde Action",value)
      const products = await axios.get(`/products?type=${value}&size&color`);
      console.log(products.data)
      return dispatch({
        type: GET_BY_CATEGORY,
        payload: products.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getOtherPages = (num) => {
  return async (dispatch) => {
    try {
      const paginatedProducts = await axios.get(`/products?page=${num}`);
      return dispatch({
        type: USE_PAGINATION,
        payload: paginatedProducts.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
