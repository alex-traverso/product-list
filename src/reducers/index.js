import { combineReducers } from "redux";
import reducerProducts from "./reducerProducts";
import reducerAlert from "./reducerAlert";

export default combineReducers({
  products: reducerProducts,
  alert: reducerAlert,
});
