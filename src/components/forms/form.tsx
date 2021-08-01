import { FormEvent, useRef, useState } from "react";
import { PokemonData, PokemonStats } from "../../api/interfaces";
import { fullListSelects } from "../../utils/randomStats";
import "./forms.scss";
import { Select } from "./select/select";

interface CreateFormProps {
  updateCards: (modState: PokemonData) => void;
}

const fullList = fullListSelects();

export const CreateForm = ({ updateCards }: CreateFormProps): JSX.Element => {
  const nameRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<string>("");
  const [pokemonStats, setPokemonStats] = useState<PokemonStats[]>([]);

  // TODO : 5. add key on map      
  //        3. validation
  //        4. remove any

  const updatePokemonStats = (labelValue: string, value: string) => {
    const newData = {
      stat: labelValue,
      value
    }
    const checkDupe = pokemonStats.findIndex(el => el.stat === labelValue);
    if (checkDupe >= 0 ) {
      setPokemonStats((old) => [...old!.slice(0, checkDupe),newData, ...old!.slice(checkDupe + 1)]);
    } else {
      setPokemonStats((old) => [...old,newData]);
    }
  }
  
  const stats = fullList.map(({attrName,labelValue,randomValue}) => {
    return <Select labelValue={labelValue} attrName={attrName} randomValue={randomValue} updatePokemonStats={updatePokemonStats}/>
  })

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const testData = {
      pokemonNumber: `#${numberRef.current?.value}`,
      pokemonName: nameRef.current?.value as string,
      pokemonImg: "./img/12.png",
      pokemonType: type,
      pokemonStats,
    };
    updateCards(testData);
    setPokemonStats([]);
  };

  return (
    <form className="App-main__container-form" onSubmit={(ev) => onSubmit(ev)}>
      <h2>Create Pokemon</h2>
      <div>
        <label htmlFor="pokemonName">
          Pokemon name :
          <input
            type="text"
            placeholder="Name"
            id="pokemonName"
            className="App-main__container-form__input"
            ref={nameRef}
          />
        </label>
      </div>
      <div>
        <label htmlFor="pokemonNumber">
          Pokemon number :
          <input
            type="number"
            placeholder="Number..."
            id="pokemonNumber"
            className="App-main__container-form__input"
            ref={numberRef}
          />
        </label>
      </div>
      <div>
        <label htmlFor="pokemonDate">
          Born date pokemon :
          <input
            type="date"
            id="pokemonDate"
            className="App-main__container-form__input"
          />
        </label>
      </div>
      <div className="App-main__container-form__select-area">
        {stats}
      </div>
      <div className="App-main__container-form__checkbox-area">
        <input
          type="radio"
          name="pokemonType"
          id="pokemonType"
          value="Grass"
          onClick={(e: any) => setType(e.target.value)}
        />
        <label htmlFor="pokemonType">Grass</label>
        <input
          type="radio"
          name="pokemonType"
          id="pokemonType2"
          value="Fire"
          onClick={(e: any) => setType(e.target.value)}
        />
        <label htmlFor="pokemonType2">Fire</label>
        <input
          type="radio"
          name="pokemonType"
          id="pokemonType3"
          value="Water"
          onClick={(e: any) => setType(e.target.value)}
        />
        <label htmlFor="pokemonType3">Water</label>
      </div>
      <div>
        <label htmlFor="pokemonAgree">
          Do you agree to create a pokemon
          <input type="checkbox" name="pokemonAgree" id="pokemonAgree" required/>
        </label>
      </div>
      <button type="submit">Create</button>
    </form>
  );
};
