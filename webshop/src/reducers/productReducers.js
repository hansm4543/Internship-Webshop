import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_CLOTHES,
  FETCH_PRODUCTS_TECH,
} from "../actions/types";

const initState = { items: [], filteredItems: [], size: "", sort: "" };
export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, items: action.payload, filteredItems: action.payload };
    case FETCH_PRODUCTS_CLOTHES:
      return { ...state, items: action.payload, filteredItems: action.payload };
    case FETCH_PRODUCTS_TECH:
      return { ...state, items: action.payload, filteredItems: action.payload };

    default:
      return state;
  }
}
