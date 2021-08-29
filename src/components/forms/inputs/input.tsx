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
  errorMesage,
  updateValue,
}: InputProps & InputStringProps): JSX.Element => {
  return (
    <div className="App-main__container-form__input-wrapper">
      <label htmlFor={atrrValue}>
        <p className="App-main__container-form__input-name">
          {label}
          {!state.errors[`${errorValue}`] && (
            <span className="App-main__container-form__input-span">
              {errorMesage}
            </span>
          )}
        </p>
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
