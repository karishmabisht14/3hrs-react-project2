import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <header>
      <h1>
        Welcome to Shoes-Store
        <span>
          <HeaderCartButton onClick={props.onShowCart} />
        </span>
      </h1>
    </header>
  );
};

export default Header;
