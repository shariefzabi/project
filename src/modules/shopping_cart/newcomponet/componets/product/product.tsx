import React from "react";
// import { Link } from "react-router-dom";
// import styles from "./Product.module.css";

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../redux/Shopping/shopping-actions";

const Product = ( product:any, addToCart:any ) => {
  return (
    <div >
        <button className="btn btn-primary"
          onClick={() => addToCart(product.id)}
           
        >
          Add To Cart
        </button>
      
    </div>
  );
};

const mapDispatchToProps = (dispatch:any) => {
  return {
    addToCart: (id:any) => dispatch(addToCart(id)),
    loadCurrentItem: (item:any) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
