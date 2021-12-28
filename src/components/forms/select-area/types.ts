import { FormState } from "../formReducer";

export interface SelectAreaProps {
  state: FormState;
  updatePokemonStats: (labelValue: string, value: string) => void;
}
