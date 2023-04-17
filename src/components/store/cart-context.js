import React from "react"

const CartContext = React.createContext({
    items: [],
    inventoryItems: [],
    addItem: (item) => {},
    addInventoryItem: (item) => {},
    totalAmount: 0,
});

export default CartContext;