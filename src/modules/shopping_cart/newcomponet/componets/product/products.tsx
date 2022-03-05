import React from "react";
// import styles from "./Products.module.css";

// Redux
import { connect } from "react-redux";

import Product from "./product";

const Products = ({ products }) => {
  return (
    <div >
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
