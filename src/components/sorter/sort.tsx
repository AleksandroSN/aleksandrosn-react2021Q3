import { useState } from "react";
import { SortProps } from "./types";
import { SortListOptions, SortWrapper, SortShowButton } from "./styled-sort";
import { SortButton } from "./sort-buttons";
import { listSortButtons } from "../../utils";

export const Sort = ({ sortBy }: SortProps): JSX.Element => {
  const [toogleSort, setToogleSort] = useState<boolean>(false);

  const sortButtons = listSortButtons.map((sortButton) => {
    return (
      <SortButton
        key={sortButton.param}
        sortBy={sortBy}
        sortButton={sortButton}
      />
    );
  });

  return (
    <>
      <SortWrapper>
        <SortShowButton
          title="Filter"
          type="button"
          data-testid="toggleButton"
          onClick={() => setToogleSort((x) => !x)}
        >
          <img src="./icons/filter.svg" alt="filter icon" />
        </SortShowButton>
        <SortListOptions className={toogleSort ? "" : "hide"}>
          Sort by
          {sortButtons}
        </SortListOptions>
      </SortWrapper>
    </>
  );
};
