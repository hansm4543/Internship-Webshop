import './MiniCart.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { currencyChange } from "../actions/currencyActions";
import MiniCart from './MiniCart';

class CartBtn extends Component{

    render(){
        return(
            <div class="dropdown">
            <Link to="/cart">
            <img className="cart" src="/cart.png" alt="Ostukorvi logo"></img>
            </Link>
            <div class="dropdown-content">
                <MiniCart/>
            </div>
            </div>
            
        )
    }
    
    
}

const mapStateToProps = (state) => ({
    products: state.products.items,
    cartItems: state.cart.items,
    currency: state.currency.value,
});
export default connect(mapStateToProps, {currencyChange})(CartBtn);
  