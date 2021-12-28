import { FormEvent } from "react";
import { CheckBox } from "./checkbox";
import { CheckBoxArea } from "./checkBox-area";
import { FormReducerHelper } from "./formReducerHelper";
import { InputArea } from "./inputsArea";
import { SelectArea } from "./select-area";
import { FormBtnSbmt, FormContainer, FormTitle } from "./styled-forms";
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
    <FormContainer onSubmit={(ev) => onSubmit(ev)}>
      <FormTitle>Create Pokemon</FormTitle>
      <InputArea state={state} inputsCB={inputsCB}/>
      <SelectArea state={state} updatePokemonStats={updatePokemonStats} />
      <CheckBoxArea updateType={updateType} />
      <CheckBox updateAgreement={updateAgreement} />
      <FormBtnSbmt type="submit" disabled={!checkValid()}>
        Create
      </FormBtnSbmt>
    </FormContainer>
  );
};
