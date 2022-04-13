import { combineReducers } from 'redux';
import {allProductReducer,productReducer} from './productReducer';


const rootReducer = combineReducers({
    products:allProductReducer,
    product:productReducer,
});

export default rootReducer;