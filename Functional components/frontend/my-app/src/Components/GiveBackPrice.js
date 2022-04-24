

function GiveBackPrice(props){
    //console.log("olensiin")
    //console.log(props)
    //console.log(props.currency.data[0])
    if(props.currency.data[0] == "AUD"){
        return(

            <div>
                <p className="price">{props.symbolAUD} {props.priceAUD}</p>
            </div>
        )
    }else if(props.currency.data[0] == "RUB"){
        return(

            <div>
                <p className="price">{props.symbolRUB} {props.priceRUB}</p>
            </div>
        )
    }else if(props.currency.data[0] == "JPY"){
        return(

            <div>
                <p className="price">{props.symbolJPY} {props.priceJPY}</p>
            </div>
        )
    }else if(props.currency.data[0] == "GBP"){
        return(

            <div>
                <p className="price">{props.symbolGBP} {props.priceGBP}</p>
            </div>
        )
    }else{

        return(

            <div>
                <p className="price">{props.symbolUSD} {props.priceUSD}</p>
            </div>
        )
    }

}

export default GiveBackPrice;