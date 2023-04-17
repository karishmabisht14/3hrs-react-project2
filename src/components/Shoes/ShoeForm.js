import { useContext, useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import CartContext from "../store/cart-context";

const ShoeForm = () => {
  const cartCtx = useContext(CartContext);
  const [shoeName, setShoeName] = useState("");
  const [shoeDesc, setShoeDesc] = useState("");
  const [shoePrice, setShoePrice] = useState(0);
  const [largeQuantity, setLargeQuantity] = useState(0);
  const [mediumQuantity, setMediumQuantity] = useState(0);
  const [smallQuantity, setSmallQuantity] = useState(0);

  const shoeNameHandler = (event) => {
    setShoeName(event.target.value);
  };

  const shoeDescHandler = (event) => {
    setShoeDesc(event.target.value);
  };

  const shoePriceHandler = (event) => {
    setShoePrice(event.target.value);
  };

  const largeQuantityHandler = (event) => {
    setLargeQuantity(event.target.value);
  };

  const mediumQuantityHandler = (event) => {
    setMediumQuantity(event.target.value);
  };
  const smallQuantityHandler = (event) => {
    setSmallQuantity(event.target.value);
  };

  const shoeFormHandler = (event) => {
    event.preventDefault();

    const showItem = {
      id: Math.random(),
      name: shoeName,
      desc: shoeDesc,
      price: Number(shoePrice),
      lQuantity: Number(largeQuantity),
      mQuantity: Number(mediumQuantity),
      sQuantity: Number(smallQuantity),
      lSize: 0,
      mSize: 0,
      sSize: 0,
      amount: 0,
    };
    cartCtx.addInventoryItem(showItem);
  };

  return (
    <form onSubmit={shoeFormHandler}>
      <Input
        id="name"
        label="ShoeName"
        type="text"
        value={shoeName}
        onChange={shoeNameHandler}
      />
      <Input
        id="desc"
        label="Description"
        type="text"
        value={shoeDesc}
        onChange={shoeDescHandler}
      />
      <Input
        id="price"
        label="Price"
        type="number"
        value={shoePrice}
        onChange={shoePriceHandler}
      />
      <div>
        <label>Quantity Available --</label>
        <Input
          id="large"
          label="L"
          type="number"
          value={largeQuantity}
          onChange={largeQuantityHandler}
        />
        <Input
          id="medium"
          label="M"
          type="number"
          value={mediumQuantity}
          onChange={mediumQuantityHandler}
        />
        <Input
          id="small"
          label="S"
          type="number"
          value={smallQuantity}
          onChange={smallQuantityHandler}
        />
      </div>
      <Button type="submit">Add Products</Button>
    </form>
  );
};

export default ShoeForm;
