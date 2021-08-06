import { PokemonDetailProps } from "../../api/interfaces";
import { CardsMarkup } from "../cards/cards-markup";
import { CreateForm } from "../forms/form";
import "./cards-container.scss";

interface CardsContainerProps {
  state: PokemonDetailProps[];
  updateCards: (modState: PokemonDetailProps) => void;
}

export const CardsContainer = ({state, updateCards}: CardsContainerProps): JSX.Element => {

  const cardsArr = state.map((card) => (
    <CardsMarkup
      key={card.name}
      pokemonName={card.name}
      pokemonNumber={card.id}
      pokemonType={card.types}
      pokemonImg={card.id}
      pokemonStats={card.stats}
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
