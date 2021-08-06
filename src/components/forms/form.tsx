import { FormEvent } from "react";
import { PokemonDetailProps } from "../../api/interfaces";
import { listFormInputs } from "../../utils/listInputs";
import { listRadioButtons } from "../../utils/listRadioB";
import { fullListSelects } from "../../utils/randomStats";
import { FormReducerHelper } from "./formReducerHelper";
import "./forms.scss";
import { Input } from "./inputs/input";
import { RadioButton } from "./radio/radio";
import { Select } from "./select/select";

interface CreateFormProps {
  updateCards: (modState: PokemonDetailProps) => void;
}
const fullList = fullListSelects();

export const CreateForm = ({ updateCards }: CreateFormProps): JSX.Element => {
  const {
    state,
    inputsCB,
    updateAgreement,
    updateType,
    updatePokemonStats,
    resetState,
  } = FormReducerHelper();

  const mainInputs = listFormInputs.map(
    ({
      label,
      type,
      placeholder,
      atrrValue,
      nameClass,
      errorValue,
      errorMesage,
    }) => {
      return (
        <Input
          label={label}
          type={type}
          placeholder={placeholder}
          atrrValue={atrrValue}
          nameClass={nameClass}
          errorValue={errorValue}
          errorMesage={errorMesage}
          state={state}
          updateValue={inputsCB[type]}
        />
      );
    }
  );

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

  const radioButtons = listRadioButtons.map(({ name, id, label }) => {
    return (
      <RadioButton name={name} id={id} label={label} updateType={updateType} />
    );
  });

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    // const form = ev.target as HTMLFormElement;
    // form.reset();
    // const newCard = {
    //   pokemonNumber: `#${state.pokemonNumber}`,
    //   pokemonName: state.pokemonName,
    //   pokemonImg: "./img/12.png",
    //   pokemonType: state.pokemonType,
    //   pokemonStats: state.pokemonStats,
    // };
    // updateCards(newCard);
    // resetState();
  };

  const checkValid = () => {
    return Object.values(state.errors).every((x) => x === true);
  };

  return (
    <form className="App-main__container-form" onSubmit={(ev) => onSubmit(ev)}>
      <h2 className="App-main__container-form__title">Create Pokemon</h2>
      {mainInputs}
      <div className="App-main__container-form__select-area">
        {stats}
        {!state.errors.statsValid && (
          <p className="App-main__container-form__select-area--invalid">
            Please select all Stats
          </p>
        )}
      </div>
      <div className="App-main__container-form__checkbox-area">
        {radioButtons}
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
