import { useState } from "react";
import { getData, nextOrPrevPage } from "../../api/api";
import {
  PokemonDetailProps,
  PokemonPagination,
  PokemonProps,
} from "../../api/interfaces";
import { LIMIT_PER_PAGE } from "../../utils/constants";
import { CardsMarkup } from "../cards/cards-markup";
import { CreateForm } from "../forms/form";
import { Pagination } from "../pagination/pagination";
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
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

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

  const totalCountHelper = () => {
    let totalCount = 0;
    if (pagination?.count) {
      totalCount = pagination.count;
      return totalCount;
    }

    return totalCount;
  };

  const nextPage = async () => {
    const { results, next, previous, count } = await nextOrPrevPage(
      pagination!.next
    );
    setPagination({
      next,
      previous,
      count,
    });
    addPromises(results);
  };

  const prevPage = async () => {
    const { results, next, previous, count } = await nextOrPrevPage(
      pagination!.previous
    );
    setPagination({
      next,
      previous,
      count,
    });
    addPromises(results);
  };

  const pageOnNumber = async (page: number) => {
    const { results, next, previous, count } = await getData(
      String((page - 1) * pageSize),
      LIMIT_PER_PAGE
    );
    setPagination({
      next,
      previous,
      count,
    });
    addPromises(results);
  };

  return (
    <>
      <CreateForm updateCards={updateCards} />
      {cardsArr}
      <div className="App-main__container-pagination">
        <Pagination
          totalCount={totalCountHelper()}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          pageSize={pageSize}
          nextPage={nextPage}
          prevPage={prevPage}
          pageOnNumber={pageOnNumber}
        />
      </div>
    </>
  );
};
