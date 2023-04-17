import { useContext } from "react";
import CartContext from "../store/cart-context";
import Button from "../UI/Button";

const ShowShoeItems = () => {
  const cartCtx = useContext(CartContext);
  
  const quantityButtonHandler = (item,size) => {
    cartCtx.addItem(item,size);
  }

  return (
    <ul>
      {cartCtx.inventoryItems.map((item) => {
        return (
          <li key={item.id}>
            {`${item.name} - ${item.desc} - Rs${item.price}`}
            <Button
              onClick={() => quantityButtonHandler(item, "L")}
            >{`Buy Large - ${item.lQuantity}`}</Button>
            <Button
              onClick={() => quantityButtonHandler(item, "M")}
            >{`Buy Medium - ${item.mQuantity}`}</Button>
            <Button
              onClick={() => quantityButtonHandler(item, "S")}
            >{`Buy Small - ${item.sQuantity}`}</Button>
          </li>
        );
      })}
    </ul>
  );
};

export default ShowShoeItems;
