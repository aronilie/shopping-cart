import { useReducer, createContext, ReactNode } from "react";
import { cartReducer, cartInitialState } from "../reducers/cart.ts";
import { Product } from "../models/Product.ts";
import { reduceProductsStock } from "../utils/api.ts";
import useProducts from "../hooks/useProducts.ts";
import { Cart } from "../models/Cart.ts";

interface CartContextProps {
  cart: Cart;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
  checkoutCart: () => void;
}

const cartContextInitialState = {
  cart: [
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
  ],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  checkoutCart: () => {},
};

export const CartContext = createContext<CartContextProps>(
  cartContextInitialState
);

function useCartReducer() {
  const { refreshProducts } = useProducts();
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product: Product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const removeFromCart = (product: Product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const checkoutCart = async () => {
    const totalQuantities: { productId: string; quantity: number }[] = [];
    state.forEach((product) => {
      totalQuantities.push({
        productId: product.id,
        quantity: product.quantity,
      });
    });

    await reduceProductsStock({ stockToReduce: totalQuantities });

    dispatch({ type: "CLEAR_CART" });

    setTimeout(async () => {
      await refreshProducts();
    }, 200);
  };

  return { state, addToCart, removeFromCart, clearCart, checkoutCart };
}

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const { state, addToCart, removeFromCart, clearCart, checkoutCart } =
    useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart,
        checkoutCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
