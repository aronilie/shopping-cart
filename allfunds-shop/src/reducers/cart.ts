import { Cart } from "../models/Cart";
import { Product } from "../models/Product";

export const cartInitialState: Cart =
  JSON.parse(window.localStorage.getItem("cart") as string) || [];

export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

export const updateLocalStorage = (state: Cart): void => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

type UpdateStateFunction = (
  state: Cart,
  action: { type: string; payload?: Product }
) => Cart;

const UPDATE_STATE_BY_ACTION: Record<string, UpdateStateFunction> = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    if (!action.payload) {
      return state;
    }

    const { id, stock } = action.payload;
    const productInCartIndex = state.findIndex((item) => item.id === id);

    if (productInCartIndex >= 0) {
      const currentQuantity = state[productInCartIndex].quantity;
      const newQuantity = currentQuantity + 1;

      if (newQuantity <= stock) {
        const newState: Cart = [
          ...state.slice(0, productInCartIndex),
          {
            ...state[productInCartIndex],
            quantity: newQuantity,
          },
          ...state.slice(productInCartIndex + 1),
        ];

        updateLocalStorage(newState);
        return newState;
      } else {
        return state;
      }
    }

    const newState: Cart = [
      ...state,
      {
        ...action.payload,
        quantity: 1,
      },
    ];

    updateLocalStorage(newState);
    return newState;
  },

  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    if (!action.payload) {
      return state;
    }

    const { id } = action.payload;
    const productInCartIndex = state.findIndex((item) => item.id === id);

    if (productInCartIndex >= 0) {
      const updatedQuantity = state[productInCartIndex].quantity - 1;

      const newState: Cart =
        updatedQuantity === 0
          ? [
              ...state.slice(0, productInCartIndex),
              ...state.slice(productInCartIndex + 1),
            ]
          : [
              ...state.slice(0, productInCartIndex),
              {
                ...state[productInCartIndex],
                quantity: updatedQuantity,
              },
              ...state.slice(productInCartIndex + 1),
            ];

      updateLocalStorage(newState);
      return newState;
    }

    return state;
  },

  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    updateLocalStorage([]);
    return [];
  },
};

interface CartAction {
  type: string;
  payload?: Product;
}

export const cartReducer = (state: Cart, action: CartAction): Cart => {
  const { type: actionType } = action;
  const updateState = UPDATE_STATE_BY_ACTION[actionType];
  return updateState ? updateState(state, action) : state;
};
