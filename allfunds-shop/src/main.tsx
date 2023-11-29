import ReactDOM from "react-dom/client";
import App from "./App";
import { FiltersProvider } from "./context/filters";
import { ProductsProvider } from "./context/products";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ProductsProvider>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </ProductsProvider>
);
