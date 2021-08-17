import { useReducer } from "react";
import { PokemonStat } from "../../api/interfaces";
import { LAST_NUMBER_POKEMON, MAX_COUNT_STATS } from "../../utils/constants";
import { validateField } from "../../utils/validateField";
import {
  ActionTypes,
  formReducer,
  FormState,
  FORM_ACTIONS,
  initialFormState,
} from "./formReducer";
import { InputCB } from "./interfaceAndTypesForms";

interface FormReducerReturns {
  state: FormState;
  dispatch: React.Dispatch<ActionTypes>;
  updateName: (inputValue: string) => void;
  updateNumber: (inputValue: string) => void;
  updateType: (inputValue: string) => void;
  updateDate: (inputValue: string) => void;
  updateAgreement: (inputValue: boolean) => void;
  updatePokemonStats: (labelValue: string, value: string) => void;
  resetState: () => void;
  inputsCB: InputCB;
}

export const FormReducerHelper = (): FormReducerReturns => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  const updateName = (inputValue: string): void => {
    const nameValid = validateField(/^\p{Letter}{1,30}$/iu, inputValue);
    dispatch({
      type: FORM_ACTIONS.SET_NAME,
      payload: {
        pokemonName: inputValue,
        errors: { ...state.errors, nameValid },
      },
    });
  };

  const updateNumber = (inputValue: string) => {
    const numberValid = Number(inputValue) > LAST_NUMBER_POKEMON;
    dispatch({
      type: FORM_ACTIONS.SET_NUMBER,
      payload: {
        pokemonNumber: inputValue,
        errors: { ...state.errors, numberValid },
      },
    });
  };

  const updateType = (inputValue: string) => {
    const typeValid = inputValue !== undefined;
    dispatch({
      type: FORM_ACTIONS.SET_TYPE,
      payload: {
        pokemonType: [
          ...state.pokemonType,
          {
            slot: 1,
            type: {
              name: inputValue,
              url: "https://pokeapi.co/api/v2/type/12/",
            },
          },
        ],
        errors: { ...state.errors, typeValid },
      },
    });
  };

  const updateDate = (inputValue: string) => {
    const dateValid = inputValue !== "";
    dispatch({
      type: FORM_ACTIONS.SET_DATE,
      payload: {
        pokemonDate: inputValue,
        errors: { ...state.errors, dateValid },
      },
    });
  };

  const updateAgreement = (inputValue: boolean) => {
    dispatch({
      type: FORM_ACTIONS.SET_AGREE,
      payload: {
        agreement: inputValue,
        errors: { ...state.errors, agreement: inputValue },
      },
    });
  };

  const updatePokemonStats = (labelValue: string, value: string) => {
    const statsValid =
      state.pokemonStats.length > MAX_COUNT_STATS ||
      state.pokemonStats.length === MAX_COUNT_STATS;
    const newData: PokemonStat = {
      base_stat: Number(value),
      stat: {
        name: labelValue,
        url: `https://pokeapi.co/api/v2/stat/${value}/`,
      },
    };
    const checkDupe = state.pokemonStats.findIndex(
      (el) => String(el.base_stat) === labelValue
    );
    if (checkDupe >= 0) {
      dispatch({
        type: FORM_ACTIONS.SET_STATS,
        payload: {
          pokemonStats: [
            ...state.pokemonStats.slice(0, checkDupe),
            newData,
            ...state.pokemonStats.slice(checkDupe + 1),
          ],
          errors: { ...state.errors, statsValid },
        },
      });
    } else {
      dispatch({
        type: FORM_ACTIONS.SET_STATS,
        payload: {
          pokemonStats: [...state.pokemonStats, newData],
          errors: { ...state.errors, statsValid },
        },
      });
    }
  };

  const resetState = () => {
    dispatch({ type: FORM_ACTIONS.RESET });
  };

  const inputsCB: InputCB = {
    text: updateName,
    number: updateNumber,
    date: updateDate,
  };

  return {
    state,
    dispatch,
    updateName,
    updateNumber,
    updateType,
    updateDate,
    updateAgreement,
    updatePokemonStats,
    resetState,
    inputsCB,
  };
};
