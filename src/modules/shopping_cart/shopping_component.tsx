// import './App.css';
import Cart from './Shoppingcart';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from '../home/Home';
function ShopCart() {
  return (
    <div className="App">
      <>

     
      <Router>
      <Routes>
                <Route path="/" element={<Cart />}></Route>
                <Route path="/home" element={<Home/>}></Route>
                
            </Routes>
      </Router>
      </>
    
    </div>
  );
}

export default ShopCart;