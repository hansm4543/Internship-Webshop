import { CURRENCY_CHANGE } from "./types";

export const currencyChange = (array) => (dispatch) => {
    
    dispatch({type: CURRENCY_CHANGE, payload: array });
  };
