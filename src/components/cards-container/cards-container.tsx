import { NavLink } from "react-router-dom";
import { CardsPreview } from "../cards";
import { CreateForm } from "../forms";
import { StyledCardsContainer } from "./styled-cards-container";
import { CardsContainerProps } from "./types";

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
