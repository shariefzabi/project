import React, { useState } from "react";
// import styles from "./CartItem.module.css";

import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../redux/Shopping/shopping-actions";

const CartItem:any= ( item:any, adjustQty:any, removeFromCart:any ) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e:any) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <div >
      <div >
        {/* <div >
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
          {/* <button className="fas fa-plus incre" onClick={onChangeHandler}></button> */}
                  {/* <p >{item.title}</p>

        </div>
        <button
          onClick={() => removeFromCart(item.id)}
         
        >
         
        </button> */} 
        {/* <div>
          <div >
            <span>TOTAL: ({totalItems} items)</span>
            <span>$ {totalPrice}</span>
          </div>
          <button >
            Proceed To Checkout
          </button>
        </div> */}
      </div>
      
     
    </div>
  );
};

const mapDispatchToProps = (dispatch:any) => {
  return {
    adjustQty: (id:any, value:any) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id:any) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
