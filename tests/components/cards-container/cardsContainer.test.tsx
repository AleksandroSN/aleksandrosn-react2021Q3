import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { PokemonDetailProps } from "../../../src/api/interfaces";
import {
  CardsContainer,
  CardsContainerProps,
} from "../../../src/components/cards-container/cards-container";

const testDataForState: CardsContainerProps = {
  state: [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
    {
      name: "venusaur",
      url: "https://pokeapi.co/api/v2/pokemon/3/",
    },
  ],
  updateCards(modState: PokemonDetailProps) {
    return;
  },
};

it("check cards container render", () => {
  const { getByText } = render(
    <Router>
      <CardsContainer
        state={testDataForState.state}
        updateCards={testDataForState.updateCards}
      />
    </Router>
  );
  testDataForState.state.forEach((el) => {
    const pokName = getByText(el.name);
    expect(pokName).toBe(pokName);
  });
});
