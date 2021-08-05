import { InputStringProps } from "../components/forms/inputs/input";

export const listFormInputs: InputStringProps[] = [
  {
    label: "Pokemon name :",
    type: "text",
    placeholder: "Name",
    atrrValue: "pokemonName",
    nameClass: "App-main__container-form__input",
  },
  {
    label: "Pokemon number :",
    type: "number",
    placeholder: "Number...",
    atrrValue: "pokemonNumber",
    nameClass: "App-main__container-form__input",
  },
  {
    label: "Born date pokemon :",
    type: "date",
    placeholder: "",
    atrrValue: "pokemonDate",
    nameClass: "App-main__container-form__input",
  },
];
