import { Products } from "./components/Products/Products";
import { Header } from "./components/Header/Header";
import useFilters from "./hooks/useFilters";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./context/cart";
import useProducts from "./hooks/useProducts";

function App() {
  const { products } = useProducts();
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
    </CartProvider>
  );
}

export default App;
