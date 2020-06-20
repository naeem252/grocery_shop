import React from "react";
import Logo from "../Logo/Logo";
import classes from "./Navigation.module.css";
import NavigationList from "./NavigationList/NavigationList";

function Navigation(props) {
  return (
    <nav className={classes.Navigation}>
      <div className="container">
        <Logo />
        <NavigationList />
      </div>
    </nav>
  );
}

export default Navigation;
