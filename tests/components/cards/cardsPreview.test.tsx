import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { CardsPreview } from "../../../src/components/cards/cards-preview";

it("Cards markup test", () => {
  const { getByText, getByAltText } = render(
    <CardsPreview name="bulbasaur" url="https://pokeapi.co/api/v2/pokemon/1/" />
  );
  const testName = getByText(/bulbasaur/i);
  expect(testName).toBeInTheDocument();
  const testAltName = getByAltText(/pokemon/i);
  expect(testAltName).toBeInTheDocument();
});
