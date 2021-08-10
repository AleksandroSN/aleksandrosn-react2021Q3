import { FormEvent, useRef } from "react";
import { getData } from "../../api/api";
import { PokemonPagination, PokemonProps } from "../../api/interfaces";
import { MAX_LIMIT_PER_PAGE, OFFSET_PER_PAGE } from "../../utils/constants";
import "./search-bar.scss";

interface SearchBarProps {
  addPromises: (pokeArr: PokemonProps[]) => void;
  setPagination: React.Dispatch<
    React.SetStateAction<PokemonPagination | undefined>
  >;
}

export const SearchBar = ({
  addPromises,
  setPagination,
}: SearchBarProps): JSX.Element => {
  const searchRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const searchEl = searchRef.current?.value.toLowerCase() as string;
    const { next, previous, count, results } = await getData(
      OFFSET_PER_PAGE,
      MAX_LIMIT_PER_PAGE
    );

    const filteredState = results.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchEl)
    );
    setPagination({
      next,
      previous,
      count: filteredState.length,
    });
    addPromises(filteredState);
    // TO-DO if ERROR typing error and if empty result revert default state
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
