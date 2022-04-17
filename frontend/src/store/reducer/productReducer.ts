import { actionTypes as actions } from "../constants/action-types";

const initialState = {
  products: [],
};

const allProductReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case actions.ALL_PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case actions.ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: payload.product,
        productsCount: payload.ProductCount,
      };

    case actions.ALL_PRODUCT_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case actions.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return {
        state,
      };
  }
};

const productReducer = (state = { product: {} }, { type, payload }: any) => {
  switch (type) {
    case actions.PRODUCT_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case actions.PRODUCT_SUCCESS:
      return {
        product: payload,
        loading: false,
      };

    case actions.PRODUCT_FAIL:
      return { loading: false, error: payload };
    case actions.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return {
        state,
      };
  }
};

export { allProductReducer, productReducer };
