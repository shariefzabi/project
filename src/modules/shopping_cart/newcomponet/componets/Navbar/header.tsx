import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import styles from "./Navbar.module.css";
import './Header.css';

import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import {
//     adjustItemQty,
//     removeFromCart,
//   } from "../../redux/Shopping/shopping-actions";

const Navbar = ({cart}) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);
//   const [input, setInput] = useState(item.qty);

//   const onChangeHandler = (e) => {
//     setInput(e.target.value);
//     adjustQty(item.id, e.target.value);
//   };


  return (

    <div>
            
<main id="sectionContent">


  <div className="dropdown col-8">
    <a
      className="edit-toggler text-secondary"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
       <div className="add-to-cart">
<span className="cart-count">{cartCount}</span>



<img src="https://cdn4.iconfinder.com/data/icons/zeir-miscellaneous-004/64/shopping_bag_shopping_cart_ecommerce-512.png" />
</div>
</a>
<div
      className="dropdown-menu"
      aria-labelledby="dropdownMenuButton1"
    >
      <div>
        <div className="animalid">
          <ul className="dropdown-item" >
            <li>ANIMAL ID-</li>
            {/* <select>{[...Array(cartCount)].map((e, i) => <option className="busterCards" key={i}>{i+1}</option>)}</select> */}
            <li className="quantity">x</li>
          </ul>
          <ul className="row dropdown-item">
            <li className="col-3">900085000597636</li>
            <li  className="col-3"id="quantity">{cartCount}</li>
            <li className="col-3"  onClick={() =>setCartCount(0) }
         >X</li>
          </ul>
          {/* <ul>
            <li className='ps-5'>X</li>
          </ul> */}
        </div>
        <br />
        <hr></hr>
      </div>
      <ul className="subtotal">
        <li className="dropdown-item" ref="#">Sub-Total</li>
        <li className="dropdown-item">N{293072 * cartCount}</li>
      </ul>
      <hr></hr>            
      <ul className="total">
        <li className="dropdown-item" ref="#">Total</li>
        <li className="dropdown-item">N{293072 * cartCount}</li>
      </ul> 
      <div className="option">

     <button className="btn btn-success view">View Cart</button>
      <button className="btn btn-success">Checkout</button>
      </div>
      
    </div>

  </div>

</main>
</div>





    // <div >
      
      /* <Link to="/cart">
        <div >
          <h3 >Cart</h3>
          <img
            
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
            alt="shopping cart"
          />
          <div >{cartCount}</div>
        </div>
      </Link>
    </div> */
  );
};




const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
// const mapDispatchToProps = (dispatch) => {
//     return {
//       adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
//       removeFromCart: (id) => dispatch(removeFromCart(id)),
//     };
//   };
  
//   export default connect(mapStateToProps,null, mapDispatchToProps)(Navbar);
export default connect(mapStateToProps)(Navbar);
