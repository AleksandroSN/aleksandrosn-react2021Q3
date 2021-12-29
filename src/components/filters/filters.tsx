import { FunctionComponent } from "react";
import { SearchBar } from "../search-bar";
import { Sort } from "../sorter";
import { FilterWrapper } from "./styled-filters";
import { FiltersProps } from "./types";

export const Filters: FunctionComponent<FiltersProps> = ({
  changePage,
  pageNumber,
  searchPage,
  sortBy,
}) => {
  return (
    <FilterWrapper>
      <SearchBar
        changePage={changePage}
        searchPage={searchPage}
        pageNumber={pageNumber}
      />
      <Sort sortBy={sortBy} />
    </FilterWrapper>
  );
};
