import { useContext } from "react";
import { FiltersContext, FiltersContextProps } from "../context/filters";
import { Products } from "../models/Product";

export default function useFilters() {
  const { filters, setFilters } =
    useContext<FiltersContextProps>(FiltersContext);

  const filterProducts = (products: Products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.favorite === false || product.isFavorite === filters.favorite)
      );
    });
  };

  return { filters, filterProducts, setFilters };
}
