import { Cart } from "../models/Cart";

export function calculateCheckoutCartValue(cart: Cart): number {
  const totalPrice = cart.reduce((total, item) => {
    const subtotal = item.quantity * item.price;
    return total + subtotal;
  }, 0);

  return totalPrice;
}
