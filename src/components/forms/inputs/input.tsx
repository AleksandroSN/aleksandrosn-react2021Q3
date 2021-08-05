import { FormState } from "../formReducer";

export interface InputStringProps {
  label: string;
  type: string;
  placeholder: string;
  atrrValue: string;
  nameClass: string;
  updateName?: (inputvalue: string) => void;
  updateNumber?: (inputvalue: string) => void;
  updateDate?: (inputvalue: string) => void;
}

interface InputProps {
  state: FormState;
  updateValue: (inputvalue: string) => void;
}

export const Input = ({
  label,
  type,
  placeholder,
  atrrValue,
  state,
  nameClass,
  updateValue,
}: InputProps & InputStringProps): JSX.Element => {
  return (
    <div>
      <label htmlFor={atrrValue}>
        {label}
        <input
          type={type}
          placeholder={placeholder}
          id={atrrValue}
          name={atrrValue}
          className={
            state.errors.nameValid ? `${nameClass}` : `${nameClass} invalid`
          }
          onChange={(ev) => updateValue(ev.target.value)}
        />
      </label>
    </div>
  );
};
