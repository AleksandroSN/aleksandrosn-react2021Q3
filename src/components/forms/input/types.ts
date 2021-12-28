import { FormState } from "../formReducer";

export interface InputProps {
  state: FormState;
  updateValue: (inputvalue: string) => void;
}
