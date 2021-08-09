import { useEffect, useState } from "react";
import { getData, getDetailData } from "../api/api";
import {
  PokemonDetailProps,
  PokemonPagination,
  PokemonProps,
} from "../api/interfaces";
import { CardsContainer } from "../components/cards-container/cards-container";
import { SearchBar } from "../components/search-bar/searchBar";
import { Sort } from "../components/sorter/sort";
import { LIMIT_PER_PAGE } from "../utils/constants";

export const MainPage = (): JSX.Element => {
  const [state, setState] = useState<PokemonDetailProps[]>([]);
  const [promises, setPromises] = useState<Promise<PokemonDetailProps>[]>([]);
  const [pagination, setPagination] = useState<PokemonPagination>();
  const [sortConfig, setSortCondig] = useState<string>("ASC");
  const [sortParam, setSortParam] = useState<keyof PokemonDetailProps>("id");

  const addPromises = (pokeArr: PokemonProps[]) => {
    pokeArr.forEach(({ name }) => {
      const pokemonReq = getDetailData(name);
      setPromises((newState) => [...newState, pokemonReq]);
    });
    setPromises([]);
  };

  const sorter = (param: keyof PokemonDetailProps): void => {
    state.sort((a, b) => {
      if (sortConfig === "DESC") {
        return a[param] > b[param] ? 1 : -1;
      }
      if (sortConfig === "ASC") {
        return a[param] < b[param] ? 1 : -1;
      }
      return 0;
    });
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

  console.log(sortConfig);

  useEffect(() => {
    sorter(sortParam);
  });

  const updateCards = (modState: PokemonDetailProps) => {
    setState((oldState) => [modState, ...oldState]);
  };

  return (
    <>
      <div className="App-main__filters">
        <SearchBar addPromises={addPromises} />
        <Sort
          setSortCondig={setSortCondig}
          setSortParam={setSortParam}
        />
      </div>
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
