import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import { addToCart } from "../actions/cartActions";
import { fetchProductsClothes } from "../actions/productActions";
import Item from "./Item";
import './CategorieView.css';
import './SingleItem.css';
class ProductsClothes extends Component {
  componentDidMount() {
    this.props.fetchProductsClothes();
  }
  componentDidUpdate(){
    console.log(this.props.products)
  }
  render() {
    if(this.props.currency == "GBP"){
      return(
          <div className="outer-grid">
          {this.props.products.map((item) => (
          <Item 
              key={item.id}
              id={item.id}
              
              brand={item.brand} 
              instock={item.inStock} 
              description={item.description}
              price={item.prices[1].amount}
              priceSymbol={item.prices[1].currency.symbol}
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
      )
    }else if(this.props.currency == "AUD"){
        return(
            <div className="outer-grid">
            {this.props.products.map((item) => (
            <Item 
                key={item.id}
                id={item.id}
                name={item.name} 
                brand={item.brand} 
                instock={item.inStock} 
                description={item.description}
                price={item.prices[2].amount}
                priceSymbol={item.prices[2].currency.symbol}
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
        )
    }else if(this.props.currency == "JPY"){
        return(
            <div className="outer-grid">
                {this.props.products.map((item) => (
                <Item 
                    key={item.id}
                    id={item.id}
                    name={item.name} 
                    brand={item.brand} 
                    instock={item.inStock} 
                    description={item.description}
                    price={item.prices[3].amount}
                    priceSymbol={item.prices[3].currency.symbol}
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
        )
    }else if(this.props.currency == "RUB"){
        return(
            <div className="outer-grid">
                {this.props.products.map((item) => (
                <Item 
                    key={item.id}
                    id={item.id}
                    name={item.name} 
                    brand={item.brand} 
                    instock={item.inStock} 
                    description={item.description}
                    price={item.prices[4].amount}
                    priceSymbol={item.prices[4].currency.symbol}
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
        )
    }
    return(
        <div className="outer-grid">
            {this.props.products.map((item) => (
              <div>
            <Item 
                key={item.id}
                id={item.id}
                name={item.name} 
                brand={item.brand} 
                instock={item.inStock} 
                description={item.description}
                price={item.prices[0].amount}
                priceSymbol={item.prices[0].currency.symbol}
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
                button={(e) => this.props.addToCart(this.props.cartItems, item)}
                
                
                                
                />
          </div>
            ))}
        </div>

    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
  currency: state.currency.value,
});
export default connect(mapStateToProps, { fetchProductsClothes, addToCart })(ProductsClothes);
