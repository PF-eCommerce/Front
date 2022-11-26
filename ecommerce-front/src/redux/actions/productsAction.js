import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const USE_PAGINATION = "USE_PAGINATION";
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
export const GET_PRODUCT_BY_COLOR = "GET_PRODUCT_BY_COLOR";
export const GET_BY_CATEGORY = "GET_BY_CATEGORY";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const DELETE_DETAIL = "DELETE_DETAIL";
export const LINK_MP = "LINK_MP";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const SHOW_FAVORITES = "SHOW_FAVORITES";
export const FILTER_BY_RATING = "FILTER_BY_RATING"
export const ALL_PRODUCTS = "ALL_PRODUCTS"


export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const products = await axios.get(
        `${process.env.REACT_APP_API_URL}/products`
      );

      return dispatch({
        type: GET_ALL_PRODUCTS,
        payload: products.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllProductsNoPaginate = () => {
  return async (dispatch) => {
    try {
      const products = await axios.get(`http://localhost:3001/productsAll`);
 
      return dispatch({
        type : ALL_PRODUCTS,
        payload : products.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const getProductByName = (value) => {
  return async (dispatch) => {
    try {
      const products = await axios.get(
        `${process.env.REACT_APP_API_URL}/products/search?search=${value}`
      );
      console.log(products.data);
      return dispatch({
        type: GET_PRODUCT_BY_NAME,
        payload: products.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const filterRating = ()=> {
  return (dispatch)=> {
    return dispatch({
      type: FILTER_BY_RATING,
      
    })
  }
}
export const getItemColor = (value) => {
  console.log("desde actioncolor", value);
  return async (dispatch) => {
    try {
      const products = await axios.get(
        `${process.env.REACT_APP_API_URL}/products?type&size&color=${value}`
      );
      console.log(products.data);
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
      console.log("desde Action", value);
      const products = await axios.get(
        `${process.env.REACT_APP_API_URL}/products?type=${value}&size&color`
      );
      console.log(products.data);
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
      const paginatedProducts = await axios.get(
        `${process.env.REACT_APP_API_URL}/products?page=${num}`
      );
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
  console.log("id desde action detail", id);
  return async (dispatch) => {
    try {
      const product = await axios.get(
        `${process.env.REACT_APP_API_URL}/products/${id}`
      );
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
      const product = await axios.post(
        `${process.env.REACT_APP_API_URL}/product`,
        form
      );

      return dispatch({
        payload: product,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const updateProduct = (id, changes) => {
  return async (dispatch) => {
    try {
      const product = await axios.put(
        `${process.env.REACT_APP_API_URL}/products/${id}`,
        changes
      );

      return dispatch({
        payload: product,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      const product = await axios.delete(
        `${process.env.REACT_APP_API_URL}/products/${id}`
      );

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
  };
}

export const orderProduct = (productArray, id, location, input) => {
  const data = [productArray, location, input];
  // console.log('ID', id)
  // console.log("DATA", data);
  // console.log("PRODUCTARRAY", productArray);
  return async (dispatch) => {
    try {
      const linkMP = await axios.post(
        `${process.env.REACT_APP_API_URL}/post-order/${id}`,
        data
      );
      console.log("PASO EL LINKMP");
      window.open(linkMP.data, "PAGO", "width=600, height=400");
      return dispatch({
        type: LINK_MP,
        payload: linkMP.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function addFavorites(payload) {
  return {
    type: ADD_FAVORITES,
    payload,
  };
}

// export const addFavorites = (ids) => {
//   console.log('IDSSS', ids)

//   return async (dispatch) => {
//     try {
//       if (Array.isArray(ids)&&ids.length===1 || !Array.isArray(ids)&&ids.length>1){
//         const product = await axios.get(`${axios.defaults.baseURL}/products/${ids}`);
//       return dispatch({
//         type: ADD_FAVORITES,
//         payload: product.data,
//       });
//       } else if (Array.isArray(ids)&&ids.length>1){
//         console.log('ENTRANDO EN IF')
//         const product = ids.map(async el=>{
//           await axios.get(`${axios.defaults.baseURL}/products/${el}`)
//         })
//         console.log('PRODUCTOSSS FAV', product)
//         return dispatch({
//           type: ADD_FAVORITES,
//           payload: product.data
//         })
//       }

//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const showFavorites = (payload) => {
  return {
    type: SHOW_FAVORITES,
    payload,
  };
};

