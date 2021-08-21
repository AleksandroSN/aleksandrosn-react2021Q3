import {
  PokemonDetailProps,
  PokemonPagination,
  PokemonProps,
} from "../../../api/interfaces";

export interface MainPageState {
  // cards: PokemonDetailProps[];
  cards: PokemonProps[];
  cardsPromises: Promise<PokemonDetailProps>[];
  // loader: boolean;
  paginationState: PokemonPagination;
  sortConfig: string;
  sortParam: keyof PokemonProps | null;
  page: number;
  pageSize: number;
}

export interface ActionTypes {
  type: string;
  payload?: unknown;
}

export enum FormActions {
  SET_CARDS = "setCards",
  SET_CARDS_PROMISES = "setCardsPromises",
  // SET_LOADER = "setLoader",
  SET_PAGINATION_STATE = "setPaginationState",
  SET_SORT_ASC = "setSortOnAsc",
  SET_SORT_DESC = "setSortOnDesc",
  SET_PAGE = "setPage",
  SET_PAGE_SIZE = "setPageSize",
}

export const initialMainPageState: MainPageState = {
  cards: [],
  cardsPromises: [],
  // loader: false,
  paginationState: {
    next: "",
    previous: "",
    count: 0,
  },
  sortConfig: "ASC",
  sortParam: null,
  page: 1,
  pageSize: 20,
};

export const MainPageReducer = (
  state: MainPageState,
  action: ActionTypes
): MainPageState => {
  switch (action.type) {
    // case FormActions.SET_LOADER:
    //   return {
    //     ...state,
    //     ...{ loader: (action.payload as MainPageState).loader },
    //   };
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
    case FormActions.SET_CARDS_PROMISES:
      return {
        ...state,
        ...{ cardsPromises: (action.payload as MainPageState).cardsPromises },
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
