import { combineReducers } from 'redux';
import productReducer from './productReducer';


const rootReducer = combineReducers({products:productReducer});

export default rootReducer;