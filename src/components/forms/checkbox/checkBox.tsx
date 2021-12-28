import { FunctionComponent } from "react";
import { FormCheckBox } from "./styled-checkbox";
import { CheckBoxProps } from "./types";

export const CheckBox: FunctionComponent<CheckBoxProps> = ({
  updateAgreement,
}) => {
  return (
    <div>
      <label htmlFor="pokemonAgree">
        Do you agree to create a pokemon
        <FormCheckBox
          type="checkbox"
          name="pokemonAgree"
          id="pokemonAgree"
          required
          onClick={(ev) => updateAgreement(ev.currentTarget.checked)}
        />
      </label>
    </div>
  );
};
