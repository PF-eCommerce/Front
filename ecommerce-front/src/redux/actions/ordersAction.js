import axios from "axios";

export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
export const GET_USER_ORDERS = "GET_USER_ORDERS";
export const GET_USER_PRODUCTS = "GET_USER_PRODUCTS";
export const GET_PRODUCT_ORDERS = "GET_PRODUCT_ORDERS";
export const GET_ORDER = "GET_ORDER";

export const getAllOrders = () => {
  return async (dispatch) => {
    try {
      const orders = await axios.get(`${process.env.REACT_APP_API_URL}/orders`);

      return dispatch({
        type: GET_ALL_ORDERS,
        payload: orders.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export function getOrdersByUser(userId) {
  return async function (dispatch) {
    try {
      let orders = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/${userId}/orders`
      );

      return dispatch({
        type: GET_USER_ORDERS,
        payload: orders.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getUsersPurchasedProducts(userId) {
  return async function (dispatch) {
    try {
      let orders = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/${userId}/orders/purchased`
      );

      return dispatch({
        type: GET_USER_PRODUCTS,
        payload: orders.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getOrdersByProduct(order) {
  return async function (dispatch) {
    try {
      let orders = await axios.get(
        `${process.env.REACT_APP_API_URL}/${order}/orders`
      );

      return dispatch({
        type: GET_PRODUCT_ORDERS,
        payload: orders.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getOrder(order) {
  return async function (dispatch) {
    try {
      let orders = await axios.get(
        `${process.env.REACT_APP_API_URL}/order/${order}/`
      );

      return dispatch({
        type: GET_ORDER,
        payload: orders.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function modifyOrder(order) {
  return async function (dispatch) {
    try {
      let orders = await axios.put(
        `${process.env.REACT_APP_API_URL}/order/${order}/`
      );

      return dispatch({
        payload: orders.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
