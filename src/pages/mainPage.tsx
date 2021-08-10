import { useEffect, useState } from "react";
import { getData, getDetailData } from "../api/api";
import {
  PokemonDetailProps,
  PokemonPagination,
  PokemonProps,
} from "../api/interfaces";
import { CardsContainer } from "../components/cards-container/cards-container";
import { Loader } from "../components/loader/loader";
import { SearchBar } from "../components/search-bar/searchBar";
import { Sort } from "../components/sorter/sort";
import { LIMIT_PER_PAGE, OFFSET_PER_PAGE } from "../utils/constants";

export const MainPage = (): JSX.Element => {
  const [state, setState] = useState<PokemonDetailProps[]>([]);
  const [promises, setPromises] = useState<Promise<PokemonDetailProps>[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [pagination, setPagination] = useState<PokemonPagination>();
  const [sortConfig, setSortCondig] = useState<string>("");
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
      const { results, next, previous, count } = await getData(
        OFFSET_PER_PAGE,
        LIMIT_PER_PAGE
      );
      setPagination({
        next,
        previous,
        count,
      });
      addPromises(results);
    })();
  }, []);

  useEffect(() => {
    setLoader(true);
    Promise.all(promises).then((x) => setState(x));
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, [promises, setLoader]);

  useEffect(() => {
    sorter(sortParam);
  });

  const updateCards = (modState: PokemonDetailProps) => {
    setState((oldState) => [modState, ...oldState]);
  };

  return (
    <>
      <div className="App-main__filters">
        <SearchBar addPromises={addPromises} setPagination={setPagination} />
        <Sort setSortCondig={setSortCondig} setSortParam={setSortParam} />
      </div>
      <div className="App-main__container">
        {loader ? (
          <Loader />
        ) : (
          <CardsContainer
            state={state}
            updateCards={updateCards}
            addPromises={addPromises}
            pagination={pagination}
            setPagination={setPagination}
          />
        )}
      </div>
    </>
  );
};
