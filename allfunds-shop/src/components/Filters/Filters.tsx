import { useId } from "react";
import useFilters from "../../hooks/useFilters";
import FiltersStyled from "./FiltersStyled";

export function Filters() {
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  const favoriteFilterId = useId();

  const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: +event.target.value,
    }));
  };

  const handleChangeFavorite = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const showFavorites = event.target.value === "favorites";
    setFilters((prevState) => ({
      ...prevState,
      favorite: showFavorites,
    }));
  };

  return (
    <FiltersStyled>
      <div>
        <label htmlFor={minPriceFilterId}>Price from:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="100"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
          data-testid="minPriceFilter"
        />
        <span>{filters.minPrice}€</span>
      </div>

      <div>
        <label htmlFor={favoriteFilterId}>Show</label>
        <select
          id={favoriteFilterId}
          onChange={handleChangeFavorite}
          data-testid="favoriteFilter"
        >
          <option value="all">All</option>
          <option value="favorites">Favorites</option>
        </select>
      </div>
    </FiltersStyled>
  );
}
