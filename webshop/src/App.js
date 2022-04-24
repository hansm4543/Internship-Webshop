import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Products from "./components/Products";
import ProductsClothes from "./components/ProductsClothes";
import ProductsTech from "./components/ProductsTech";
import Basket from "./components/Basket";
import Navbar from "./components/Navbar";
import SingleItem from "./components/SingleItem";
import store from "./store";
//import "./App.css";
//import Copyright from "./components/Copyright";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        
        
        <BrowserRouter>
        <Navbar/>
  
        <Routes>
          <Route exact path="/" element={<Products/>}/>
          <Route exact path="/clothes" element={<ProductsClothes/>}/>
          <Route exact path="/tech" element={<ProductsTech/>}/>
          <Route exact path="/cart" element={<Basket/>}/>
          <Route exact path='/item/:itemId' element={<SingleItem/>}/>
          
        </Routes>
  
          
  
  
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
