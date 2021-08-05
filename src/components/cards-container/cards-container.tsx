import { useEffect, useState } from "react";
import { DummyMocks } from "../../api/dummydb";
import { MocksData } from "../../api/interfaces";
import { CardsMarkup } from "../cards/cards-markup";
import "./cards-container.scss";

export const CardsContainer = (): JSX.Element => {
  const [state, setstate] = useState<MocksData>();

  useEffect(() => {
    (async function getMocks() {
      const mocks = await DummyMocks();
      setstate(mocks);
    })();
  }, []);

  const cardsArr = state?.cards.map((card) => (
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
      <div className="App-main__container">{cardsArr}</div>
    </>
  );
};
