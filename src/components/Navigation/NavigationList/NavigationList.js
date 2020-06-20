import React from "react";
import classes from "./NavigationList.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import { connect } from "react-redux";

function NavigationList(props) {
  return (
    <ul className={classes.NavigationList}>
      <NavigationItem path="/">Home</NavigationItem>
      <NavigationItem cartLen={props.cartLen} path="/cart">
        cart
      </NavigationItem>
      <NavigationItem path="/contact">Contact</NavigationItem>
    </ul>
  );
}
const mapStateToProps = (state) => {
  return {
    cartLen: state.cart.carts.length,
  };
};
export default connect(mapStateToProps)(NavigationList);
