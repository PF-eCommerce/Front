export const SELECT_SIZE='SELECT_SIZE';
export const DELETE_SIZE='DELETE_SIZE';
// export const PREV_CART='PREV_CART';

export const selectSize = (payload) => {
    return {
      type: SELECT_SIZE,
      payload
    };
  };

export const deleteSize = (payload) => {
    return {
      type: DELETE_SIZE,
      payload
    };
  };

//   export const previousToCart = (payload) => {
//     return {
//       type: PREV_CART,
//       payload
//     };
//   };