import { NavLink } from "react-router-dom";
import { PokemonDetailProps, PokemonProps } from "../../api/interfaces";
import { CardsPreview } from "../cards/cards-preview";
import { CreateForm } from "../forms/form";
import "./cards-container.scss";

interface CardsContainerProps {
  state: PokemonProps[];
  updateCards: (modState: PokemonDetailProps) => void;
}

export const CardsContainer = ({
  state,
  updateCards,
}: CardsContainerProps): JSX.Element => {
  const cardsArr = state.map((card) => (
    <NavLink
      className="App-main__container-card--link"
      to={`/details/${card.name}`}
    >
      <CardsPreview key={card.name} name={card.name} url={card.url} />
    </NavLink>
  ));

  return (
    <>
      <CreateForm updateCards={updateCards} />
      {cardsArr}
    </>
  );
};
