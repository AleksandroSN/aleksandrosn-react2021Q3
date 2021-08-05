import { useReducer } from "react";
import { PokemonStats } from "../../api/interfaces";
import { LAST_NUMBER_POKEMON, MAX_COUNT_STATS } from "../../utils/constants";
import { validateField } from "../../utils/validateField";
import { formReducer, FORM_ACTIONS, initialFormState } from "./formReducer";
import { InputCB } from "./interfaceAndTypesForms";

export const FormReducerHelper = () => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  const updateName = (inputvalue: string): void => {
    const nameValid = validateField(/^\p{Letter}{1,30}$/iu, inputvalue);
    dispatch({
      type: FORM_ACTIONS.SET_NAME,
      payload: {
        pokemonName: inputvalue,
        errors: { ...state.errors, nameValid },
      },
    });
  };

  const updateNumber = (inputvalue: string) => {
    const numberValid = Number(inputvalue) > LAST_NUMBER_POKEMON;
    dispatch({
      type: FORM_ACTIONS.SET_NUMBER,
      payload: {
        pokemonNumber: inputvalue,
        errors: { ...state.errors, numberValid },
      },
    });
  };

  const updateType = (inputvalue: string) => {
    const typeValid = inputvalue !== undefined;
    dispatch({
      type: FORM_ACTIONS.SET_TYPE,
      payload: {
        pokemonType: inputvalue,
        errors: { ...state.errors, typeValid },
      },
    });
  };

  const updateDate = (inputvalue: string) => {
    const dateValid = inputvalue !== "";
    dispatch({
      type: FORM_ACTIONS.SET_DATE,
      payload: {
        pokemonDate: inputvalue,
        errors: { ...state.errors, dateValid },
      },
    });
  };

  const updateAgreement = (inputvalue: boolean) => {
    dispatch({
      type: FORM_ACTIONS.SET_AGREE,
      payload: {
        agreement: inputvalue,
        errors: { ...state.errors, agreement: inputvalue },
      },
    });
  };

  const updatePokemonStats = (labelValue: string, value: string) => {
    const statsValid =
      state.pokemonStats.length > MAX_COUNT_STATS ||
      state.pokemonStats.length === MAX_COUNT_STATS;
    const newData: PokemonStats = {
      stat: labelValue,
      value,
    };
    const checkDupe = state.pokemonStats.findIndex(
      (el) => el.stat === labelValue
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
