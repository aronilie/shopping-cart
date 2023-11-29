import { ReactNode, createContext, useState } from "react";

interface Filters {
  favorite: boolean;
  minPrice: number;
}

interface FiltersProviderProps {
  children: ReactNode;
}

export interface FiltersContextProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const filtersContextInitialState = {
  filters: { favorite: false, minPrice: 20 },
  setFilters: () => {},
};

export const FiltersContext = createContext<FiltersContextProps>(
  filtersContextInitialState
);

export function FiltersProvider({ children }: FiltersProviderProps) {
  const [filters, setFilters] = useState<Filters>({
    favorite: false,
    minPrice: 20,
  });

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
