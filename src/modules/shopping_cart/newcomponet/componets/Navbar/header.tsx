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

const Navbar = (cart:any) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item:any) => {
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



<svg className="img" width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.8744 26.539H1.66016L4.21405 7.66235H23.5348L25.7556 23.763" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M19.9817 32.0908C23.3545 32.0908 26.0888 29.3565 26.0888 25.9836C26.0888 22.6107 23.3545 19.8765 19.9817 19.8765C16.6088 19.8765 13.8745 22.6107 13.8745 25.9836C13.8745 29.3565 16.6088 32.0908 19.9817 32.0908Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M1.66016 26.5391L4.10301 32.091H19.4264" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M9.21008 9.88312L8.76593 7.10714C8.32177 4.22013 10.2094 1.55519 12.9854 1.11104C13.3185 1 13.5406 1 13.8737 1C16.7607 1 19.0926 3.33182 19.0926 6.21883C19.0926 6.55195 19.0926 6.77403 18.9815 7.10714L18.5374 9.88312" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M17.7686 24.4524C17.9684 24.3697 18.1751 24.2767 18.3887 24.1733C18.6091 24.0631 18.8227 23.946 19.0294 23.8219C19.2361 23.691 19.4325 23.5567 19.6185 23.4189C19.8115 23.2742 19.9837 23.1226 20.1353 22.9641H21.2102V30.1264H19.6702V24.9691C19.4635 25.1069 19.2327 25.2344 18.9778 25.3515C18.7228 25.4618 18.4748 25.5582 18.2336 25.6409L17.7686 24.4524Z" fill="#2078BF" />
                                            </svg>
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

     <button className="btn btn-success ">View Cart</button>
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




const mapStateToProps = (state:any) => {
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
