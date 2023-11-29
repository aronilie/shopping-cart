import { Product } from "./Product";

interface CartItem extends Product {
  quantity: number;
}

export interface Cart extends Array<CartItem> {}
