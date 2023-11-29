import { Product } from "../models/Product";
import { mapProducts } from "./products";

const BASE_URL = "http://localhost:3000/grocery/";

export async function getAllProducts() {
  try {
    const response = await fetch(`${BASE_URL}`);
    const allProducts = await response.json();

    return mapProducts(allProducts);
  } catch (error) {
    console.error(error);
  }
}

export async function putProductFavorite(
  product: Product,
  toFavorite?: boolean
) {
  try {
    const response = await fetch(`${BASE_URL}${product.id}`);
    const apiProduct = await response.json();

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...apiProduct, favorite: toFavorite ? 1 : 0 }),
    };

    if (apiProduct) await fetch(`${BASE_URL}${product.id}`, options);
  } catch (error) {
    console.error(error);
  }
}

interface ReduceProducsStockProps {
  stockToReduce: { productId: string; quantity: number }[];
}
export async function reduceProductsStock({
  stockToReduce,
}: ReduceProducsStockProps) {
  try {
    stockToReduce.forEach(async (product) => {
      const response = await fetch(`${BASE_URL}${product.productId}`);
      const apiProduct = await response.json();

      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...apiProduct,
          stock: apiProduct.stock - product.quantity,
        }),
      };

      if (apiProduct) await fetch(`${BASE_URL}${product.productId}`, options);
    });
  } catch (error) {
    console.error(error);
  }
}
