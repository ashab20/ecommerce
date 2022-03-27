import axios from 'axios'
import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERROR,
} from "../constants/productConstants";

export const getProduct = () => async(dispatch:any) => {
    try {
        dispatch({type:ALL_PRODUCT_REQUEST});

        const {data} = await axios.get("/api/products")
console.log(data)
        dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload:data,
        })
    } catch (error:any) {
        dispatch({
            type:ALL_PRODUCT_FAIL,
            payload:error.response.data.mesage ,  
        }) 
    }
}

// clear error
export const clearEror = (dispatch:any) => {
    dispatch({type:CLEAR_ERROR})
}

