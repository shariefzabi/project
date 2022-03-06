import React, { useState, useEffect } from "react";
// import styles from "./Cart.module.css";

import { connect } from "react-redux";

import CartItem from "./viewcarts";


const Cart:any = ( cart:any ) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
  
    useEffect(() => {
      let items = 0;
      let price = 0;
  
      cart.forEach((item:any) => {
        items += item.qty;
        price += item.qty * item.price;
      });
  
      setTotalItems(items);
      setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
  
    return (
      <div >
        <div >
          {cart.map((item:any) => (
           <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div>
          {/* <div >
            <span>TOTAL: ({totalItems} items)</span>
            <span>N {totalPrice}</span>
          </div>
          <button >
            Proceed To Checkout
          </button> */}
        </div>
      </div>
    );
  };
  
  const mapStateToProps = (state:any) => {
    return {
      cart: state.shop.cart,
    };
  };
  
  export default connect(mapStateToProps)(Cart);
