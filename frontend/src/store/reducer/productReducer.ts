import { actionTypes as actions} from "../constants/action-types";

const initialState = {
    products: []
}

const productReducer = (state = initialState, {type,payload}:any) => {
    switch (type) {
        case actions.ALL_PRODUCT_REQUEST:
            return {
                loading:true,
                products:[]
            }
            case actions.ALL_PRODUCT_SUCCESS:
                return {
                  loading: false,
                  products: payload,
                  productsCount: payload,
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
            return{
            state
            }    
    }
}

export default productReducer;