import { CART_ADD, CART_REMOVE, CURRENCY_CHANGE } from "./actions";

const cartReducer = (state, action) => {
    switch(action.type){
        case "CART_ADD":
            return{
                ...state,
                //concat liida juurde
                data: state.data.concat(action.payload)
            };
        case "CART_REMOVE":
            return{
                // ...state kaotab state ymbrise 2ra ja votab state propertid ja paneb nad uhele tasandile
                ...state,
                data: state.data.filter(post => post.id !== action.payload)
            };
        default:
            return state
    }
}

const currencyReducer = (state, action) => {
    switch(action.type){
        case "CURRENCY_CHANGE":
            return{
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export {cartReducer, currencyReducer};