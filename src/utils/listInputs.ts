import { InputStringProps } from "../components/forms/interfaceAndTypesForms";

export const listFormInputs: InputStringProps[] = [
  {
    label: "Pokemon name :",
    type: "text",
    placeholder: "Name",
    atrrValue: "pokemonName",
    errorValue: "nameValid",
    errorMesage: "Please enter text only",
  },
  {
    label: "Pokemon number :",
    type: "number",
    placeholder: "Number...",
    atrrValue: "pokemonNumber",
    errorValue: "numberValid",
    errorMesage: "Please enter number > 12",
  },
  {
    label: "Born date pokemon :",
    type: "date",
    placeholder: "",
    atrrValue: "pokemonDate",
    errorValue: "dateValid",
    errorMesage: "Please enter full Date",
  },
];
