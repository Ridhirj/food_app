import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
const items = [
  {
    id: "c2",
    name: "sushi",
    Amount: "3",
    price: "45.67",
  },
];

function Cart(props) {
  const cartItem = (
    <ul className={classes["cart-items"]}> {items.map((item) => item.name)}</ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.67</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close{" "}
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
