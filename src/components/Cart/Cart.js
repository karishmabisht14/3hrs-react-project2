import { useContext } from "react";

import CartContext from "../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Button from "../UI/Button";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.items.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);
  return (
    <Modal onClick={props.onClose}>
      {console.log(cartCtx.items)}
      {cartCtx.items.length > 0 ? (
        <ul>
          {cartCtx.items.map((item) => {
            let amount =
              item.lSize * item.price +
              item.mSize * item.price +
              item.sSize * item.price;
            item.amount = amount;
            return <CartItem item={item} key={item.id} />;
          })}
          <h2>{`Total Amount = Rs${totalAmount}`}</h2>
          <Button>Place Order</Button>
          <Button onClick={props.onClose}>Close</Button>
        </ul>
      ) : (
        <div>
          <h2>Your Cart is Empty!!!!</h2>
          <Button onClick={props.onClose}>Close</Button>
        </div>
      )}
    </Modal>
  );
};

export default Cart;
