import React from "react";
// import styles from "./Products.module.css";

// Redux
import { connect } from "react-redux";

import Product from "./product";

const Products = ( products:any ) => {
  return (
    <div >
      {products.map((product:any) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = (state:any) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
