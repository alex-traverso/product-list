import { combineReducers } from "redux";
import reducerProducts from "./reducerProducts";


export default combineReducers( {
    products: reducerProducts
})