import useFilters from "./useFilters"; // Import your useFilters hook
import { useContext } from "react";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

jest.mock("../context/filters", () => ({
  FiltersContext: jest.fn(),
  FiltersContextProps: {},
}));

describe("Given a useFilters custom hook", () => {
  describe("When it is instantiated", () => {
    test("Then it should return the filters default values", () => {
      (useContext as jest.Mock).mockReturnValue({
        filters: { minPrice: 0, favorite: false },
        setFilters: jest.fn(),
      });

      const { filters, filterProducts, setFilters } = useFilters();

      expect(filters).toEqual({ minPrice: 0, favorite: false });
      expect(typeof filterProducts).toBe("function");
      expect(typeof setFilters).toBe("function");
    });
  });

  describe("When it is instantiated with filters minPrice: 50 and favorite: true", () => {
    test("Then it should filter the products correctly", () => {
      (useContext as jest.Mock).mockReturnValue({
        filters: { minPrice: 50, favorite: true },
        setFilters: jest.fn(),
      });

      const { filterProducts } = useFilters();

      const mockProduct = {
        quantity: 0,
        id: "",
        thumbnail: "",
        stock: 0,
        name: "",
        price: 0,
        description: "",
        isFavorite: false,
      };

      const mockProducts = [
        { ...mockProduct, id: "1", price: 60, isFavorite: true },
        { ...mockProduct, id: "2", price: 40, isFavorite: false },
        { ...mockProduct, id: "3", price: 70, isFavorite: true },
      ];

      const filteredProducts = filterProducts(mockProducts);

      expect(filteredProducts).toEqual([
        { ...mockProduct, id: "1", price: 60, isFavorite: true },
        { ...mockProduct, id: "3", price: 70, isFavorite: true },
      ]);
    });
  });
});
