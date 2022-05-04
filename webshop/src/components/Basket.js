import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { currencyChange } from "../actions/currencyActions";

import Attributes from './Attributes';
import GiveBackPrice from "./GiveBackPrice";
let currencyvariable;
let currencysymbolvariables;
class Basket extends Component {
  render() {
    const { cartItems } = this.props;
    if(cartItems === undefined){
      return <div className="alert alert-info">
              "Basket is empty"
              </div>
    }
    if(this.props.currency==="USD"){
      currencyvariable = 0
      currencysymbolvariables = "$"
    }else if(this.props.currency==="GBP"){
      currencyvariable = 1
      currencysymbolvariables = "£"
    }else if(this.props.currency==="AUD"){
      currencyvariable = 2
      currencysymbolvariables = "A$"
    }else if(this.props.currency==="JPY"){
      currencyvariable = 3
      currencysymbolvariables = "¥"
    }else if(this.props.currency==="RUB"){
      currencyvariable = 4
      currencysymbolvariables = "₽"
    }

    return (
      
      <div className="alert alert-info">
        {cartItems.length === 0 ? (
          "Basket is empty"
        ) : (
          <div>
            You have {cartItems.length} items in the basket. <hr />
          </div>
        )}
        {cartItems.length > 0 && (
          <div>
              {cartItems.map((item) => (
                 
        
                <div id={item.id}>
                  <img style={{padding: 10}} className="itemPicture" src={item.gallery[0]}></img>
                  <div className="itemName">{this.props.brand}{this.props.name}</div>
                  <GiveBackPrice currency={this.props.currency}  priceUSD={item.prices[0].amount} symbolUSD={item.prices[0].currency.symbol} priceGBP={item.prices[1].amount} symbolGBP={item.prices[1].currency.symbol} priceRUB={item.prices[4].amount} symbolRUB={item.prices[4].currency.symbol} priceAUD={item.prices[2].amount} symbolAUD={item.prices[2].currency.symbol} priceJPY={item.prices[3].amount} symbolJPY={item.prices[3].currency.symbol}/>
                  <div className="allOptions">
                    <Attributes attributes={item.attributes}/>
                  </div>
                  <br></br>
                  <button style={{ float: "left" }}onClick={(e) =>this.props.removeFromCart(this.props.cartItems, item)}>Remove Item</button>
                  <button style={{ float: "left" }} onClick={(e) => this.props.addToCart(this.props.cartItems, item)}>Add Item </button>
                  
                  <br />
                  <p>Item count: {item.count}</p>

                </div>
              ))}


            <b>
              Sum:{" "}
              {(
                cartItems.reduce((a, c) => a + c.prices[currencyvariable].amount * c.count, 0)
              )}{" "}{currencysymbolvariables}{" "}
            </b>
            <button
              onClick={() => alert("Todo: Implement checkout page.")}
              className="btn btn-primary"
            >
              checkout
            </button>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.items,
  cartItems: state.cart.items,
  currency: state.currency.value,
});
export default connect(mapStateToProps, { addToCart, removeFromCart, currencyChange })(Basket);