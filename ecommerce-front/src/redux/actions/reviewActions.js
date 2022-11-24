import axios from "axios";
export const ALL_REVIEWS = "ALL_REVIEWS";
export const GET_USER_REVIEWS = "GET_USER_REVIEWS";
export const GET_PRODUCT_REVIEWS = "GET_PRODUCT_REVIEWS";

export const postReview = (productId, review) => {
  return async (dispatch) => {
    console.log('review:', review)
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/products/${productId}/review`, review);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllReviews = () => {
  return async (dispatch) => {
    try {
      const json = await axios.get(`${process.env.REACT_APP_API_URL}/reviews`);
      return dispatch({
        type: ALL_REVIEWS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function getReviewByUser(userId) {
  return async function (dispatch) {
    try {
      let user = await axios.get(`${process.env.REACT_APP_API_URL}/user/${userId}/reviews`);

      return dispatch({
        type: GET_USER_REVIEWS,
        payload: user.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getReviewByProduct(productId) {
  return async function (dispatch) {
    try {
      let product = await axios.get(`${process.env.REACT_APP_API_URL}/products/${productId}/reviews`);

      return dispatch({
        type: GET_PRODUCT_REVIEWS,
        payload: product.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const deleteReview = (productId, reviewId) => {
  return async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/products/${productId}/review/${reviewId}`);
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteReviewByUser = (id) => {
  return async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/review/` + id);
    } catch (error) {
      console.log(error);
    }
  };
};