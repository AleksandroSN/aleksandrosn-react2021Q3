import { nextOrPrevPage } from "../../api/api";
import {
  PokemonDetailProps,
  PokemonPagination,
  PokemonProps,
} from "../../api/interfaces";
import { CardsMarkup } from "../cards/cards-markup";
import { CreateForm } from "../forms/form";
import "./cards-container.scss";

interface CardsContainerProps {
  state: PokemonDetailProps[];
  updateCards: (modState: PokemonDetailProps) => void;
  addPromises: (pokeArr: PokemonProps[]) => void;
  pagination: PokemonPagination | undefined;
  setPagination: React.Dispatch<
    React.SetStateAction<PokemonPagination | undefined>
  >;
}

export const CardsContainer = ({
  state,
  updateCards,
  addPromises,
  pagination,
  setPagination,
}: CardsContainerProps): JSX.Element => {
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

  const nextPage = async () => {
    const { results, next, previous } = await nextOrPrevPage(pagination!.next);
    setPagination({
      next,
      previous,
    });
    addPromises(results);
  };

  const prevPage = async () => {
    const { results, next, previous } = await nextOrPrevPage(
      pagination!.previous
    );
    setPagination({
      next,
      previous,
    });
    addPromises(results);
  };

  // TO-DO add sort on type,number,name
  return (
    <>
      <div className="App-main__container">
        <CreateForm updateCards={updateCards} />
        {cardsArr}
        <div className="App-main__container-pagination">
          <button
            type="button"
            className="App-main__container-pagination--prev"
            onClick={prevPage}
            disabled={pagination?.previous === null}
          >
            Prev
          </button>
          <button
            type="button"
            className="App-main__container-pagination--next"
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
