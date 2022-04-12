
//import './App.css';
import GetCategories from '../Components/GetCategories';
import NavBar from '../Components/NavBar';




function HomePage() {
  return (
    <div>
      
      <NavBar/>
      <div>
      <h1>Categories</h1>
      <GetCategories/>
      </div>
    </div>
  );
}

export default HomePage;
