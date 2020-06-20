import React, { Component } from "react";
import classes from "./ProductsShowcase.module.css";
import Filter from "./Filter/Filter";
import Products from "./Products/Products";

class ProductsShowcase extends Component {
  render() {
    return (
      <section className={classes.ProductsShowcase}>
        <Filter />
        <Products />
      </section>
    );
  }
}
export default ProductsShowcase;
