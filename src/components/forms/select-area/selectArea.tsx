import { FunctionComponent } from "react";
import { Select } from "../select";
import { SelectAreaProps } from "./types";
import { listSelects } from "../../../utils";
import { FormSelectArea, FormSelectAreaInvalid } from "./styled-select-area";

export const SelectArea: FunctionComponent<SelectAreaProps> = ({
  state,
  updatePokemonStats,
}): JSX.Element => {
  const stats = listSelects.map(({ attrName, labelValue, options }) => {
    return (
      <Select
        key={labelValue}
        labelValue={labelValue}
        attrName={attrName}
        options={options}
        updatePokemonStats={updatePokemonStats}
      />
    );
  });

  return (
    <FormSelectArea>
      {stats}
      {!state.errors.statsValid && (
        <FormSelectAreaInvalid>Please select all Stats</FormSelectAreaInvalid>
      )}
    </FormSelectArea>
  );
};
