import Item from "./Item";

// [{1}.{2},{3}].Map({1})=>isAddToCartButton
// [{1}.{2},{3}].Map({2})=>)
// [{1}.{2},{3}].Map({3})=>)


function ItemList(props){
    console.log(props.items);
    return(
        <div>
            {props.items.map((item) => (
            <Item 
                key={item.id}
                id={item.id}
                name={item.name} 
                brand={item.brand} 
                instock={item.inStock} 
                description={item.description}
                priceUSD={item.prices[0].amount}
                priceUSDSymbol={item.prices[0].currency.symbol}
                priceGPB={item.prices[1].amount}
                priceGPBSymbol={item.prices[1].currency.symbol}
                priceAUD={item.prices[2].amount}
                priceAUDSymbol={item.prices[2].currency.symbol}
                priceJPY={item.prices[3].amount}
                priceJPYSymbol={item.prices[3].currency.symbol}
                priceRUB={item.prices[4].amount}
                priceRUBSymbol={item.prices[4].currency.symbol}
                pic0={item.gallery[0]}
                pic1={item.gallery[1]}
                pic2={item.gallery[2]}
                pic3={item.gallery[3]}
                pic4={item.gallery[4]}
                pic5={item.gallery[5]}
                pic6={item.gallery[6]}
                
                
                
                                
                />
            ))}
        </div>

    );
}

export default ItemList; 