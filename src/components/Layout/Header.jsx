import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2 className={classes.h2}>YOURFOOD</h2>
        <HeaderCartButton onClick={props.onCartShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
