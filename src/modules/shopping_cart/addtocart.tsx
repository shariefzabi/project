import React from 'react';
import logo from './logo.svg';
// import './App.css';
// import HomeContainer from './containers/HomeContainer'
// import HeaderContainer from './containers/HeaderContainer'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Cart from './newcomponet/componets/viewcart/viewcarts';
import Navbar from './newcomponet/componets/Navbar/header';
import Products from './newcomponet/componets/product/products';

function Addtocart() {
  return (
    // <div className="App">
      <Router>
      {/* <div className="app"> */}
        <Navbar />
        <Products></Products>
        {/* <Cart></Cart> */}
        <Routes>
          {/* <Route exact path="/" component={Products} /> */}
          {/* <Route exact path="/cart" component={Cart} /> */}
         
        </Routes>
      {/* </div> */}
    </Router>
      
    // </div>
  );
}

export default Addtocart;
