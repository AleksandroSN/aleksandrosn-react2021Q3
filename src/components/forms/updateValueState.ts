import { validateField } from "../../utils/validateField";
import { ActionTypes } from "./formReducer";

export const updateValue = (
  inputvalue: string,
  regExp: RegExp,
  dispatch: (value: ActionTypes) => void,
  typeAction: string
) => {
  const isValid = validateField(regExp, inputvalue);
  dispatch({
    type: typeAction,
    payload: {
      pokemonName: inputvalue,
      validPokemonName: isValid,
    },
  });
};
