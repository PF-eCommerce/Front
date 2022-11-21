import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const USE_PAGINATION = "USE_PAGINATION";
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
export const GET_PRODUCT_BY_COLOR = "GET_PRODUCT_BY_COLOR";
export const GET_BY_CATEGORY = "GET_BY_CATEGORY";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const DELETE_DETAIL = 'DELETE_DETAIL';

axios.defaults.baseURL = process.env.REACT_APP_API_URL

export const getAllProducts = () => {
  return async (dispatch) => {
    
    try {
      const products = await axios.get(`${axios.defaults.baseURL}/products`);
      
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
      const products = await axios.get(`${axios.defaults.baseURL}/products/search?search=${value}`)
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
      const products = await axios.get(`${axios.defaults.baseURL}/products?type&size&color=${value}`);
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
      console.log("desde Action", value)
      const products = await axios.get(`${axios.defaults.baseURL}/products?type=${value}&size&color`);
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
      const paginatedProducts = await axios.get(`${axios.defaults.baseURL}/products?page=${num}`);
      return dispatch({
        type: USE_PAGINATION,
        payload: paginatedProducts.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getProductDetail = (id) => {
  return async (dispatch) => {
    try {
      const product = await axios.get(`${axios.defaults.baseURL}/products/${id}`);
      return dispatch({
        type: GET_PRODUCT_DETAIL,
        payload: product.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createProduct = (form) => {
  return async (dispatch) => {
    try {
      const product = await axios.post(`${axios.defaults.baseURL}/product`, form);

      return dispatch({
        payload: product,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function deleteDetail() {
  return {
    type: DELETE_DETAIL,
  }
}
