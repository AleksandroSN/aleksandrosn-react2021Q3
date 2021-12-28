import { InputStringProps } from "../interfaceAndTypesForms";
import {
  InputWrapper,
  InputName,
  InputSpan,
  StyledInput,
} from "./styled-input";
import { InputProps } from "./types";

export const Input = ({
  label,
  type,
  placeholder,
  atrrValue,
  state,
  errorValue,
  errorMesage,
  updateValue,
}: InputProps & InputStringProps): JSX.Element => {
  return (
    <InputWrapper>
      <label htmlFor={atrrValue}>
        <InputName>
          {label}
          {!state.errors[`${errorValue}`] && (
            <InputSpan>{errorMesage}</InputSpan>
          )}
        </InputName>
        <StyledInput
          type={type}
          placeholder={placeholder}
          id={atrrValue}
          name={atrrValue}
          className={state.errors[`${errorValue}`] ? "" : "invalid"}
          onChange={(ev) => updateValue(ev.target.value)}
        />
      </label>
    </InputWrapper>
  );
};
