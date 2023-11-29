import {
  AddToCartIcon,
  AddToFavoritesIcon,
  RemoveFromCartIcon,
  RemoveFromFavoritesIcon,
} from "../Icons/Icons";
import { useCart } from "../../hooks/useCart";
import { Product, Products as IProducts } from "../../models/Product";
import ProductsStyled from "./ProductsStyled";
import useProducts from "../../hooks/useProducts";

interface ProductsProps {
  products: IProducts;
}

export function Products({ products }: ProductsProps) {
  const { addToCart, removeFromCart, cart } = useCart();
  const { makeProductFavorite } = useProducts();

  const checkProductInCart = (product: Product) => {
    return cart.some((item: Product) => item.id === product.id);
  };

  const checkProductIsFavorite = (product: Product) => {
    return product.isFavorite === true;
  };

  return (
    <ProductsStyled>
      <ul>
        {products.slice(0, 150).map((product) => {
          const isProductInCart = checkProductInCart(product);
          const isProductFavorite = checkProductIsFavorite(product);

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.name} />
              <div>
                <strong>{product.name}</strong> - {product.price}€
                <p>{product.description}</p>
              </div>
              <div className="stock">
                <div>
                  <p>{product.stock} </p> left
                </div>
                <div>
                  <button
                    style={{
                      backgroundColor: isProductInCart ? "red" : "#09f",
                      height: 50,
                    }}
                    disabled={product.stock <= 0}
                    onClick={() => {
                      isProductInCart
                        ? removeFromCart(product)
                        : addToCart(product);
                    }}
                  >
                    {isProductInCart ? (
                      <RemoveFromCartIcon />
                    ) : (
                      <AddToCartIcon />
                    )}
                  </button>
                  <button
                    style={{
                      backgroundColor: isProductFavorite ? "red" : "#e8aa01",
                      height: 50,
                    }}
                    onClick={() => {
                      isProductFavorite
                        ? makeProductFavorite(product)
                        : makeProductFavorite(product, true);
                    }}
                  >
                    {isProductFavorite ? (
                      <RemoveFromFavoritesIcon />
                    ) : (
                      <AddToFavoritesIcon />
                    )}
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </ProductsStyled>
  );
}
