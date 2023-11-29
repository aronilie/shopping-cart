import { ReactNode, createContext, useState } from "react";
import { Products } from "../models/Product";

export interface ProductsContextProps {
  products: Products;
  setProducts: React.Dispatch<React.SetStateAction<Products>>;
}

const productsContextInitialState = {
  products: [
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
  setProducts: () => {},
};

export const ProductsContext = createContext<ProductsContextProps>(
  productsContextInitialState
);

interface ProductsProviderProps {
  children: ReactNode;
}

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Products>([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
