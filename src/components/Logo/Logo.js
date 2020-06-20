import React from "react";
import logoSrc from "../../assests/logo/logo.png";
import classes from "./Logo.module.css";

function Logo(props) {
  return (
    <div className={classes.Logo}>
      <img src={logoSrc} alt="shop logo" />
    </div>
  );
}
export default Logo;
