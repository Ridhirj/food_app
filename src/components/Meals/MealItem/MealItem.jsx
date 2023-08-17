import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
function MealItem(props) {
  const { name, description, price } = props;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name || "No name available"}</h3>
        <p className={classes.description}>{description || "No description available"}</p>
        <p className={classes.price}>{price || "No price available"}</p>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
}

export default MealItem;