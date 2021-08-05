import { PokemonStats } from "../../api/interfaces";

export interface FormState {
  pokemonName: string;
  pokemonNumber: string;
  pokemonDate: string;
  pokemonStats: PokemonStats[];
  pokemonType: string;
  agreement: boolean;
  errors: Record<string, unknown>;
}

export interface ActionTypes {
  type: string;
  payload?: unknown;
}

export const FORM_ACTIONS = {
  SET_NAME: "setName",
  SET_NUMBER: "setNumber",
  SET_DATE: "setDate",
  SET_STATS: "setStats",
  SET_TYPE: "setType",
  SET_AGREE: "setAgree",
  RESET: "setDefaultState",
};

export const initialFormState: FormState = {
  pokemonName: "",
  pokemonNumber: "",
  pokemonDate: "",
  pokemonStats: [],
  pokemonType: "",
  agreement: false,
  errors: {
    nameValid: true,
    numberValid: true,
    typeValid: true,
    dateValid: true,
    agreement: true,
    statsValid: false,
  },
};

export const formReducer = (
  state: FormState,
  action: ActionTypes
): FormState => {
  switch (action.type) {
    case FORM_ACTIONS.SET_NAME:
      return {
        ...state,
        ...{
          pokemonName: (action.payload as FormState).pokemonName,
          errors: (action.payload as FormState).errors,
        },
      };
    case FORM_ACTIONS.SET_NUMBER:
      return {
        ...state,
        ...{
          pokemonNumber: (action.payload as FormState).pokemonNumber,
          errors: (action.payload as FormState).errors,
        },
      };
    case FORM_ACTIONS.SET_TYPE:
      return {
        ...state,
        ...{
          pokemonType: (action.payload as FormState).pokemonType,
          errors: (action.payload as FormState).errors,
        },
      };
    case FORM_ACTIONS.SET_DATE:
      return {
        ...state,
        ...{
          pokemonDate: (action.payload as FormState).pokemonDate,
          errors: (action.payload as FormState).errors,
        },
      };
    case FORM_ACTIONS.SET_AGREE:
      return {
        ...state,
        ...{
          agreement: (action.payload as FormState).agreement,
          errors: (action.payload as FormState).errors,
        },
      };
    case FORM_ACTIONS.SET_STATS:
      return {
        ...state,
        ...{
          pokemonStats: (action.payload as FormState).pokemonStats,
          errors: (action.payload as FormState).errors,
        },
      };
    case FORM_ACTIONS.RESET:
      return { ...state, ...initialFormState };
    default:
      return state;
  }
};
