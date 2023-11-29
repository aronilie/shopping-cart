import { ApiProduct, ApiProducts, Products } from "../models/Product";

export const mapProducts = (products: ApiProducts): Products => {
  return products.map((product: ApiProduct) => {
    return {
      id: product.id,
      thumbnail: product.image_url,
      stock: product.stock,
      name: product.productName,
      price: product.price,
      description: product.productDescription,
      isFavorite: product.favorite === 1,
    };
  });
};
