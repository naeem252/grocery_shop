import React, { Fragment, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation";
import classes from "./Layout.module.css";

function Layout(props) {
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset >= 100 && document.body.scrollHeight >= 1000) {
        document
          .querySelector("." + classes.Header)
          .classList.add(classes.Sticky);
      } else {
        document
          .querySelector("." + classes.Header)
          .classList.remove(classes.Sticky);
      }
    };
  });
  return (
    <Fragment>
      <header className={classes.Header}>
        <Navigation />
      </header>
      <main>{props.children}</main>
    </Fragment>
  );
}
export default Layout;
