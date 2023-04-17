import { useContext } from "react";

import Button from "../UI/Button";
import CartContext from "../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.items.reduce((acc,cur) => {
    return acc + cur.lSize + cur.mSize + cur.sSize;
  },0)
  return (
    <Button onClick={props.onClick}>
      <span>{`Your Cart - ${cartItems}`}</span>
    </Button>
  );
};

export default HeaderCartButton;
