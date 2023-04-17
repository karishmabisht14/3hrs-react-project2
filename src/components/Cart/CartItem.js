const CartItem = ({ item }) => {
  return (
    <li>
      {`${item.name} --`}
      {item.lSize > 0 && <span>{`${item.lSize}L `}</span>}
      {item.mSize > 0 && <span>{`${item.mSize}M `}</span>}
      {item.sSize > 0 && <span>{`${item.sSize}S `}</span>}
      <h4>{`Amount - Rs${item.amount}`}</h4>
    </li>
  );
};

export default CartItem;
