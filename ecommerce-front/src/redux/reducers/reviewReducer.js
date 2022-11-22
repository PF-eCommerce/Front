import {
  GET_PRODUCT_REVIEWS,
  GET_USER_REVIEWS,
  ALL_REVIEWS,
} from "../actions/reviewActions";

const initialState = {
  reviews: [],
};

export default function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case GET_USER_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };

    case GET_PRODUCT_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    default:
      return state;
  }
}
