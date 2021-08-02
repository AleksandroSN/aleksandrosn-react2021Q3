import { FormEvent, useReducer } from "react";
import { PokemonData, PokemonStats } from "../../api/interfaces";
import { fullListSelects } from "../../utils/randomStats";
import { validateField } from "../../utils/validateField";
import { formReducer, FORM_ACTIONS, initialFormState } from "./formReducer";
import "./forms.scss";
import { Select } from "./select/select";

interface CreateFormProps {
  updateCards: (modState: PokemonData) => void;
}

const LAST_NUMBER = 12;
const MAX_COUNT_STATS = 5;
const fullList = fullListSelects();

export const CreateForm = ({ updateCards }: CreateFormProps): JSX.Element => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  console.log(state);

  const updateName = (inputvalue: string) => {
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
    const numberValid = Number(inputvalue) > LAST_NUMBER;
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

  const stats = fullList.map(({ attrName, labelValue, randomValue }) => {
    return (
      <Select
        key={labelValue}
        labelValue={labelValue}
        attrName={attrName}
        randomValue={randomValue}
        updatePokemonStats={updatePokemonStats}
      />
    );
  });

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    form.reset();
    const newCard = {
      pokemonNumber: `#${state.pokemonNumber}`,
      pokemonName: state.pokemonName,
      pokemonImg: "./img/12.png",
      pokemonType: state.pokemonType,
      pokemonStats: state.pokemonStats,
    };
    updateCards(newCard);
    dispatch({
      type: FORM_ACTIONS.RESET,
    });
  };

  const checkValid = () => {
    return Object.values(state.errors).every((x) => x === true);
  };

  return (
    <form className="App-main__container-form" onSubmit={(ev) => onSubmit(ev)}>
      <h2>Create Pokemon</h2>
      <div>
        <label htmlFor="pokemonName">
          Pokemon name :
          <input
            type="text"
            placeholder="Name"
            id="pokemonName"
            name="pokemonName"
            className={
              state.errors.nameValid
                ? "App-main__container-form__input"
                : "App-main__container-form__input invalid"
            }
            onChange={(ev) => updateName(ev.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="pokemonNumber">
          Pokemon number :
          <input
            type="number"
            min="12"
            placeholder="Number..."
            id="pokemonNumber"
            name="pokemonNumber"
            className={
              state.errors.numberValid
                ? "App-main__container-form__input"
                : "App-main__container-form__input invalid"
            }
            onChange={(ev) => updateNumber(ev.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="pokemonDate">
          Born date pokemon :
          <input
            type="date"
            id="pokemonDate"
            name="pokemonDate"
            className={
              state.errors.dateValid
                ? "App-main__container-form__input"
                : "App-main__container-form__input invalid"
            }
            onChange={(ev) => updateDate(ev.target.value)}
          />
        </label>
      </div>
      <div className="App-main__container-form__select-area">{stats}</div>
      <div className="App-main__container-form__checkbox-area">
        <input
          type="radio"
          name="pokemonType"
          id="pokemonType"
          value="Grass"
          onChange={(ev) => updateType(ev.target.value)}
        />
        <label htmlFor="pokemonType">Grass</label>
        <input
          type="radio"
          name="pokemonType"
          id="pokemonType2"
          value="Fire"
          onChange={(ev) => updateType(ev.target.value)}
        />
        <label htmlFor="pokemonType2">Fire</label>
        <input
          type="radio"
          name="pokemonType"
          id="pokemonType3"
          value="Water"
          onChange={(ev) => updateType(ev.target.value)}
        />
        <label htmlFor="pokemonType3">Water</label>
      </div>
      <div>
        <label htmlFor="pokemonAgree">
          Do you agree to create a pokemon
          <input
            type="checkbox"
            name="pokemonAgree"
            id="pokemonAgree"
            required
            onClick={(ev) => updateAgreement(ev.currentTarget.checked)}
          />
        </label>
      </div>
      <button type="submit" disabled={!checkValid()}>
        Create
      </button>
    </form>
  );
};
