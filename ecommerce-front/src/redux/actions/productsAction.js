import axios from "axios";


export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const USE_PAGINATION = "USE_PAGINATION";
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
export const GET_PRODUCT_BY_COLOR = "GET_PRODUCT_BY_COLOR";
export const GET_BY_CATEGORY = "GET_BY_CATEGORY";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const DELETE_DETAIL = 'DELETE_DETAIL';
export const LINK_MP='LINK_MP';
export const ADD_FAVORITES='ADD_FAVORITES';
export const SHOW_FAVORITES='SHOW_FAVORITES';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const products = await axios.get(`/products`);

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
export const getItemColor = (value) => {
  console.log("desde actioncolor", value);
  return async (dispatch) => {
    try {
      const products = await axios.get(`/products?type&size&color=${value}`);
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
      const products = await axios.get(`/products?type=${value}&size&color`);
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

export const getProductDetail = (id) => {
  return async (dispatch) => {
    try {
      const product = await axios.get(`/products/${id}`);
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
      const product = await axios.post(`/product`, form);

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
      const product = await axios.put(`/products/${id}`, changes);

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
      console.log('ASDASD')
      const linkMP = await axios.post(`/post-order/${id}`, data);
      console.log("PASO EL LINKMP", linkMP);
      // window.location.replace(linkMP.data);
      window.open(linkMP.data, "PAGO", "width=300, height=200")
      return dispatch({
        type: LINK_MP,
        payload: linkMP.data,
      });
    } catch (error) {
      console.log(error);
    }

  }
}

export function addFavorites (payload){
  return {
        type: ADD_FAVORITES,
        payload
      }
    
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

export const showFavorites = (payload) =>{
  return{
    type: SHOW_FAVORITES,
    payload
  }
}