import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Empty from "./Pages/CategorieView";
import Cart from "./Pages/Cart";
import SingleItem from "./Pages/SingleItem";
import HomePage from "./Pages/HomePage";



function App() {
  return (
    <BrowserRouter>
      

      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path='/item/:itemId' element={<SingleItem/>}/>
        
        <Route path="/*" element={<Empty/>}/>
      </Routes>

        


    </BrowserRouter>
  );
}

export default App;
