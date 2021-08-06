import { FormEvent, useRef } from "react";
import { getDetailData } from "../../api/api";
import { PokemonDetailProps } from "../../api/interfaces";
import "./search-bar.scss";

interface SearchBarProps {
  state: PokemonDetailProps[];
  updateCards: (modState: PokemonDetailProps) => void;
}

export const SearchBar = ({state,updateCards}: SearchBarProps): JSX.Element => {
  const searchRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const searchEl = searchRef.current?.value.toLowerCase() as string;
    const req = await getDetailData(searchEl);
    updateCards(req);
    // TO-DO if ERROR typing error
  }
  
  return (
    <form className="App-searchBar" onSubmit={(ev) => onSubmit(ev)}>
      <label htmlFor="searchBar" className="App-searchBar__label">
        <input
          ref={searchRef}
          type="text"
          name="searchBar"
          id="searchBar"
          className="App-searchBar__input"
          placeholder="Search pokemon...."
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};
