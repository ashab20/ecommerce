import axios from "axios";
import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERROR,
} from "../constants/productConstants";


// wont work at localhost in my case
// cors help me to connect backend


// Failed
// axios.create({
//     baseURL:"http://0.0.0.0:4000",withCredentials:false
// });

export const getProduct = () => async (dispatch:any) => {
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });

    const {data} = await axios.get(`${process.env.BASE_URL}/api/products`);

    // Does not work on my case next js 
    // i set the base usrl into package.json but wont work
    // const {data} = await axios.get("/api/products");


    //! Work after a very good error
    // const res = await fetch('http://0.0.0.0:4000/api/products',{
    //     method:'get'
    // });
    // const data = await res.json()


    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// clear error
export const clearEror = (dispatch: any) => {
  dispatch({ type: CLEAR_ERROR });
};
