import React from "react";
import classes from "./cartProduct.module.css";
import img from "../../assests/poducts/milk_vita.jpg";
const cartProduct = (props) => {
  return (
    <div className={classes.CartProd}>
      <div className={classes.ImgBox}>
        <img
          src={require("../../assests/poducts/" + props.imgName)}
          alt="milk vita"
        />
      </div>
      <div className={classes.ProdInfo}>
        <h5>{props.prodName}</h5>
        <div className="form-group d-flex align-items-center">
          <label className="mr-3">Quantity</label>
          <input
            onChange={props.changedQuantity}
            className="form-control"
            type="number"
            value={props.value}
          />
        </div>
        <h5>{props.prodPrice} $</h5>
      </div>
    </div>
  );
};

export default cartProduct;
