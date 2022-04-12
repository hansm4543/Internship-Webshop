//import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar (props){
    //console.log(props)
    const onPriceChange= (value) => {
        //console.log(value)
        var el = document.getElementById('currencies');
        const data = el.value.split(" ");
        //console.log(data);
        props.onCurrencyChange(1, data);
    };

    if(props.all == true){
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
                <Link to="/cart">
                <img className="cart" src="/cart.png" alt="Ostukorvi logo"></img>
                </Link>
                <hr></hr>
            </div>
        );
    }else if(props.tech == true){
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
    }else if(props.clothes == true){
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

export default Navbar;