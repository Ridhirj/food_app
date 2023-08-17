import React from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
function MealItemForm(props) {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "text",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+add</button>
    </form>
  );
}

export default MealItemForm;
