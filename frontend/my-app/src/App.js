import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import CategoriePage from "./Pages/CategoriePage";
import Empty from "./Pages/Empty";
import Cart from "./Pages/Cart";
import SingleItem from "./Pages/SingleItem";



function App() {
  return (
    <BrowserRouter>
      

      <Routes>
        <Route exact path="/" element={<CategoriePage/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path='/item/:itemId' element={<SingleItem/>}/>
        
        <Route path="/*" element={<Empty/>}/>
      </Routes>

        


    </BrowserRouter>
  );
}

export default App;
