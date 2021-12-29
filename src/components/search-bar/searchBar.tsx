import { FormEvent, RefObject, useRef } from "react";
import {
  SearchBarBtnSbmt,
  SearchBarForm,
  SearchBarInput,
  SearchBarLabel,
} from "./styled-search-bar";
import { SearchBarProps } from "./types";

export const SearchBar = ({
  changePage,
  searchPage,
  pageNumber,
}: SearchBarProps): JSX.Element => {
  const searchRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  const onSubmit = (
    ev: FormEvent<HTMLFormElement>
  ): Promise<void> | undefined => {
    ev.preventDefault();
    if (searchRef.current === null) return;
    const searchEl = searchRef.current.value.toLowerCase();
    if (searchEl === "") {
      changePage(pageNumber);
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
