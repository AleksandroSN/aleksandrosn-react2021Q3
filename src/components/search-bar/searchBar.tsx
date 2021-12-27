import { FormEvent, RefObject, useRef } from "react";
import { MainPageState } from "../../pages/main-page/controller/mainPageReducer";
import {
  SearchBarBtnSbmt,
  SearchBarForm,
  SearchBarInput,
  SearchBarLabel,
} from "./styled-search-bar";

interface SearchBarProps {
  changePage: (page: number) => Promise<void>;
  searchPage: (searchElement: string) => Promise<void>;
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
    <SearchBarForm onSubmit={(ev) => onSubmit(ev)}>
      <SearchBarLabel htmlFor="searchBar">
        <SearchBarInput
          ref={searchRef}
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Search pokemon...."
        />
      </SearchBarLabel>
      <SearchBarBtnSbmt type="submit">Search</SearchBarBtnSbmt>
    </SearchBarForm>
  );
};
