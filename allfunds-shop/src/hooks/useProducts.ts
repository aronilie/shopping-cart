import { useContext, useEffect } from "react";
import { ProductsContext } from "../context/products";
import { Product } from "../models/Product";
import { getAllProducts, putProductFavorite } from "../utils/api";

export default function useProducts() {
  const { products, setProducts } = useContext(ProductsContext);

  const refreshProducts = async () => {
    const allProducts = await getAllProducts();
    if (allProducts) setProducts(allProducts);
  };

  useEffect(() => {
    (async () => await refreshProducts())();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const makeProductFavorite = async (
    product: Product,
    toFavorite?: boolean
  ) => {
    try {
      await putProductFavorite(product, toFavorite);
      await refreshProducts();
    } catch (error) {
      console.error(error);
    }
  };

  return { products, makeProductFavorite, refreshProducts };
}
