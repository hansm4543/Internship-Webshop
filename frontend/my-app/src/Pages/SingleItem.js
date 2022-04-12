import React, {useEffect, useState} from "react";
import Item from "../Components/Item";
import { Link } from "react-router-dom";
import NavBar from '../Components/NavBar';
import Attributes from '../Components/Attributes';
import './SingleItem.css';

let pictureslength;

function SingleItem(){
    const itemID = window.location.href.split("/item/")[1];
    //console.log(itemID);

    const [isLoading, setIsLoading] = useState(true);
    const [product, setProcuct]=useState([]);
    const [price, setPrice]=useState([]);
    const [symbol, setSymbol]=useState([]);
    const [description, setDescription]=useState("");
    const [pictures, setPictures]=useState([]);
    const [attributes, setAttributes]=useState(null);
    
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
            console.log(data.data.product);
            setProcuct(data.data.product);
            setPrice(data.data.product.prices[0]);
            setSymbol(data.data.product.prices[0].currency.symbol);
            let cleanText = data.data.product.description.replace(/<\/?[^>]+(>|$)/g, "");
            setDescription(cleanText);
            setPictures(data.data.product.gallery);
            setAttributes(data.data.product.attributes);

        })
            
        
        setIsLoading(false)
        

    },[]);

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
                        <NavBar/>
                        <h1 >Detailed view</h1>
                        <div className="grid-container">
                            <img style={{opacity: 0}} className="itemPicturel itemPicture1" src={pictures[1]}></img>
                            
                            
                            <img style={{opacity: 0}} className="itemPicturel itemPicture2" src={pictures[3]}></img>
                            
                            <img className="itemPicture4" src={pictures[0]}></img>
                            <img style={{opacity: 0}} className="itemPicturel itemPicture3" src={pictures[2]}></img>
                            <div className="innerdetails-grid">
                                <h2 className="brandName">{product.brand}</h2>
                                <p className="itemNamel">{product.name}</p>
                                
                                <p className="price">{symbol}{price.amount}</p>
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
                        <NavBar/>
                        <h1 >Detailed view</h1>
                        <div className="grid-container">
                            <img style={{opacity: 0}} className="itemPicturel itemPicture1" src={pictures[1]}></img>
                            
                            
                            <img style={{opacity: 0}} className="itemPicturel itemPicture2" src={pictures[3]}></img>
                            
                            <img className="itemPicture4" src={pictures[0]}></img>
                            <img style={{opacity: 0}} className="itemPicturel itemPicture3" src={pictures[2]}></img>
                            <div className="innerdetails-grid">
                                <h2 className="brandName">{product.brand}</h2>
                                <p className="itemNamel">{product.name}</p>
                                
                                <p className="price">{symbol}{price.amount}</p>
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
                        <NavBar/>
                        <h1 >Detailed view</h1>
                        <div className="grid-container">
                            <img className="itemPicturel itemPicture1" src={pictures[1]}></img>
                            
                            
                            <img style={{opacity: 0}} className="itemPicturel itemPicture2" src={pictures[3]}></img>
                            
                            <img className="itemPicture4" src={pictures[0]}></img>
                            <img style={{opacity: 0}} className="itemPicturel itemPicture3" src={pictures[2]}></img>
                            <div className="innerdetails-grid">
                                <h2 className="brandName">{product.brand}</h2>
                                <p className="itemNamel">{product.name}</p>
                                
                                <p className="price">{symbol}{price.amount}</p>
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
                        <NavBar/>
                        <h1 >Detailed view</h1>
                        <div className="grid-container">
                            <img className="itemPicturel itemPicture1" src={pictures[1]}></img>
                            
                            
                            <img style={{opacity: 0}} className="itemPicturel itemPicture2" src={pictures[3]}></img>
                            
                            <img className="itemPicture4" src={pictures[0]}></img>
                            <img style={{opacity: 0}} className="itemPicturel itemPicture3" src={pictures[2]}></img>
                            <div  className="innerdetails-grid">
                                <h2 className="brandName">{product.brand}</h2>
                                <p className="itemNamel">{product.name}</p>
                                
                                <p className="price">{symbol}{price.amount}</p>
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
                        <NavBar/>
                        <h1 >Detailed view</h1>
                        <div className="grid-container">
                            <img className="itemPicturel itemPicture1" src={pictures[1]}></img>
                            
                            
                            <img style={{opacity: 0}} className="itemPicturel itemPicture2" src={pictures[3]}></img>
                            
                            <img className="itemPicture4" src={pictures[0]}></img>
                            <img  className="itemPicturel itemPicture3" src={pictures[2]}></img>
                            <div className="innerdetails-grid">
                                <h2 className="brandName">{product.brand}</h2>
                                <p className="itemNamel">{product.name}</p>
                                
                                <p className="price">{symbol}{price.amount}</p>
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
                        <NavBar/>
                        <h1 >Detailed view</h1>
                        <div className="grid-container">
                            <img  className="itemPicturel itemPicture1" src={pictures[1]}></img>
                            
                            
                            <img style={{opacity: 0}} className="itemPicturel itemPicture2" src={pictures[3]}></img>
                            
                            <img className="itemPicture4" src={pictures[0]}></img>
                            <img  className="itemPicturel itemPicture3" src={pictures[2]}></img>
                            <div className="innerdetails-grid">
                                <h2 className="brandName">{product.brand}</h2>
                                <p className="itemNamel">{product.name}</p>
                                
                                <p className="price">{symbol}{price.amount}</p>
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
                        <NavBar/>
                        <h1 >Detailed view</h1>
                        <div className="grid-container">
                            <img className="itemPicturel itemPicture1" src={pictures[1]}></img>
                            
                            
                            <img className="itemPicturel itemPicture2" src={pictures[3]}></img>
                            
                            <img className="itemPicture4" src={pictures[0]}></img>
                            <img  className="itemPicturel itemPicture3" src={pictures[2]}></img>
                            <div className="innerdetails-grid">
                                <h2 className="brandName">{product.brand}</h2>
                                <p className="itemNamel">{product.name}</p>
                                
                                <p className="price">{symbol}{price.amount}</p>
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
                        <NavBar/>
                        <h1 >Detailed view</h1>
                        <div className="grid-container">
                            <img className="itemPicturel itemPicture1" src={pictures[1]}></img>
                            
                            
                            <img className="itemPicturel itemPicture2" src={pictures[3]}></img>
                            
                            <img className="itemPicture4" src={pictures[0]}></img>
                            <img className="itemPicturel itemPicture3" src={pictures[2]}></img>
                            <div className="innerdetails-grid">
                                <h2 className="brandName">{product.brand}</h2>
                                <p className="itemNamel">{product.name}</p>
                                
                                <p className="price">{symbol}{price.amount}</p>
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