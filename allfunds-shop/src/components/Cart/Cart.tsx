import { useId } from "react";
import { CartIcon, ClearCartIcon } from "../Icons/Icons";
import { useCart } from "../../hooks/useCart";
import CartStyled from "./CartStyled";
import { calculateCheckoutCartValue } from "../../utils/cart";

interface CartItemProps {
  thumbnail: string;
  price: number;
  name: string;
  quantity: number;
  addToCart: () => void;
  removeFromCart: () => void;
}

function CartItem({
  thumbnail,
  price,
  name,
  quantity,
  addToCart,
  removeFromCart,
}: CartItemProps) {
  return (
    <li key={name}>
      <img src={thumbnail} alt={name} />
      <div>
        <strong>{name}</strong> - {price}€
      </div>

      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={removeFromCart}>-</button>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart, removeFromCart, checkoutCart } =
    useCart();

  const checkoutCartValue = calculateCheckoutCartValue(cart);

  return (
    <CartStyled>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
              {...product}
            />
          ))}
        </ul>
        <div className="cart-checkout">
          <button onClick={clearCart}>
            <ClearCartIcon />
          </button>
          <button onClick={checkoutCart}>Checkout {checkoutCartValue}€</button>
        </div>
      </aside>
    </CartStyled>
  );
}
