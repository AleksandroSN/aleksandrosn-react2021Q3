import { useEffect, useState } from "react";
import { DummyMocks } from "../../api/dummydb";
import { PokemonData } from "../../api/interfaces";
import { CardsMarkup } from "../cards/cards-markup";
import { CreateForm } from "../forms/form";
import "./cards-container.scss";

export const CardsContainer = (): JSX.Element => {
  const [state, setState] = useState<PokemonData[]>([]);

  useEffect(() => {
    (async function getMocks() {
      const mocks = await DummyMocks();
      setState(mocks);
    })();
  }, []);

  const updateCards = (modState: PokemonData) => {
    setState((oldState) => [modState, ...oldState]);
  };

  console.log(state);

  const cardsArr = state.map((card) => (
    <CardsMarkup
      key={card.pokemonName}
      pokemonName={card.pokemonName}
      pokemonNumber={card.pokemonNumber}
      pokemonType={card.pokemonType}
      pokemonImg={card.pokemonImg}
      pokemonStats={card.pokemonStats}
    />
  ));

  return (
    <>
      <div className="App-main__container">
        <CreateForm updateCards={updateCards} />
        {cardsArr}
      </div>
    </>
  );
};
