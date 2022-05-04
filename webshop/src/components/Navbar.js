//import './Navbar.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { currencyChange } from "../actions/currencyActions";
import CartBtn from "./CartBtn";
import MiniCart from "./CartBtn";

class Navbar extends Component{
    constructor(){
        super();
        this.state={
            link: "",
        }
    }
    componentDidMount(){
        let URL = window.location.href.split("/");
        console.group(URL[3])
        this.setState({ link: URL[3] });
    }
    componentDidUpdate(){
        let URL = window.location.href.split("/");
        if(this.state.link !== URL[3]){
            console.group(URL[3])
            this.setState({ link: URL[3] });
        }
       
        
    }

    render(){
        const onPriceChange= (value) => {
            //console.log(value)
            var el = document.getElementById('currencies');
            const data = el.value.split(" ");
            console.log(data[0]);
            this.props.currencyChange(data[0]);
            //props.onCurrencyChange(1, data);
        };
        const URL = window.location.href.split("/");
        console.group(URL[3])


        if(this.props.currency==="GBP"){
            if(URL[3]===""){
                return (
                    <div className="navbar">
                        <div className='allSelected'>
                        <Link to ="/" >
                            
                                All
                        </Link>
                        </div>
                        <div className='tech'>
                            <Link to ="/tech">
                                Tech
                            </Link>
                        </div>
                        <div className='clothes'>
                        <Link to ="/clothes">
                            Clothes
                        </Link>
                        </div>
                        <Link to ="/">
                            <img className="logo" src="/shop.png" alt="Veebilehe logo"></img>
                        </Link>
                        <div className='currencies'>
                            <select onChange={onPriceChange} id="currencies">
                            <option value="USD" >$ USD</option>
                            <option value="GBP" selected>£ GBP</option>
                            <option value="AUD">A$ AUD</option>
                            <option value="JPY">¥ JPY</option>
                            <option value="RUB">₽ RUB</option>
                            </select>
                        </div>
                        <Link to="/cart">
                        <img className="cart" src="/cart.png" alt="Ostukorvi logo"></img>
                        </Link>
                        <hr></hr>
                    </div>
                );
            }else if(URL[3]==="tech"){
                return (
                    <div className="navbar">
                        <div className='all'>
                        <Link to ="/" >
                            
                                All
                        </Link>
                        </div>
                        <div className='techSelected'>
                            <Link to ="/tech">
                                Tech
                            </Link>
                        </div>
                        <div className='clothes'>
                        <Link to ="/clothes">
                            Clothes
                        </Link>
                        </div>
                        <Link to ="/">
                            <img className="logo" src="/shop.png" alt="Veebilehe logo"></img>
                        </Link>
                        <div className='currencies'>
                            <select onChange={onPriceChange}  id="currencies">
                            <option value="USD" >$ USD</option>
                            <option value="GBP" selected>£ GBP</option>
                            <option value="AUD">A$ AUD</option>
                            <option value="JPY">¥ JPY</option>
                            <option value="RUB">₽ RUB</option>
                            </select>
                        </div>
                        <Link to="/cart">
                        <img className="cart" src="/cart.png" alt="Ostukorvi logo"></img>
                        </Link>
                        <hr></hr>
                    </div>
                );
            }else if(URL[3]==="clothes"){
                return (
                    <div className="navbar">
                        <div className='all'>
                        <Link to ="/" >
                                All
                        </Link>
                        </div>
                        <div className='tech'>
                            <Link to ="/tech">
                                Tech
                            </Link>
                        </div>
                        <div className='clothesSelected'>
                        <Link to ="/clothes">
                            Clothes
                        </Link>
                        </div>
                        <Link to ="/">
                            <img className="logo" src="/shop.png" alt="Veebilehe logo"></img>
                        </Link>
                        <div className='currencies'>
                            <select onChange={onPriceChange}  id="currencies">
                            <option value="USD" >$ USD</option>
                            <option value="GBP" selected>£ GBP</option>
                            <option value="AUD">A$ AUD</option>
                            <option value="JPY">¥ JPY</option>
                            <option value="RUB">₽ RUB</option>
                            </select>
                        </div>
                        <Link to="/cart">
                        <img className="cart" src="/cart.png" alt="Ostukorvi logo"></img>
                        </Link>
                        <hr></hr>
                    </div>
                );
            }else{
            return (
                <div className="navbar">
                    <Link to ="/" className='all'>
                        All
                    </Link>
                    <Link to ="/tech" className='tech'>
                        Tech
                    </Link>
                    <Link to ="/clothes" className='clothes'>
                        Clothes
                    </Link>
                    <Link to ="/">
                        <img className="logo" src="/shop.png" alt="Veebilehe logo"></img>
                    </Link>
                    <div className='currencies'>
                            <select onChange={onPriceChange} id="currencies">
                            <option value="USD">$ USD</option>
                            <option value="GBP" selected>£ GBP</option>
                            <option value="AUD">A$ AUD</option>
                            <option value="JPY">¥ JPY</option>
                            <option value="RUB">₽ RUB</option>
                            </select>
                        </div>
        
                    <Link to="/cart">
                        <img className="cart" src="/cart.png" alt="Ostukorvi logo"></img>
                    </Link>
                <hr></hr>
                </div>
            );
            }
        }else if(this.props.currency==="AUD"){
            if(URL[3]===""){
                return (
                    <div className="navbar">
                        <div className='allSelected'>
                        <Link to ="/" >
                            
                                All
                        </Link>
                        </div>
                        <div className='tech'>
                            <Link to ="/tech">
                                Tech
                            </Link>
                        </div>
                        <div className='clothes'>
                        <Link to ="/clothes">
                            Clothes
                        </Link>
                        </div>
                        <Link to ="/">
                            <img className="logo" src="/shop.png" alt="Veebilehe logo"></img>
                        </Link>
                        <div className='currencies'>
                            <select onChange={onPriceChange} id="currencies">
                            <option value="USD" >$ USD</option>
                            <option value="GBP">£ GBP</option>
                            <option value="AUD" selected>A$ AUD</option>
                            <option value="JPY">¥ JPY</option>
                            <option value="RUB">₽ RUB</option>
                            </select>
                        </div>
                        <Link to="/cart">
                        <img className="cart" src="/cart.png" alt="Ostukorvi logo"></img>
                        </Link>
                        <hr></hr>
                    </div>
                );
            }else if(URL[3]==="tech"){
                return (
                    <div className="navbar">
                        <div className='all'>
                        <Link to ="/" >
                            
                                All
                        </Link>
                        </div>
                        <div className='techSelected'>
                            <Link to ="/tech">
                                Tech
                            </Link>
                        </div>
                        <div className='clothes'>
                        <Link to ="/clothes">
                            Clothes
                        </Link>
                        </div>
                        <Link to ="/">
                            <img className="logo" src="/shop.png" alt="Veebilehe logo"></img>
                        </Link>
                        <div className='currencies'>
                            <select onChange={onPriceChange}  id="currencies">
                            <option value="USD" >$ USD</option>
                            <option value="GBP">£ GBP</option>
                            <option value="AUD" selected>A$ AUD</option>
                            <option value="JPY">¥ JPY</option>
                            <option value="RUB">₽ RUB</option>
                            </select>
                        </div>
                        <Link to="/cart">
                        <img className="cart" src="/cart.png" alt="Ostukorvi logo"></img>
                        </Link>
                        <hr></hr>
                    </div>
                );
            }else if(URL[3]==="clothes"){
                return (
                    <div className="navbar">
                        <div className='all'>
                        <Link to ="/" >
                                All
                        </Link>
                        </div>
                        <div className='tech'>
                            <Link to ="/tech">
                                Tech
                            </Link>
                        </div>
                        <div className='clothesSelected'>
                        <Link to ="/clothes">
                            Clothes
                        </Link>
                        </div>
                        <Link to ="/">
                            <img className="logo" src="/shop.png" alt="Veebilehe logo"></img>
                        </Link>
                        <div className='currencies'>
                            <select onChange={onPriceChange}  id="currencies">
                            <option value="USD" >$ USD</option>
                            <option value="GBP">£ GBP</option>
                            <option value="AUD" selected>A$ AUD</option>
                            <option value="JPY">¥ JPY</option>
                            <option value="RUB">₽ RUB</option>
                            </select>
                        </div>
                        <Link to="/cart">
                        <img className="cart" src="/cart.png" alt="Ostukorvi logo"></img>
                        </Link>
                        <hr></hr>
                    </div>
                );
            }else{
                return (
                    <div className="navbar">
                        <Link to ="/" className='all'>
                            All
                        </Link>
                        <Link to ="/tech" className='tech'>
                            Tech
                        </Link>
                        <Link to ="/clothes" className='clothes'>
                            Clothes
                        </Link>
                        <Link to ="/">
                            <img className="logo" src="/shop.png" alt="Veebilehe logo"></img>
                        </Link>
                        <div className='currencies'>
                                <select onChange={onPriceChange} id="currencies">
                                <option value="USD" >$ USD</option>
                                <option value="GBP">£ GBP</option>
                                <option value="AUD" selected>A$ AUD</option>
                                <option value="JPY">¥ JPY</option>
                                <option value="RUB">₽ RUB</option>
                                </select>
                            </div>
            
                        <Link to="/cart">
                            <img className="cart" src="/cart.png" alt="Ostukorvi logo"></img>
                        </Link>
                    <hr></hr>
                    </div>
                );
            }
        }else if(this.props.currency==="JPY"){
            if(URL[3]===""){
                return (
                    <div className="navbar">
                        <div className='allSelected'>
                        <Link to ="/" >
                            
                                All
                        </Link>
                        </div>
                        <div className='tech'>
                            <Link to ="/tech">
                                Tech
                            </Link>
                        </div>
                        <div className='clothes'>
                        <Link to ="/clothes">
                            Clothes
                        </Link>
                        </div>
                        <Link to ="/">
                            <img className="logo" src="/shop.png" alt="Veebilehe logo"></img>
                        </Link>
                        <div className='currencies'>
                            <select onChange={onPriceChange} id="currencies">
                            <option value="USD" >$ USD</option>
                            <option value="GBP">£ GBP</option>
                            <option value="AUD">A$ AUD</option>
                            <option value="JPY" selected>¥ JPY</option>
                            <option value="RUB">₽ RUB</option>
                            </select>
                        </div>
                        <Link to="/cart">
                        <img className="cart" src="/cart.png" alt="Ostukorvi logo"></img>
                        </Link>
                        <hr></hr>
                    </div>
                );
            }else if(URL[3]==="tech"){
                return (
                    <div className="navbar">
                        <div className='all'>
                        <Link to ="/" >
                            
                                All
                        </Link>
                        </div>
                        <div className='techSelected'>
                            <Link to ="/tech">
                                Tech
                            </Link>
                        </div>
                        <div className='clothes'>
                        <Link to ="/clothes">
                            Clothes
                        </Link>
                        </div>
                        <Link to ="/">
                            <img className="logo" src="/shop.png" alt="Veebilehe logo"></img>
                        </Link>
                        <div className='currencies'>
                            <select onChange={onPriceChange}  id="currencies">
                            <option value="USD" >$ USD</option>
                            <option value="GBP">£ GBP</option>
                            <option value="AUD">A$ AUD</option>
                            <option value="JPY" selected>¥ JPY</option>
                            <option value="RUB">₽ RUB</option>
                            </select>
                        </div>
                        <Link to="/cart">
                        <img className="cart" src="/cart.png" alt="Ostukorvi logo"></img>
                        </Link>
                        <hr></hr>
                    </div>
                );
            }else if(URL[3]==="clothes"){
                return (
                    <div className="navbar">
                        <div className='all'>
                        <Link to ="/" >
                                All
                        </Link>
                        </div>
                        <div className='tech'>
                            <Link to ="/tech">
                                Tech
                            </Link>
                        </div>
                        <div className='clothesSelected'>
                        <Link to ="/clothes">
                            Clothes
                        </Link>
                        </div>
                        <Link to ="/">
                            <img className="logo" src="/shop.png" alt="Veebilehe logo"></img>
                        </Link>
                        <div className='currencies'>
                            <select onChange={onPriceChange}  id="currencies">
                            <option value="USD" >$ USD</option>
                            <option value="GBP">£ GBP</option>
                            <option value="AUD">A$ AUD</option>
                            <option value="JPY" selected>¥ JPY</option>
                            <option value="RUB">₽ RUB</option>
                            </select>
                        </div>
                        <Link to="/cart">
                        <img className="cart" src="/cart.png" alt="Ostukorvi logo"></img>
                        </Link>
                        <hr></hr>
                    </div>
                );
            }else{
            return (
                <div className="navbar">
                    <Link to ="/" className='all'>
                        All
                    </Link>
                    <Link to ="/tech" className='tech'>
                        Tech
                    </Link>
                    <Link to ="/clothes" className='clothes'>
                        Clothes
                    </Link>
                    <Link to ="/">
                        <img className="logo" src="/shop.png" alt="Veebilehe logo"></img>
                    </Link>
                    <div className='currencies'>
                            <select onChange={onPriceChange} id="currencies">
                            <option value="USD" >$ USD</option>
                            <option value="GBP">£ GBP</option>
                            <option value="AUD">A$ AUD</option>
                            <option value="JPY" selected>¥ JPY</option>
                            <option value="RUB">₽ RUB</option>
                            </select>
                        </div>
        
                    <Link to="/cart">
                        <img className="cart" src="/cart.png" alt="Ostukorvi logo"></img>
                    </Link>
                <hr></hr>
                </div>
            );
            }
        }else if(this.props.currency==="RUB"){
            if(URL[3]===""){
                return (
                    <div className="navbar">
                        <div className='allSelected'>
                        <Link to ="/" >
                            
                                All
                        </Link>
                        </div>
                        <div className='tech'>
                            <Link to ="/tech">
                                Tech
                            </Link>
                        </div>
                        <div className='clothes'>
                        <Link to ="/clothes">
                            Clothes
                        </Link>
                        </div>
                        <Link to ="/">
                            <img className="logo" src="/shop.png" alt="Veebilehe logo"></img>
                        </Link>
                        <div className='currencies'>
                            <select onChange={onPriceChange} id="currencies">
                            <option value="USD" >$ USD</option>
                            <option value="GBP">£ GBP</option>
                            <option value="AUD">A$ AUD</option>
                            <option value="JPY">¥ JPY</option>
                            <option value="RUB" selected>₽ RUB</option>
                            </select>
                        </div>
                        <Link to="/cart">
                        <img className="cart" src="/cart.png" alt="Ostukorvi logo"></img>
                        </Link>
                        <hr></hr>
                    </div>
                );
            }else if(URL[3]==="tech"){
                return (
                    <div className="navbar">
                        <div className='all'>
                        <Link to ="/" >
                            
                                All
                        </Link>
                        </div>
                        <div className='techSelected'>
                            <Link to ="/tech">
                                Tech
                            </Link>
                        </div>
                        <div className='clothes'>
                        <Link to ="/clothes">
                            Clothes
                        </Link>
                        </div>
                        <Link to ="/">
                            <img className="logo" src="/shop.png" alt="Veebilehe logo"></img>
                        </Link>
                        <div className='currencies'>
                            <select onChange={onPriceChange}  id="currencies">
                            <option value="USD" >$ USD</option>
                            <option value="GBP">£ GBP</option>
                            <option value="AUD">A$ AUD</option>
                            <option value="JPY">¥ JPY</option>
                            <option value="RUB" selected>₽ RUB</option>
                            </select>
                        </div>
                        <Link to="/cart">
                        <img className="cart" src="/cart.png" alt="Ostukorvi logo"></img>
                        </Link>
                        <hr></hr>
                    </div>
                );
            }else if(URL[3]==="clothes"){
                return (
                    <div className="navbar">
                        <div className='all'>
                        <Link to ="/" >
                                All
                        </Link>
                        </div>
                        <div className='tech'>
                            <Link to ="/tech">
                                Tech
                            </Link>
                        </div>
                        <div className='clothesSelected'>
                        <Link to ="/clothes">
                            Clothes
                        </Link>
                        </div>
                        <Link to ="/">
                            <img className="logo" src="/shop.png" alt="Veebilehe logo"></img>
                        </Link>
                        <div className='currencies'>
                            <select onChange={onPriceChange}  id="currencies">
                            <option value="USD" >$ USD</option>
                            <option value="GBP">£ GBP</option>
                            <option value="AUD">A$ AUD</option>
                            <option value="JPY">¥ JPY</option>
                            <option value="RUB" selected>₽ RUB</option>
                            </select>
                        </div>
                        <Link to="/cart">
                        <img className="cart" src="/cart.png" alt="Ostukorvi logo"></img>
                        </Link>
                        <hr></hr>
                    </div>
                );
            }else{
            return (
                <div className="navbar">
                    <Link to ="/" className='all'>
                        All
                    </Link>
                    <Link to ="/tech" className='tech'>
                        Tech
                    </Link>
                    <Link to ="/clothes" className='clothes'>
                        Clothes
                    </Link>
                    <Link to ="/">
                        <img className="logo" src="/shop.png" alt="Veebilehe logo"></img>
                    </Link>
                    <div className='currencies'>
                            <select onChange={onPriceChange} id="currencies">
                            <option value="USD" >$ USD</option>
                            <option value="GBP">£ GBP</option>
                            <option value="AUD">A$ AUD</option>
                            <option value="JPY">¥ JPY</option>
                            <option value="RUB" selected>₽ RUB</option>
                            </select>
                        </div>
        
                    <Link to="/cart">
                        <img className="cart" src="/cart.png" alt="Ostukorvi logo"></img>
                    </Link>
                <hr></hr>
                </div>
            );
            }
        }else{
            if(URL[3]===""){
                return (
                    <div className="navbar">
                        <div className='allSelected'>
                        <Link to ="/" >
                            
                                All
                        </Link>
                        </div>
                        <div className='tech'>
                            <Link to ="/tech">
                                Tech
                            </Link>
                        </div>
                        <div className='clothes'>
                        <Link to ="/clothes">
                            Clothes
                        </Link>
                        </div>
                        <Link to ="/">
                            <img className="logo" src="/shop.png" alt="Veebilehe logo"></img>
                        </Link>
                        <div className='currencies'>
                            <select onChange={onPriceChange} id="currencies">
                            <option value="USD" selected>$ USD</option>
                            <option value="GBP">£ GBP</option>
                            <option value="AUD">A$ AUD</option>
                            <option value="JPY">¥ JPY</option>
                            <option value="RUB">₽ RUB</option>
                            </select>
                        </div>
                        <CartBtn/>
                        <hr></hr>
                    </div>
                );
            }else if(URL[3]==="tech"){
                return (
                    <div className="navbar">
                        <div className='all'>
                        <Link to ="/" >
                            
                                All
                        </Link>
                        </div>
                        <div className='techSelected'>
                            <Link to ="/tech">
                                Tech
                            </Link>
                        </div>
                        <div className='clothes'>
                        <Link to ="/clothes">
                            Clothes
                        </Link>
                        </div>
                        <Link to ="/">
                            <img className="logo" src="/shop.png" alt="Veebilehe logo"></img>
                        </Link>
                        <div className='currencies'>
                            <select onChange={onPriceChange}  id="currencies">
                            <option value="USD" selected>$ USD</option>
                            <option value="GBP">£ GBP</option>
                            <option value="AUD">A$ AUD</option>
                            <option value="JPY">¥ JPY</option>
                            <option value="RUB">₽ RUB</option>
                            </select>
                        </div>
                        <Link to="/cart">
                        <img className="cart" src="/cart.png" alt="Ostukorvi logo"></img>
                        </Link>
                        <hr></hr>
                    </div>
                );
            }else if(URL[3]==="clothes"){
                return (
                    <div className="navbar">
                        <div className='all'>
                        <Link to ="/" >
                                All
                        </Link>
                        </div>
                        <div className='tech'>
                            <Link to ="/tech">
                                Tech
                            </Link>
                        </div>
                        <div className='clothesSelected'>
                        <Link to ="/clothes">
                            Clothes
                        </Link>
                        </div>
                        <Link to ="/">
                            <img className="logo" src="/shop.png" alt="Veebilehe logo"></img>
                        </Link>
                        <div className='currencies'>
                            <select onChange={onPriceChange}  id="currencies">
                            <option value="USD" selected>$ USD</option>
                            <option value="GBP">£ GBP</option>
                            <option value="AUD">A$ AUD</option>
                            <option value="JPY">¥ JPY</option>
                            <option value="RUB">₽ RUB</option>
                            </select>
                        </div>
                        <Link to="/cart">
                        <img className="cart" src="/cart.png" alt="Ostukorvi logo"></img>
                        </Link>
                        <hr></hr>
                    </div>
                );
            }else{
            return (
                <div className="navbar">
                    <Link to ="/" className='all'>
                        All
                    </Link>
                    <Link to ="/tech" className='tech'>
                        Tech
                    </Link>
                    <Link to ="/clothes" className='clothes'>
                        Clothes
                    </Link>
                    <Link to ="/">
                        <img className="logo" src="/shop.png" alt="Veebilehe logo"></img>
                    </Link>
                    <div className='currencies'>
                            <select onChange={onPriceChange} id="currencies">
                            <option value="USD" selected>$ USD</option>
                            <option value="GBP">£ GBP</option>
                            <option value="AUD">A$ AUD</option>
                            <option value="JPY">¥ JPY</option>
                            <option value="RUB">₽ RUB</option>
                            </select>
                        </div>
        
                    <Link to="/cart">
                        <img className="cart" src="/cart.png" alt="Ostukorvi logo"></img>
                    </Link>
                <hr></hr>
                </div>
            );
            }
        }
    }
    
    
}

const mapStateToProps = (state) => ({
    products: state.products.items,
    cartItems: state.cart.items,
    currency: state.currency.value,
  });
export default connect(mapStateToProps, {currencyChange})(Navbar);
  