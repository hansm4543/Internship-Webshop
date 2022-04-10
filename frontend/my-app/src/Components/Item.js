import { Link } from "react-router-dom";




function Item(props){
 
    
    
    let cleanText = props.description.replace(/<\/?[^>]+(>|$)/g, "");
    if(props.instock == true){
        return (
            
            <div id="Item" className="inner-grid">
                <Link style={{ textDecoration: 'none', color: 'none'}} to={`item/${props.id}`}>
                <div id="item1">
                    
                    <img style={{padding: 10}} className="itemPicture" src={props.pic0}></img>
                    
                </div> 
                <div id="item1">
                        <div className="itemName">{props.brand}{props.name}</div>
                        <div className="itemPrice">{props.priceUSDSymbol}{props.priceUSD}</div>
                </div>
                </Link>
            </div>
            
        )
    }else{
        return (
            
                <div id="Item" className="inner-grid">
                    <Link style={{ textDecoration: 'none', color: 'none'}} to={`item/${props.id}`}>
                    <div id="item1" >
                        <div className="container">
                        <img style={{opacity: 0.5, padding: 10}} className="itemPicture" src={props.pic0}></img>
                        <div className="itemStock centered">Out of Stock</div>
                        </div>

                    </div>
                    <div id="item1">
                        <div className="itemName">{props.brand}{props.name}</div>
                        <div className="itemPrice">{props.priceUSDSymbol}{props.priceUSD}</div>
                    </div>
                    </Link>
                    
                </div>
            
        )
    }

    
}

export default Item;