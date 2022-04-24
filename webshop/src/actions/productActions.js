import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_CLOTHES,
  FETCH_PRODUCTS_TECH,
} from "./types";

export const fetchProducts = () => (dispatch) => {
  fetch('http://localhost:4000', {
        method: 'POST',

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            query: `query {
                category(input: { title: "all" }) {
                  name
                  products{
                    id
                    name
                    inStock
                    gallery
                    description
                    
                    brand
                    prices{
                      currency{
                        label
                        symbol
                      }
                      amount
                    }
                    attributes{
                      id
                      name
                      type
                      items{
                        displayValue
                        value
                        id
                      }
                    }
                  }
                }
              }`
        })
        })
        .then(res => res.json())
    .then((data) => 
    //console.log(data.data.category.products)
    {
      dispatch({ type: FETCH_PRODUCTS, payload: data.data.category.products });
    });
};
export const fetchProductsClothes = () => (dispatch) => {
  fetch('http://localhost:4000', {
        method: 'POST',

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            query: `query {
                category(input: { title: "clothes" }) {
                  name
                  products{
                    id
                    name
                    inStock
                    gallery
                    description
                    
                    brand
                    prices{
                      currency{
                        label
                        symbol
                      }
                      amount
                    }
                    attributes{
                      id
                      name
                      type
                      items{
                        displayValue
                        value
                        id
                      }
                    }
                  }
                }
              }`
        })
        })
        .then(res => res.json())
    .then((data) => 
    //console.log(data.data.category.products)
    {
      dispatch({ type: FETCH_PRODUCTS_CLOTHES, payload: data.data.category.products });
    });
};
export const fetchProductsTech = () => (dispatch) => {
  fetch('http://localhost:4000', {
        method: 'POST',

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            query: `query {
                category(input: { title: "tech" }) {
                  name
                  products{
                    id
                    name
                    inStock
                    gallery
                    description
                    
                    brand
                    prices{
                      currency{
                        label
                        symbol
                      }
                      amount
                    }
                    attributes{
                      id
                      name
                      type
                      items{
                        displayValue
                        value
                        id
                      }
                    }
                  }
                }
              }`
        })
        })
        .then(res => res.json())
    .then((data) => 
    //console.log(data.data.category.products)
    {
      dispatch({ type: FETCH_PRODUCTS_TECH, payload: data.data.category.products });
    });
};
