import { FormEvent } from "react";
import { listFormInputs, listRadioButtons, listSelects } from "../../utils";
import { FormReducerHelper } from "./formReducerHelper";
import "./forms.scss";
import { Input } from "./inputs/input";
import { RadioButton } from "./radio/radio";
import { Select } from "./select/select";
import { CreateFormProps } from "./types";

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
          key={label}
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

  const stats = listSelects.map(({ attrName, labelValue, options }) => {
    return (
      <Select
        key={labelValue}
        labelValue={labelValue}
        attrName={attrName}
        options={options}
        updatePokemonStats={updatePokemonStats}
      />
    );
  });

  const radioButtons = listRadioButtons.map(({ name, id, label }) => {
    return (
      <RadioButton
        key={label}
        name={name}
        id={id}
        label={label}
        updateType={updateType}
      />
    );
  });

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    form.reset();

    const newCard = {
      id: Number(state.pokemonNumber),
      name: state.pokemonName,
      types: state.pokemonType,
      stats: state.pokemonStats,
    };
    updateCards(newCard);
    resetState();
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
      <button
        type="submit"
        disabled={!checkValid()}
        className="App-main__container-form__btn"
      >
        Create
      </button>
    </form>
  );
};
