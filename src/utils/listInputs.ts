import { InputStringProps } from "../components/forms/interfaceAndTypesForms";

export const listFormInputs: InputStringProps[] = [
  {
    label: "Pokemon name :",
    type: "text",
    placeholder: "Name",
    atrrValue: "pokemonName",
    nameClass: "App-main__container-form__input",
    errorValue: "nameValid",
    errorMesage: "Please enter text only",
  },
  {
    label: "Pokemon number :",
    type: "number",
    placeholder: "Number...",
    atrrValue: "pokemonNumber",
    nameClass: "App-main__container-form__input",
    errorValue: "numberValid",
    errorMesage: "Please enter number > 12",
  },
  {
    label: "Born date pokemon :",
    type: "date",
    placeholder: "",
    atrrValue: "pokemonDate",
    nameClass: "App-main__container-form__input",
    errorValue: "dateValid",
    errorMesage: "Please enter full Date",
  },
];
