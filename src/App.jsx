import { Fragment, useState } from "react";
import Meals from "./components/Meals/Meals";
import "./App.css";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import HeaderCartButton from "./components/Layout/HeaderCartButton";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    return setCartIsShown(true);
  };

  const hideCartHandler = () => {
    return setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onCartShow={showCartHandler} />
      <main>
        <Meals />
      </main>
      <HeaderCartButton />
    </CartProvider>
  );
}

export default App;
