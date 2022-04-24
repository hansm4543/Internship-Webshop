import { CURRENCY_CHANGE } from "../actions/types";

const initState = {value: "USD"};
export default function (state = initState, action) {
  switch(action.type){
        case "CURRENCY_CHANGE":
            return{
                ...state,
                value: action.payload
            }
        default:
            return state
    }
}
