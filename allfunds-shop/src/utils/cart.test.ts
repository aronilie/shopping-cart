import { Cart } from "../models/Cart";
import { calculateCheckoutCartValue } from "./cart";

const sampleCart: Cart = [
  {
    quantity: 0,
    id: "",
    thumbnail: "",
    stock: 0,
    name: "",
    price: 0,
    description: "",
    isFavorite: false,
  },
  {
    quantity: 0,
    id: "",
    thumbnail: "",
    stock: 0,
    name: "",
    price: 0,
    description: "",
    isFavorite: false,
  },
];

describe("Given a calculateCheckoutCartValue", () => {
  describe("When it is called with a cart", () => {
    test("Then it should calculate the total value of items in the cart", () => {
      const result = calculateCheckoutCartValue(sampleCart);
      const expectedTotal = sampleCart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      expect(result).toBe(expectedTotal);
    });
  });
});
