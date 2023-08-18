import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
// const items = [
//   {
//     id: "c2",
//     name: "sushi",
//     Amount: "3",
//     price: "45.67",
//   },
// ];

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmounts = `$${cartCtx.totalAmount.toFixed(2)}`;
  // console.log(totalAmounts);
  const hasOrder = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const carItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {" "}
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={carItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmounts}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close{" "}
        </button>

        {hasOrder && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
