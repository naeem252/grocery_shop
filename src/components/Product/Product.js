import React from "react";
import classes from "./Product.module.css";

function Product(props) {
  return (
    <div className={[classes.Product, classes[props.addedClass]].join(" ")}>
      <div className={classes.ProdImgBox}>
        <img
          src={require("../../assests/poducts/" + props.imgName)}
          alt="aci salt"
        />
      </div>
      <h4>{props.category}</h4>
      <h5 className={classes.ProdName}>{props.name}</h5>
      <div className={classes.Price}>
        <span className={classes.PriceBig}>${props.price}</span>
        <span className={classes.PriceSub}>$40.00</span>
      </div>
      <button
        disabled={props.btnStatus}
        onClick={props.cartAdded}
        className={classes.Button}
      >
        Add Cart
      </button>
    </div>
  );
}

export default Product;
