import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const addToCart = (items, product) => (dispatch) => {
  const cartItems = items.slice();
  let productAlreadyInCart = false;

  cartItems.forEach((cp) => {
    if (cp.id === product.id) {
      cp.count += 1;
      productAlreadyInCart = true;
    }
  });

  if (!productAlreadyInCart) {
    cartItems.push({ ...product, count: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: ADD_TO_CART, payload: { cartItems } });
};

export const removeFromCart = (items, product) => (dispatch) => {

  let cartItems = items.slice();
  
  //.filter((a) => a.id !== product.id);
  cartItems.forEach((cp) => {
    if (cp.id === product.id) {
      if(cp.count === 1){
        cartItems = cartItems.filter((a) => a.id !== product.id);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        console.log(cartItems)
        dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
      }else{
        cp.count -= 1;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        console.log(cartItems)
        dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
      }
      
    }
  });

  //localStorage.setItem("cartItems", JSON.stringify(cartItems));
  //dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
};
