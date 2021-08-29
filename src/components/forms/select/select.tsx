import { FullListData } from "../../../api/interfaces";

interface SelectProps {
  updatePokemonStats: (labelValue: string, value: string) => void;
}

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
      <select
        name={attrName}
        id={attrName}
        className="App-main__container-form__options"
        onChange={(ev) => {
          updatePokemonStats(labelValue, ev.target.value);
        }}
      >
        {optionsList}
      </select>
    </label>
  );
};
