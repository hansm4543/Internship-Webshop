import { Link } from "react-router-dom";




function Item(props){
 
    
    
    let cleanText = props.description.replace(/<\/?[^>]+(>|$)/g, "");
    if(props.instock == true){
        return (
            <div id="Item">
                
                <div className="itemName">{props.id}</div>
                <div className="itemName">{props.name}</div>
                <div className="itemBrand">{props.brand}</div>
                <div className="itemDescription">{cleanText}</div>
                <div className="itemPrice">{props.priceUSDSymbol}{props.priceUSD}</div>
                <div id="pictureFrame">
                    <img className="itemPicture" src={props.pic0}></img>
                </div> 
            </div>
        )
    }else{
        return (
            <div id="Item">
                
                <div className="itemName">{props.id}</div>
                <div className="itemName">{props.name}</div>
                <div className="itemBrand">{props.brand}</div>
                <div className="itemDescription">{cleanText}</div>
                <div className="itemPrice">{props.priceUSDSymbol}{props.priceUSD}</div>
                <div id="pictureFrame">
                    <div className="itemStock">Out of Stock</div>
                    <img className="itemPicture" src={props.pic0}></img>
                </div> 
                    
            </div>
        )
    }

    
}

export default Item;