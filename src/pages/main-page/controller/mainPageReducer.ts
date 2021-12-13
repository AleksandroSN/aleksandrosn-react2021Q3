import { PokemonPagination, PokemonProps } from "../../../api/interfaces";

export interface MainPageState {
  cards: PokemonProps[];
  paginationState: PokemonPagination;
  sortConfig: string;
  sortParam: keyof PokemonProps | null;
  page: number;
  pageSize: number;
  infinityScroll: boolean;
}

export interface ActionTypes {
  type: string;
  payload?: unknown;
}

export enum FormActions {
  SET_CARDS = "setCards",
  SET_CARDS_PROMISES = "setCardsPromises",
  SET_PAGINATION_STATE = "setPaginationState",
  SET_SORT_ASC = "setSortOnAsc",
  SET_SORT_DESC = "setSortOnDesc",
  SET_PAGE = "setPage",
  SET_PAGE_SIZE = "setPageSize",
  SET_INFINITY_SCROLL = "setInfinityScroll",
}

export const initialMainPageState: MainPageState = {
  cards: [],
  infinityScroll: false,
  page: 1,
  pageSize: 20,
  paginationState: {
    next: "",
    previous: "",
    count: 0,
  },
  sortParam: null,
  sortConfig: "ASC",
};

export const MainPageReducer = (
  state: MainPageState,
  action: ActionTypes
): MainPageState => {
  switch (action.type) {
    case FormActions.SET_PAGINATION_STATE:
      return {
        ...state,
        ...{
          paginationState: (action.payload as MainPageState).paginationState,
        },
      };
    case FormActions.SET_SORT_ASC:
      return {
        ...state,
        ...{
          sortParam: (action.payload as MainPageState).sortParam,
          sortConfig: "ASC",
        },
      };
    case FormActions.SET_SORT_DESC:
      return {
        ...state,
        ...{
          sortParam: (action.payload as MainPageState).sortParam,
          sortConfig: "DESC",
        },
      };
    case FormActions.SET_INFINITY_SCROLL:
      return {
        ...state,
        ...{ infinityScroll: (action.payload as MainPageState).infinityScroll },
      };
    case FormActions.SET_CARDS:
      return {
        ...state,
        ...{ cards: (action.payload as MainPageState).cards },
      };
    case FormActions.SET_PAGE:
      return {
        ...state,
        ...{ page: (action.payload as MainPageState).page },
      };
    case FormActions.SET_PAGE_SIZE:
      return {
        ...state,
        ...{ pageSize: (action.payload as MainPageState).pageSize },
      };
    default:
      return state;
  }
};
