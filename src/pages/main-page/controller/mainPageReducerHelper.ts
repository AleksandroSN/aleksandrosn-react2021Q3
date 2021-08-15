import { useCallback, useReducer } from "react";
import { getData, getDetailData } from "../../../api/api";
import { PokemonDetailProps, PokemonProps } from "../../../api/interfaces";
import { Order } from "../../../api/types";
import { MAX_LIMIT_PER_PAGE, OFFSET_PER_PAGE } from "../../../utils/constants";
import {
  FormActions,
  initialMainPageState,
  MainPageReducer,
  MainPageState,
} from "./mainPageReducer";

interface FormReducerReturns {
  state: MainPageState;
  setCards: (arrCards: PokemonDetailProps[]) => void;
  addOneCard: (newData: PokemonDetailProps) => void;
  setLoader: (flag: boolean) => void;
  setPaginationState: (next: string, previous: string, count: number) => void;
  setCardsPromises: (arrCardsPromises: Promise<PokemonDetailProps>[]) => void;
  addPromises: (pokeArr: PokemonProps[]) => void;
  sorter: (param: keyof PokemonDetailProps) => void;
  sortBy: (order: Order, param: string) => void;
  totalCountHelper: () => number;
  setPage: (currentPage: number) => void;
  setPageSize: (currentPageSize: number) => void;
  changePage: (page: number) => Promise<void>;
  searchPage: (searchElement: string) => Promise<void>;
}

export const MainPageReducerHelper = (): FormReducerReturns => {
  const [state, dispatch] = useReducer(MainPageReducer, initialMainPageState);

  const setCards = useCallback((arrCards: PokemonDetailProps[]) => {
    dispatch({
      type: FormActions.SET_CARDS,
      payload: {
        cards: arrCards,
      },
    });
  }, []);

  const addOneCard = (newData: PokemonDetailProps) => {
    dispatch({
      type: FormActions.SET_CARDS,
      payload: {
        cards: [newData, ...state.cards],
      },
    });
  };

  const setLoader = useCallback((flag: boolean): void => {
    dispatch({
      type: FormActions.SET_LOADER,
      payload: {
        loader: flag,
      },
    });
  }, []);

  const setPaginationState = useCallback(
    (next: string, previous: string, count: number) => {
      dispatch({
        type: FormActions.SET_PAGINATION_STATE,
        payload: {
          paginationState: {
            next,
            previous,
            count,
          },
        },
      });
    },
    []
  );

  const setCardsPromises = (
    arrCardsPromises: Promise<PokemonDetailProps>[]
  ) => {
    dispatch({
      type: FormActions.SET_CARDS_PROMISES,
      payload: {
        cardsPromises: arrCardsPromises,
      },
    });
  };

  const addPromises = useCallback((pokeArr: PokemonProps[]) => {
    const tempArr: Promise<PokemonDetailProps>[] = [];
    pokeArr.forEach(({ name }) => {
      const pokemonReq = getDetailData(name);
      tempArr.push(pokemonReq);
    });
    setCardsPromises(tempArr);
    setCardsPromises([]);
  }, []);

  const sorter = (param: keyof PokemonDetailProps): void => {
    state.cards.sort((a, b) => {
      if (a[param]! < b[param]!) {
        return state.sortConfig === "ASC" ? -1 : 1;
      }
      if (a[param]! > b[param]!) {
        return state.sortConfig === "ASC" ? 1 : -1;
      }
      return 0;
    });
  };

  const sortBy = (order: Order, param: string) => {
    if (order === "ASC") {
      dispatch({
        type: FormActions.SET_SORT_ASC,
        payload: {
          sortParam: param,
        },
      });
    } else if (order === "DESC") {
      dispatch({
        type: FormActions.SET_SORT_DESC,
        payload: {
          sortParam: param,
        },
      });
    }
  };

  const totalCountHelper = () => {
    let totalCount = 0;
    if (state.paginationState?.count) {
      totalCount = state.paginationState.count;
      return totalCount;
    }

    return totalCount;
  };

  const setPage = (currentPage: number) => {
    dispatch({
      type: FormActions.SET_PAGE,
      payload: {
        page: currentPage,
      },
    });
  };

  const setPageSize = (currentPageSize: number) => {
    dispatch({
      type: FormActions.SET_PAGE_SIZE,
      payload: {
        pageSize: currentPageSize,
      },
    });
  };

  const changePage = async (page: number) => {
    const { results, next, previous, count } = await getData(
      String((page - 1) * state.pageSize),
      String(state.pageSize)
    );
    setPaginationState(next, previous, count);
    addPromises(results);
  };

  const searchPage = async (searchElement: string) => {
    const { next, previous, results } = await getData(
      OFFSET_PER_PAGE,
      MAX_LIMIT_PER_PAGE
    );

    const filteredState = results.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchElement)
    );
    setPaginationState(next, previous, filteredState.length);
    addPromises(filteredState);
  };

  return {
    setCards,
    addOneCard,
    setLoader,
    setPaginationState,
    setCardsPromises,
    addPromises,
    sorter,
    sortBy,
    totalCountHelper,
    setPage,
    setPageSize,
    changePage,
    searchPage,
    state,
  };
};
