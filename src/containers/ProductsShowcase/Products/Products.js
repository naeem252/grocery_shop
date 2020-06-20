import React, { Component } from "react";
import classes from "./Products.module.css";
import Product from "../../../components/Product/Product";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";

class Products extends Component {
  state = {
    products: this.props.allProducts,
    loading: false,
  };
  componentDidMount() {
    this.props.fetchData();
  }
  componentDidUpdate(prevProp, prevState) {
    if (prevProp.allProducts !== this.props.allProducts) {
      this.setState({ products: this.props.allProducts });
    }
  }
  cartAddedHandler = (product, event) => {
    // event.target.disabled = true;
    this.props.addCartFunc(product);
  };
  render() {
    return (
      <div className={classes.Products}>
        {this.state.products.map((product, index) => {
          let inCartsArr = this.props.allCartProducts.filter((cartProd) => {
            return (
              cartProd.name === product.name && cartProd.price === product.price
            );
          });
          return (
            <Product
              cartAdded={this.cartAddedHandler.bind(this, product)}
              addedClass={product.className}
              key={index}
              name={product.name}
              price={product.price}
              imgName={product.imgName}
              category={product.category}
              btnStatus={inCartsArr.length > 0}
            />
          );
        })}

        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    allProducts: state.products.products,
    allCartProducts: state.cart.carts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(actions.fetchProducst()),
    addCartFunc: (product) => dispatch(actions.addToCart(product)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
