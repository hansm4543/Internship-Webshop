import React, {useEffect, useState} from "react";
import Item from "../Components/Item";
import { Link } from "react-router-dom";
import NavBar from '../Components/NavBar';
import Attributes from '../Components/Attributes';
import './SingleItem.css';
import {useContext} from 'react'
import {Context} from "../Store"
import { currencyChange } from "../Store/actions";
import GiveBackPrice from "../Components/GiveBackPrice";

let pictureslength;

function SingleItem(){
    const itemID = window.location.href.split("/item/")[1];
    //console.log(itemID);

    const [isLoading, setIsLoading] = useState(true);
    const [product, setProcuct]=useState([]);
    const [price, setPrice]=useState([]);
    const [symbol, setSymbol]=useState([]);
    const [priceUSD, setUSDPrice]=useState([]);
    const [symbolUSD, setUSDSymbol]=useState([]);
    const [priceRUB, setRUBPrice]=useState([]);
    const [symbolRUB, setRUBSymbol]=useState([]);
    const [priceJPY, setJPYPrice]=useState([]);
    const [symbolJPY, setJPYSymbol]=useState([]);
    const [priceAUD, setAUDPrice]=useState([]);
    const [symbolAUD, setAUDSymbol]=useState([]);
    const [priceGBP, setGBPPrice]=useState([]);
    const [symbolGBP, setGBPSymbol]=useState([]);
    const [description, setDescription]=useState("");
    const [pictures, setPictures]=useState([]);
    const [attributes, setAttributes]=useState(null);
    const [state, dispatch] = useContext(Context)
    console.log(state)

    useEffect(()=>{
        
        fetch('http://localhost:4000/', {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            query: `
            query {
                product(id: "`+itemID+`"){
                  name
                  inStock
                  gallery
                  description
                  category
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
              }`
        })})
        .then(res =>  res.json())
        .then(data =>{
            setUSDPrice(data.data.product.prices[0]);
            setUSDSymbol(data.data.product.prices[0].currency.symbol);
            setGBPPrice(data.data.product.prices[1]);
            setGBPSymbol(data.data.product.prices[1].currency.symbol);
            setRUBPrice(data.data.product.prices[4]);
            setRUBSymbol(data.data.product.prices[4].currency.symbol);
            setJPYPrice(data.data.product.prices[3]);
            setJPYSymbol(data.data.product.prices[3].currency.symbol);
            setAUDPrice(data.data.product.prices[2]);
            setAUDSymbol(data.data.product.prices[2].currency.symbol);
            //console.log(data.data.product);
            setProcuct(data.data.product);
            let cleanText = data.data.product.description.replace(/<\/?[^>]+(>|$)/g, "");
            setDescription(cleanText);
            setPictures(data.data.product.gallery);
            setAttributes(data.data.product.attributes);

        })
            
        
        setIsLoading(false)
        

    },[state]);

    function itemSubmitHandler(number, data){
        if(number === 1){
            console.log("Õnnestus");
            dispatch(currencyChange(data));
        }else{
            console.log("Failed");
        }

    }

    if(isLoading === true){
        return(
        <div>
            Loading...
        </div>)
    }else{
        

        if(pictures.length == 1){
            if(product.inStock == true){
                return(
                    <div >
                        <NavBar onCurrencyChange={itemSubmitHandler}/>
                        <h1 >Detailed view</h1>
                        <div className="grid-container">
                            <img style={{opacity: 0}} className="itemPicturel itemPicture1" src={pictures[1]}></img>
                            
                            
                            <img style={{opacity: 0}} className="itemPicturel itemPicture2" src={pictures[3]}></img>
                            
                            <img className="itemPicture4" src={pictures[0]}></img>
                            <img style={{opacity: 0}} className="itemPicturel itemPicture3" src={pictures[2]}></img>
                            <div className="innerdetails-grid">
                                <h2 className="brandName">{product.brand}</h2>
                                <p className="itemNamel">{product.name}</p>
                                <GiveBackPrice currency={state.currency} priceUSD={priceUSD.amount} symbolUSD={symbolUSD} priceGBP={priceGBP.amount} symbolGBP={symbolGBP} priceRUB={priceRUB.amount} symbolRUB={symbolRUB} priceAUD={priceAUD.amount} symbolAUD={symbolAUD} priceJPY={priceJPY.amount} symbolJPY={symbolJPY}/>
                                
                                <div className="allOptions">
                                    <Attributes attributes={attributes}/>
                                </div>
                                <br/>
                                <br/>
                                <div>ADD TO CART</div>
                                <br/>
                                <br/>
                                <div className="description">
                                    {description}
                                </div>
                            </div>
                        </div>
                    </div>
    
                )
            }else{
                return(
                   
                    <div >
                        <NavBar onCurrencyChange={itemSubmitHandler}/>
                        <h1 >Detailed view</h1>
                        <div className="grid-container">
                            <img style={{opacity: 0}} className="itemPicturel itemPicture1" src={pictures[1]}></img>
                            
                            
                            <img style={{opacity: 0}} className="itemPicturel itemPicture2" src={pictures[3]}></img>
                            
                            <img className="itemPicture4" src={pictures[0]}></img>
                            <img style={{opacity: 0}} className="itemPicturel itemPicture3" src={pictures[2]}></img>
                            <div className="innerdetails-grid">
                                <h2 className="brandName">{product.brand}</h2>
                                <p className="itemNamel">{product.name}</p>
                                
                                <GiveBackPrice currency={state.currency} priceUSD={priceUSD.amount} symbolUSD={symbolUSD} priceGBP={priceGBP.amount} symbolGBP={symbolGBP} priceRUB={priceRUB.amount} symbolRUB={symbolRUB} priceAUD={priceAUD.amount} symbolAUD={symbolAUD} priceJPY={priceJPY.amount} symbolJPY={symbolJPY}/>
                                <div className="allOptions">
                                    <Attributes attributes={attributes}/>
                                </div>
                                <br/>
                                <br/>
                                <div>PRODUCT IS NOT IN STOCK</div>
                                <br/>
                                <br/>
                                <div className="description">
                                    {description}
                                </div>
                            </div>
                        </div>
                    </div>
    
                )
            }

        }else if(pictures.length == 2){
            if(product.inStock == true){
                return(
                    <div >
                        <NavBar onCurrencyChange={itemSubmitHandler}/>
                        <h1 >Detailed view</h1>
                        <div className="grid-container">
                            <img className="itemPicturel itemPicture1" src={pictures[1]}></img>
                            
                            
                            <img style={{opacity: 0}} className="itemPicturel itemPicture2" src={pictures[3]}></img>
                            
                            <img className="itemPicture4" src={pictures[0]}></img>
                            <img style={{opacity: 0}} className="itemPicturel itemPicture3" src={pictures[2]}></img>
                            <div className="innerdetails-grid">
                                <h2 className="brandName">{product.brand}</h2>
                                <p className="itemNamel">{product.name}</p>
                                
                                <GiveBackPrice currency={state.currency} priceUSD={priceUSD.amount} symbolUSD={symbolUSD} priceGBP={priceGBP.amount} symbolGBP={symbolGBP} priceRUB={priceRUB.amount} symbolRUB={symbolRUB} priceAUD={priceAUD.amount} symbolAUD={symbolAUD} priceJPY={priceJPY.amount} symbolJPY={symbolJPY}/>
                                <div className="allOptions">
                                    <Attributes attributes={attributes}/>
                                </div>
                                <br/>
                                <br/>
                                <div>ADD TO CART</div>
                                <br/>
                                <br/>
                                <div className="description">
                                    {description}
                                </div>
                            </div>
                        </div>
                    </div>
    
                )
            }else{
                return(
                   
                    <div >
                        <NavBar onCurrencyChange={itemSubmitHandler}/>
                        <h1 >Detailed view</h1>
                        <div className="grid-container">
                            <img className="itemPicturel itemPicture1" src={pictures[1]}></img>
                            
                            
                            <img style={{opacity: 0}} className="itemPicturel itemPicture2" src={pictures[3]}></img>
                            
                            <img className="itemPicture4" src={pictures[0]}></img>
                            <img style={{opacity: 0}} className="itemPicturel itemPicture3" src={pictures[2]}></img>
                            <div  className="innerdetails-grid">
                                <h2 className="brandName">{product.brand}</h2>
                                <p className="itemNamel">{product.name}</p>
                                
                                <GiveBackPrice currency={state.currency} priceUSD={priceUSD.amount} symbolUSD={symbolUSD} priceGBP={priceGBP.amount} symbolGBP={symbolGBP} priceRUB={priceRUB.amount} symbolRUB={symbolRUB} priceAUD={priceAUD.amount} symbolAUD={symbolAUD} priceJPY={priceJPY.amount} symbolJPY={symbolJPY}/>
                                <div className="allOptions">
                                    <Attributes attributes={attributes}/>
                                </div>
                                <br/>
                                <br/>
                                <div>PRODUCT IS NOT IN STOCK</div>
                                <br/>
                                <br/>
                                <div className="description">
                                    {description}
                                </div>
                            </div>
                        </div>
                    </div>
    
                )
            }
        }else if(pictures.length == 3){
            if(product.inStock == true){
                return(
                    <div >
                        <NavBar onCurrencyChange={itemSubmitHandler}/>
                        <h1 >Detailed view</h1>
                        <div className="grid-container">
                            <img className="itemPicturel itemPicture1" src={pictures[1]}></img>
                            
                            
                            <img style={{opacity: 0}} className="itemPicturel itemPicture2" src={pictures[3]}></img>
                            
                            <img className="itemPicture4" src={pictures[0]}></img>
                            <img  className="itemPicturel itemPicture3" src={pictures[2]}></img>
                            <div className="innerdetails-grid">
                                <h2 className="brandName">{product.brand}</h2>
                                <p className="itemNamel">{product.name}</p>
                                
                                <GiveBackPrice currency={state.currency} priceUSD={priceUSD.amount} symbolUSD={symbolUSD} priceGBP={priceGBP.amount} symbolGBP={symbolGBP} priceRUB={priceRUB.amount} symbolRUB={symbolRUB} priceAUD={priceAUD.amount} symbolAUD={symbolAUD} priceJPY={priceJPY.amount} symbolJPY={symbolJPY}/>
                                <div className="allOptions">
                                    <Attributes attributes={attributes}/>
                                </div>
                                <br/>
                                <br/>
                                <div>ADD TO CART</div>
                                <br/>
                                <br/>
                                <div className="description">
                                    {description}
                                </div>
                            </div>
                        </div>
                    </div>
    
                )
            }else{
                return(
                   
                    <div >
                        <NavBar onCurrencyChange={itemSubmitHandler}/>
                        <h1 >Detailed view</h1>
                        <div className="grid-container">
                            <img  className="itemPicturel itemPicture1" src={pictures[1]}></img>
                            
                            
                            <img style={{opacity: 0}} className="itemPicturel itemPicture2" src={pictures[3]}></img>
                            
                            <img className="itemPicture4" src={pictures[0]}></img>
                            <img  className="itemPicturel itemPicture3" src={pictures[2]}></img>
                            <div className="innerdetails-grid">
                                <h2 className="brandName">{product.brand}</h2>
                                <p className="itemNamel">{product.name}</p>
                                
                                <GiveBackPrice currency={state.currency} priceUSD={priceUSD.amount} symbolUSD={symbolUSD} priceGBP={priceGBP.amount} symbolGBP={symbolGBP} priceRUB={priceRUB.amount} symbolRUB={symbolRUB} priceAUD={priceAUD.amount} symbolAUD={symbolAUD} priceJPY={priceJPY.amount} symbolJPY={symbolJPY}/>
                                <div className="allOptions">
                                    <Attributes attributes={attributes}/>
                                </div>
                                <br/>
                                <br/>
                                <div>PRODUCT IS NOT IN STOCK</div>
                                <br/>
                                <br/>
                                <div className="description">
                                    {description}
                                </div>
                            </div>
                        </div>
                    </div>
    
                )
            }
        }else{
            if(product.inStock == true){
                return(
                    <div >
                        <NavBar onCurrencyChange={itemSubmitHandler}/>
                        <h1 >Detailed view</h1>
                        <div className="grid-container">
                            <img className="itemPicturel itemPicture1" src={pictures[1]}></img>
                            
                            
                            <img className="itemPicturel itemPicture2" src={pictures[3]}></img>
                            
                            <img className="itemPicture4" src={pictures[0]}></img>
                            <img  className="itemPicturel itemPicture3" src={pictures[2]}></img>
                            <div className="innerdetails-grid">
                                <h2 className="brandName">{product.brand}</h2>
                                <p className="itemNamel">{product.name}</p>
                                
                                <GiveBackPrice currency={state.currency} priceUSD={priceUSD.amount} symbolUSD={symbolUSD} priceGBP={priceGBP.amount} symbolGBP={symbolGBP} priceRUB={priceRUB.amount} symbolRUB={symbolRUB} priceAUD={priceAUD.amount} symbolAUD={symbolAUD} priceJPY={priceJPY.amount} symbolJPY={symbolJPY}/>
                                <div className="allOptions">
                                    <Attributes attributes={attributes}/>
                                </div>
                                <br/>
                                <br/>
                                <div>ADD TO CART</div>
                                <br/>
                                <br/>
                                <div className="description">
                                    {description}
                                </div>
                            </div>
                        </div>
                    </div>
    
                )
            }else{
                return(
                   
                    <div >
                        <NavBar onCurrencyChange={itemSubmitHandler}/>
                        <h1 >Detailed view</h1>
                        <div className="grid-container">
                            <img className="itemPicturel itemPicture1" src={pictures[1]}></img>
                            
                            
                            <img className="itemPicturel itemPicture2" src={pictures[3]}></img>
                            
                            <img className="itemPicture4" src={pictures[0]}></img>
                            <img className="itemPicturel itemPicture3" src={pictures[2]}></img>
                            <div className="innerdetails-grid">
                                <h2 className="brandName">{product.brand}</h2>
                                <p className="itemNamel">{product.name}</p>
                                
                                <GiveBackPrice currency={state.currency} priceUSD={priceUSD.amount} symbolUSD={symbolUSD} priceGBP={priceGBP.amount} symbolGBP={symbolGBP} priceRUB={priceRUB.amount} symbolRUB={symbolRUB} priceAUD={priceAUD.amount} symbolAUD={symbolAUD} priceJPY={priceJPY.amount} symbolJPY={symbolJPY}/>
                                <div className="allOptions">
                                    <Attributes attributes={attributes}/>
                                </div>
                                <br/>
                                <br/>
                                <div>PRODUCT IS NOT IN STOCK</div>
                                <br/>
                                <br/>
                                <div className="description">
                                    {description}
                                </div>
                            </div>
                        </div>
                    </div>
    
                )
            }
        }
    }
}

export default SingleItem;