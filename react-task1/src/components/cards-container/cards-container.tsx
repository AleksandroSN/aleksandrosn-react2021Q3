import { useEffect, useState } from "react";
import { DummyMocks } from "../../api/dummydb";
import { MocksData } from "../../api/interfaces";
import { CardsMarkup } from "../cards/cards-markup";

export const CardsContainer = (): JSX.Element => {
  const [state, setstate] = useState<MocksData>();

  useEffect(() => {
    (async function getMocks() {
      const mocks = await DummyMocks();
      setstate(mocks);
    })();
  }, []);

  const cardsArr = state?.cards.map((card) => (
    <CardsMarkup word={card.word} translation={card.translation} />
  ));

  return (
    <>
      <div className="App-main__container">{cardsArr}</div>
    </>
  );
};
