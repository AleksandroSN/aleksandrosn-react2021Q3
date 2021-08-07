import { useEffect, useState } from "react";
import { getData, getDetailData } from "../api/api";
import {
  PokemonBaseRequest,
  PokemonDetailProps,
  PokemonPagination,
  PokemonProps,
} from "../api/interfaces";
import { CardsContainer } from "../components/cards-container/cards-container";
import { SearchBar } from "../components/search-bar/searchBar";
import { LIMIT_PER_PAGE } from "../utils/constants";

export const MainPage = (): JSX.Element => {
  const [state, setState] = useState<PokemonDetailProps[]>([]);
  const [promises, setPromises] = useState<Promise<PokemonDetailProps>[]>([]);
  const [pagination, setPagination] = useState<PokemonPagination>();

  const addPromises = (pokeArr: PokemonProps[]) => {
    pokeArr.forEach(({ name }) => {
      const pokemonReq = getDetailData(name);
      setPromises((newState) => [...newState, pokemonReq]);
    });
    setPromises([]);
  };

  useEffect(() => {
    (async function getMocks() {
      const { results, next, previous } = await getData(LIMIT_PER_PAGE);
      setPagination({
        next,
        previous,
      });
      addPromises(results);
    })();
  }, []);

  useEffect(() => {
    Promise.all(promises).then((x) => setState(x));
  }, [promises]);

  const updateCards = (modState: PokemonDetailProps) => {
    setState((oldState) => [modState, ...oldState]);
  };

  return (
    <>
      <SearchBar addPromises={addPromises} />
      <CardsContainer
        state={state}
        updateCards={updateCards}
        addPromises={addPromises}
        pagination={pagination}
        setPagination={setPagination}
      />
    </>
  );
};
