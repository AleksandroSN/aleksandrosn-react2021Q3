import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { PokemonData } from "../../../src/api/interfaces";
import { CardsMarkup } from "../../../src/components/cards/cards-markup";

const testStateForMarkup: PokemonData = {
  pokemonImg: 1,
  pokemonNumber: 1,
  pokemonName: "bulbasaur",
  pokemonType: [
    {
      slot: 1,
      type: {
        name: "gross",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
      },
    },
  ],
  pokemonStats: [
    {
      base_stat: 60,
      stat: {
        name: "hp",
        url: "https://pokeapi.co/api/v2/stat/1/",
      },
    },
    {
      base_stat: 62,
      stat: {
        name: "attack",
        url: "https://pokeapi.co/api/v2/stat/2/",
      },
    },
    {
      base_stat: 63,
      stat: {
        name: "defense",
        url: "https://pokeapi.co/api/v2/stat/3/",
      },
    },
    {
      base_stat: 80,
      stat: {
        name: "special-attack",
        url: "https://pokeapi.co/api/v2/stat/4/",
      },
    },
    {
      base_stat: 80,
      stat: {
        name: "special-defense",
        url: "https://pokeapi.co/api/v2/stat/5/",
      },
    },
    {
      base_stat: 60,
      stat: {
        name: "speed",
        url: "https://pokeapi.co/api/v2/stat/6/",
      },
    },
  ],
};

it("Cards Markup render test", () => {
  const { getByText } = render(
    <CardsMarkup
      pokemonImg={testStateForMarkup.pokemonImg}
      pokemonName={testStateForMarkup.pokemonName}
      pokemonNumber={testStateForMarkup.pokemonNumber}
      pokemonStats={testStateForMarkup.pokemonStats}
      pokemonType={testStateForMarkup.pokemonType}
    />
  );
  const checkStat = getByText(/hp/i);
  expect(checkStat).toBeInTheDocument();
});
