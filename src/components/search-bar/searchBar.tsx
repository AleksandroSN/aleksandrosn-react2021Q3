import { FormEvent, useRef } from "react";
import { getData } from "../../api/api";
import { PokemonProps } from "../../api/interfaces";
import { MAX_LIMIT_PER_PAGE } from "../../utils/constants";
import "./search-bar.scss";

interface SearchBarProps {
  addPromises: (pokeArr: PokemonProps[]) => void;
}

export const SearchBar = ({ addPromises }: SearchBarProps): JSX.Element => {
  const searchRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const searchEl = searchRef.current?.value.toLowerCase() as string;
    const data = await getData(MAX_LIMIT_PER_PAGE);
    const filteredState = data.results.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchEl)
    );
    addPromises(filteredState);
    // TO-DO if ERROR typing error
  };

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
