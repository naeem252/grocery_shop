import React, { Component } from "react";
import { connect } from "react-redux";
import CartProduct from "../../components/cartProduct/cartProduct";
import classes from "./CartProducts.module.css";
import * as actions from "../../store/actions/index";

class CartProducts extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.fixedOrderInfoPos);
  }
  fixedOrderInfoPos() {
    if (window.pageYOffset >= 100) {
      document.querySelector("#OrderInfo").classList.add(classes.Sticky);
    } else {
      document.querySelector("#OrderInfo").classList.remove(classes.Sticky);
    }
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.fixedOrderInfoPos);
  }
  render() {
    let totalPrice = this.props.cartListProd.reduce(
      (acc, el) => acc + el.price,
      0
    );
    return (
      <div className="container">
        <div className={classes.CartProducts}>
          <div className={classes.Products}>
            {this.props.cartListProd.map((cart, index) => {
              return (
                <CartProduct
                  imgName={cart.imgName}
                  prodName={cart.name}
                  prodPrice={cart.price}
                  changedQuantity={(e) =>
                    this.props.increseProdPrice(index, e.target.value)
                  }
                  value={cart.quantity}
                />
              );
            })}
          </div>
          <div className={classes.OrderInfo} id="OrderInfo">
            <h4 className={classes.OrderPrice}>Total Price:{totalPrice} $</h4>
            <button className={classes.OrderButton}>Order Now</button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartListProd: state.cart.carts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increseProdPrice: (index, multiplyBy) =>
      dispatch(actions.ingCardProdPrice(index, multiplyBy)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartProducts);
