import { FormEvent, useRef, useState } from "react";
import { PokemonData } from "../../api/interfaces";
import "./forms.scss";

interface CreateFormProps {
  updateCards: (modState: PokemonData) => void;
}

export const CreateForm = ({ updateCards }: CreateFormProps): JSX.Element => {
  const nameRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<string>("");

  // TODO : 1. map select
  //        2. create arr for stats
  //        3. validation
  //        4. remove any

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const testData = {
      pokemonNumber: `#${numberRef.current?.value}`,
      pokemonName: nameRef.current?.value as string,
      pokemonImg: "./img/12.png",
      pokemonType: type,
      pokemonStats: [
        { stat: "HP", value: "45" },
        { stat: "ATK", value: "49" },
        { stat: "DEF", value: "49" },
        { stat: "SPD", value: "45" },
        { stat: "SP.ATK", value: "65" },
        { stat: "SP.DEF", value: "65" },
      ],
    };
    updateCards(testData);
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
        <label htmlFor="pokemonHP">
          HP
          <select
            name="pokemonHP"
            id="pokemonHP"
            className="App-main__container-form__options"
          >
            <option value="34">34</option>
            <option value="11">11</option>
            <option value="75">75</option>
            <option value="88">88</option>
            <option value="15">15</option>
            <option value="64">64</option>
          </select>
        </label>

        <label htmlFor="pokemonATK">
          ATK
          <select
            name="pokemonATK"
            id="pokemonATK"
            className="App-main__container-form__options"
          >
            <option value="34">34</option>
            <option value="11">11</option>
            <option value="75">75</option>
            <option value="88">88</option>
            <option value="15">15</option>
            <option value="64">64</option>
          </select>
        </label>

        <label htmlFor="pokemonDEF">
          DEF
          <select
            name="pokemonDEF"
            id="pokemonDEF"
            className="App-main__container-form__options"
          >
            <option value="34">34</option>
            <option value="11">11</option>
            <option value="75">75</option>
            <option value="88">88</option>
            <option value="15">15</option>
            <option value="64">64</option>
          </select>
        </label>

        <label htmlFor="pokemonSPD">
          SPD
          <select
            name="pokemonSPD"
            id="pokemonSPD"
            className="App-main__container-form__options"
          >
            <option value="34">34</option>
            <option value="11">11</option>
            <option value="75">75</option>
            <option value="88">88</option>
            <option value="15">15</option>
            <option value="64">64</option>
          </select>
        </label>

        <label htmlFor="pokemonSPATK">
          SP.ATK
          <select
            name="pokemonSPATK"
            id="pokemonSPATK"
            className="App-main__container-form__options"
          >
            <option value="34">34</option>
            <option value="11">11</option>
            <option value="75">75</option>
            <option value="88">88</option>
            <option value="15">15</option>
            <option value="64">64</option>
          </select>
        </label>

        <label htmlFor="pokemonSPDEF">
          SP.DEF
          <select
            name="pokemonSPDEF"
            id="pokemonSPDEF"
            className="App-main__container-form__options"
          >
            <option value="34">34</option>
            <option value="11">11</option>
            <option value="75">75</option>
            <option value="88">88</option>
            <option value="15">15</option>
            <option value="64">64</option>
          </select>
        </label>
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
          <input type="checkbox" name="pokemonAgree" id="pokemonAgree" />
        </label>
      </div>
      <button type="submit">Create</button>
    </form>
  );
};
