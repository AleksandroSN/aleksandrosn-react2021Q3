import { FullListData } from "../../../api/interfaces";
import { FormOptions } from "./styled-select";
import { SelectProps } from "./types";

export const Select = ({
  labelValue,
  attrName,
  options,
  updatePokemonStats,
}: FullListData & SelectProps): JSX.Element => {
  const optionsList = options.map((option, i) => {
    return (
      <option key={option} value={`${i}`}>
        {option}
      </option>
    );
  });
  return (
    <label htmlFor={attrName}>
      {labelValue}
      <FormOptions
        name={attrName}
        id={attrName}
        onChange={(ev) => {
          updatePokemonStats(labelValue, ev.target.value);
        }}
      >
        {optionsList}
      </FormOptions>
    </label>
  );
};
