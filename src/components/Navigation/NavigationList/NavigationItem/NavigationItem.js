import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.css";

function NavigationItem(props) {
  return (
    <li className={classes.NavigationItem}>
      <NavLink to={props.path}>{props.children}</NavLink>
      {props.cartLen ? (
        <span className={classes.Cart}>{props.cartLen}</span>
      ) : null}
    </li>
  );
}

export default NavigationItem;
