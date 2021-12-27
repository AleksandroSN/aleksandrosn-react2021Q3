import { NavLink } from "react-router-dom";
import { PokemonDetailProps, PokemonProps } from "../../api/interfaces";
import { CardsPreview } from "../cards/cards-preview";
import { CreateForm } from "../forms/form";
import { StyledCardsContainer } from "./styled-cards-container";

export interface CardsContainerProps {
  state: PokemonProps[];
  updateCards: (modState: PokemonDetailProps) => void;
}

export const CardsContainer = ({
  state,
  updateCards,
}: CardsContainerProps): JSX.Element => {
  const cardsArr = state.map((card) => (
    <NavLink
      key={card.name}
      className="link_to_detail"
      to={`/details/${card.name}`}
    >
      <CardsPreview key={card.name} name={card.name} url={card.url} />
    </NavLink>
  ));

  return (
    <StyledCardsContainer>
      <CreateForm updateCards={updateCards} />
      {cardsArr}
    </StyledCardsContainer>
  );
};
