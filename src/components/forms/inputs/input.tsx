import { FormState } from "../formReducer";
import { InputStringProps } from "../interfaceAndTypesForms";

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
  errorValue,
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
            state.errors[`${errorValue}`]
              ? `${nameClass}`
              : `${nameClass} invalid`
          }
          onChange={(ev) => updateValue(ev.target.value)}
        />
      </label>
    </div>
  );
};
