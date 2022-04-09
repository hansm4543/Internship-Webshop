import { Link } from "react-router-dom";




function Item(props){
 
    
    
    let cleanText = props.description.replace(/<\/?[^>]+(>|$)/g, "");
    if(props.instock == true){
        return (
            
            <div id="Item">
                <Link to={`item/${props.id}`}>
                <div id="pictureFrame">
                    <img className="itemPicture" src={props.pic0}></img>
                </div> 
                <div className="itemName">{props.id}</div>
                <div className="itemName">{props.brand}{props.name}</div>
                <div className="itemPrice">{props.priceUSDSymbol}{props.priceUSD}</div>
                </Link>
            </div>
            
        )
    }else{
        return (
            
                <div id="Item">
                    <Link to={`item/${props.id}`}>
                    <div id="pictureFrame">
                        <div className="itemStock">Out of Stock</div>
                        <img className="itemPicture" src={props.pic0}></img>
                    </div>
                    <div className="itemName">{props.id}</div>
                    <div className="itemName">{props.brand}{props.name}</div>
                    <div className="itemPrice">{props.priceUSDSymbol}{props.priceUSD}</div>
                    
                    </Link>
                </div>
            
        )
    }

    
}

export default Item;