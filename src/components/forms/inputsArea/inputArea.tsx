import { FunctionComponent } from "react";
import { listFormInputs } from "../../../utils";
import { Input } from "../input";
import { InputsContainer } from "./styled-input-area";
import { InputsAreaProps } from "./types";

export const InputArea: FunctionComponent<InputsAreaProps> = ({
  inputsCB,
  state,
}) => {
  const mainInputs = listFormInputs.map(
    ({
      label,
      type,
      placeholder,
      atrrValue,

      errorValue,
      errorMesage,
    }) => {
      return (
        <Input
          key={label}
          label={label}
          type={type}
          placeholder={placeholder}
          atrrValue={atrrValue}
          errorValue={errorValue}
          errorMesage={errorMesage}
          state={state}
          updateValue={inputsCB[type]}
        />
      );
    }
  );
  return <InputsContainer>{mainInputs}</InputsContainer>;
};
