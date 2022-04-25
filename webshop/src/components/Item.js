import { Link } from "react-router-dom";
import React, { Component } from "react";




class Item extends Component{
    
    render(){
    console.log(this.props)
    let cleanText = this.props.description.replace(/<\/?[^>]+(>|$)/g, "");
    if(this.props.instock == true){
        return (
            
            <div id="Item" className="inner-grid">
                <Link style={{ textDecoration: 'none', color: 'none'}} to={`/item/${this.props.id}`}>
                <div id="item1">
                    
                    <img style={{padding: 10}} className="itemPicture" src={this.props.pic0}></img>
                    
                </div> 
                <div id="item1">
                        <div className="itemName">{this.props.brand}{this.props.name}</div>
                        <div className="itemPrice">{this.props.priceSymbol}{this.props.price}</div>
                </div>
                </Link>
                <button className="addToCartBTN" onClick={this.props.button}>Add to cart </button>
            </div>
            
        )
    }else{
        return (
            
                <div id="Item" className="inner-grid">
                    <Link style={{ textDecoration: 'none', color: 'none'}} to={`/item/${this.props.id}`}>
                    <div id="item1" >
                        <div className="container">
                        <img style={{opacity: 0.5, padding: 10}} className="itemPicture" src={this.props.pic0}></img>
                        <div className="itemStock centered">Out of Stock</div>
                        </div>

                    </div>
                    <div id="item1">
                        <div className="itemName">{this.props.brand}{this.props.name}</div>
                        <div className="itemPrice">{this.props.priceSymbol}{this.props.price}</div>
                    </div>
                    </Link>
                    
                </div>
            
        )
    }

}
}

export default Item;