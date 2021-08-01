import { FullListData } from "../../../api/interfaces"

interface SelectProps {
  updatePokemonStats: (labelValue: string, value: string) => void
}

export const Select = ({labelValue,attrName,randomValue,updatePokemonStats}: FullListData & SelectProps): JSX.Element => {
    return (
      <label htmlFor={attrName}>
          {labelValue}
          <select
            name={attrName}
            id={attrName}
            className="App-main__container-form__options"
            onChange={(ev) => {
              updatePokemonStats(labelValue, ev.target.value)}
            }
          >
            <option value={randomValue[0]}>{randomValue[0]}</option>
            <option value={randomValue[1]}>{randomValue[1]}</option>
            <option value={randomValue[2]}>{randomValue[2]}</option>
            <option value={randomValue[3]}>{randomValue[3]}</option>
            <option value={randomValue[4]}>{randomValue[4]}</option>
            <option value={randomValue[5]}>{randomValue[5]}</option>
          </select>
        </label>
    )
}