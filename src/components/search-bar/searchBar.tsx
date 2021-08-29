import { FormEvent, RefObject, useRef } from "react";
import { MainPageState } from "../../pages/main-page/controller/mainPageReducer";
import "./search-bar.scss";

interface SearchBarProps {
  changePage: (page: number) => Promise<void>;
  searchPage: (searchElement: string) => Promise<void>;
  // searchPage: (searchElement: string) => void
  state: MainPageState;
}

export const SearchBar = ({
  changePage,
  searchPage,
  state,
}: SearchBarProps): JSX.Element => {
  const searchRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  const onSubmit = (
    ev: FormEvent<HTMLFormElement>
  ): Promise<void> | undefined => {
    ev.preventDefault();
    if (searchRef.current === null) return;
    const searchEl = searchRef.current.value.toLowerCase();
    if (searchEl === "") {
      changePage(state.page);
    } else {
      searchPage(searchEl);
    }
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
      <button className="App-searchBar__button" type="submit">
        Search
      </button>
    </form>
  );
};
