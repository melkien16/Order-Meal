import { Fragment } from "react";
import mealsImage from "../../assets/meals.png";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="meals Image" />
      </div>
    </Fragment>
  );
};

export default Header;
