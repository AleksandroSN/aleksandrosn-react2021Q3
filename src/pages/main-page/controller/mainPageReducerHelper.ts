import { useCallback, useReducer } from "react";
import { useDispatch } from "react-redux";
import {
  PokemonBaseRequest,
  PokemonDetailProps,
  PokemonProps,
} from "../../../api/interfaces";
import { Order } from "../../../api/types";
import { getData } from "../../../store/api/apiAsyncThunk";
import { baseReq, useAppSelector } from "../../../store/store";
import { MAX_LIMIT_PER_PAGE, OFFSET_PER_PAGE } from "../../../utils/constants";
import {
  FormActions,
  initialMainPageState,
  MainPageReducer,
  MainPageState,
} from "./mainPageReducer";

interface FormReducerReturns {
  state: MainPageState;
  addOneCard: (newData: PokemonDetailProps) => void;
  updatePokData: () => void;
  sorter: (
    cards: PokemonProps[],
    sortedParams: keyof PokemonProps | null,
    sortConfig: string
  ) => void;
  sortBy: (order: Order, param: string) => void;
  totalCountHelper: () => number;
  setPage: (currentPage: number) => void;
  setPageSize: (currentPageSize: number) => void;
  changePage: (page: number) => Promise<void>;
  searchPage: (searchElement: string) => Promise<void>;
  setInfiniteScroll: (flag: boolean) => void;
}

export const MainPageReducerHelper = (): FormReducerReturns => {
  const [state, dispatch] = useReducer(MainPageReducer, initialMainPageState);
  const req = useAppSelector(baseReq);
  const reduxDispatch = useDispatch();

  const setCards = (arrCards: PokemonProps[]) => {
    dispatch({
      type: FormActions.SET_CARDS,
      payload: {
        cards: arrCards,
      },
    });
  };

  const addCards = (arrCards: PokemonProps[]) => {
    dispatch({
      type: FormActions.SET_CARDS,
      payload: {
        cards: [...state.cards, ...arrCards],
      },
    });
  };
  const addOneCard = (newData: PokemonDetailProps) => {
    dispatch({
      type: FormActions.SET_CARDS,
      payload: {
        cards: [newData, ...state.cards],
      },
    });
  };

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

  const updatePokData = useCallback(async () => {
    if (((await req) as PokemonBaseRequest).results) {
      const { count, next, previous, results } = req as PokemonBaseRequest;
      // BLOCK RENDER if elem in arr > 30 ! temp
      if (results.length > 30) {
        return;
      }
      const renderArr = [...results];
      setPaginationState(next, previous, count);
      if (state.infinityScroll) {
        addCards(renderArr);
      } else {
        setCards(renderArr);
      }
      renderArr.length = 0;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [req, state.infinityScroll]);

  const sorter = (
    cards: PokemonProps[],
    sortedParams: keyof PokemonProps | null,
    sortConfig: string
  ): void => {
    if (sortedParams !== null) {
      cards.sort((a, b) => {
        if (a[sortedParams] < b[sortedParams]) {
          return sortConfig === "ASC" ? -1 : 1;
        }
        if (a[sortedParams] > b[sortedParams]) {
          return sortConfig === "ASC" ? 1 : -1;
        }
        return 0;
      });
    }
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
    reduxDispatch(
      getData({
        offset: String((page - 1) * state.pageSize),
        limit: String(state.pageSize),
      })
    );
  };

  const searchPage = async (searchElement: string) => {
    reduxDispatch(
      getData({ offset: OFFSET_PER_PAGE, limit: MAX_LIMIT_PER_PAGE })
    );
    if (((await req) as PokemonBaseRequest).results) {
      const { results, next, previous } = req as PokemonBaseRequest;
      const filteredState = results.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchElement)
      );

      setPaginationState(next, previous, filteredState.length);
      setCards(filteredState);
    }
  };

  const setInfiniteScroll = (flag: boolean) => {
    dispatch({
      type: FormActions.SET_INFINITY_SCROLL,
      payload: {
        infinityScroll: flag,
      },
    });
  };

  return {
    addOneCard,
    updatePokData,
    setInfiniteScroll,
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
