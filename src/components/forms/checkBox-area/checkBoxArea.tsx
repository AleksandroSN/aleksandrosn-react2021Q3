import { FunctionComponent } from "react";
import { listRadioButtons } from "../../../utils";
import { RadioButton } from "../radio";
import { FromCheckBoxArea } from "./styled-checkbox-area";
import { CheckBoxAreaProps } from "./types";

export const CheckBoxArea: FunctionComponent<CheckBoxAreaProps> = ({
  updateType,
}): JSX.Element => {
  const radioButtons = listRadioButtons.map(({ name, id, label }) => {
    return (
      <RadioButton
        key={label}
        name={name}
        id={id}
        label={label}
        updateType={updateType}
      />
    );
  });

  return <FromCheckBoxArea>{radioButtons}</FromCheckBoxArea>;
};
