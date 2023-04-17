import React, { useContext } from "react";
import ShoeForm from "./ShoeForm";
import CartContext from "../store/cart-context";
import ShowShoeItems from "./ShowShoeItems";

const Shoe = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <React.Fragment>
      <ShoeForm />
      {cartCtx.inventoryItems.length > 0 && <ShowShoeItems />}
    </React.Fragment>
  );
};
export default Shoe;
