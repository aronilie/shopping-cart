import { render, screen } from "@testing-library/react";
import {
  FiltersContext,
  FiltersContextProps,
  FiltersProvider,
} from "./filters";

describe("Given a FiltersProvider provider", () => {
  describe("When it is called", () => {
    test("Then it should provide the initial state values", () => {
      render(
        <FiltersProvider>
          <FiltersContext.Consumer>
            {(context: FiltersContextProps) => (
              <>
                <div data-testid="favorite">
                  {context.filters.favorite.toString()}
                </div>
                <div data-testid="minPrice">
                  {context.filters.minPrice.toString()}
                </div>
              </>
            )}
          </FiltersContext.Consumer>
        </FiltersProvider>
      );

      expect(screen.getByTestId("favorite").textContent).toBe("false");
      expect(screen.getByTestId("minPrice").textContent).toBe("20");
    });
  });
});
