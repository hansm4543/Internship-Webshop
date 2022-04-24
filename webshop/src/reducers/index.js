import { combineReducers } from "redux";
import productReducers from "./productReducers";
import cartReducers from "./cartReducers";
import currencyReducers from "./currencyReducers";

export default combineReducers({
  products: productReducers,
  cart: cartReducers,
  currency: currencyReducers,
});
