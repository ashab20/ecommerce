import axios from 'axios';
import {actionTypes as actions} from '../constants/action-types'
import baseLink from '../../api/baseLink';

export  const fetchAllProducts = () => async(dispatch:any) =>{
    dispatch({type:actions.ALL_PRODUCT_REQUEST})
    const {data}:any = await baseLink.get(`api/products`).catch((error) => {dispatch({
        type:actions.ALL_PRODUCT_FAIL,
        payload: error,
      });});
    dispatch({type:actions.ALL_PRODUCT_SUCCESS,payload:data} as any);
}



// clear error
export const clearEror = (dispatch: any) => {
    dispatch({ type:actions.CLEAR_ERROR });
  };