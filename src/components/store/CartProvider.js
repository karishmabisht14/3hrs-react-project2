import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [inventoryItems, setInventoryItems] = useState([]);

  const addItemToCartHandler = (item, size) => {
    const newItems = [...items];
    const inventoryNewItems = [...inventoryItems];
    const itemIndex = items.findIndex((elm) => elm.id === item.id);
    if (itemIndex !== -1) {
      if (size === "L") {
        newItems[itemIndex].lSize++;
        inventoryNewItems[itemIndex].lQuantity--;
      }
      if (size === "M") {
        newItems[itemIndex].mSize++;
        inventoryNewItems[itemIndex].mQuantity--;
      }
      if (size === "S") {
        newItems[itemIndex].sSize++;
        inventoryNewItems[itemIndex].sQuantity--;
      }
      setItems([...newItems]);
      setInventoryItems([...inventoryNewItems]);
    } else {
      if (size === "L") {
        item.lSize++;
        item.lQuantity--;
      }
      if (size === "M") {
        item.mSize++;
        item.mQuantity--;
      }
      if (size === "S") {
        item.sSize++;
        item.sQuantity--;
      }
      setItems([...items, item]);
    }
  };

  const addInventoryHandler = (item) => {
    const newItems = [...inventoryItems];
    const itemIndex = inventoryItems.findIndex((elm) => elm.id === item.id);
    if (itemIndex !== -1) {
      setInventoryItems([...newItems]);
    } else {
      setInventoryItems([...inventoryItems, item]);
    }
  };

  const cartContext = {
    items: items,
    inventoryItems: inventoryItems,
    addItem: addItemToCartHandler,
    addInventoryItem: addInventoryHandler,
    totalAmount: 0,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
