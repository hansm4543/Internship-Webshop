//import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar (props){
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
                <Link to="/cart">
                <img className="cart" src="/cart.png" alt="Ostukorvi logo"></img>
                </Link>
                <hr></hr>
            </div>
        );
    }
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


            <Link to="/cart">
                <img className="cart" src="/cart.png" alt="Ostukorvi logo"></img>
            </Link>
        <hr></hr>
        </div>
    );

}

export default Navbar;