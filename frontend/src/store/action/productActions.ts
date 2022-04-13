import baseLink from "../../api/baseLink";
import { actionTypes as actions } from "../constants/action-types";

export const fetchAllProducts = () => async (dispatch: any) => {

  try {
    dispatch({ type: actions.ALL_PRODUCT_REQUEST });
  const { data }: any = await baseLink.get(`api/products`).catch((e) => {Error:e})

  dispatch({ type: actions.ALL_PRODUCT_SUCCESS, payload: data } as any);
  } catch (error) {
    dispatch({
      type: actions.ALL_PRODUCT_FAIL,
      payload: error,
    });
  }
  
};

export const fetchProducts = (id: any) => async (dispatch: any) => {
try {
   dispatch({ type: actions.PRODUCT_REQUEST });
  const { data }: any = await baseLink.get(`api/product/${id}`).catch((e) => {Error:e})
    
  dispatch({ type: actions.PRODUCT_SUCCESS, payload: data.product } as any);
} catch (error) {
  dispatch({
        type: actions.PRODUCT_FAIL,
        payload: error,
      });
}

 
};

// clear error
export const clearEror =() =>async (dispatch: any) => {
  dispatch({ type: actions.CLEAR_ERROR });
};
