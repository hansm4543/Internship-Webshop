import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
//import Empty from "./Pages/CategorieView";
import Cart from "./Pages/Cart";
import SingleItem from "./Pages/SingleItem";
//import HomePage from "./Pages/HomePage";
import GetAll from "./Pages/GetAll";
import GetTech from "./Pages/GetTech";
import GetClothes from "./Pages/GetClothes";



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        
  
        <Routes>
          <Route exact path="/" element={<GetAll/>}/>
          <Route exact path="/clothes" element={<GetClothes/>}/>
          <Route exact path="/tech" element={<GetTech/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path='/item/:itemId' element={<SingleItem/>}/>
          
        </Routes>
  
          
  
  
      </BrowserRouter>
    );
  }
}
/*
https://www.youtube.com/watch?v=LZKsD_5ttZ4
https://www.w3schools.com/react/react_class.asp
https://reactjs.org/tutorial/tutorial.html

function App() {
  return (
    <BrowserRouter>
      

      <Routes>
        <Route exact path="/" element={<GetAll/>}/>
        <Route exact path="/clothes" element={<GetClothes/>}/>
        <Route exact path="/tech" element={<GetTech/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path='/item/:itemId' element={<SingleItem/>}/>
        
      </Routes>

        


    </BrowserRouter>
  );
}
*/
export default App;

