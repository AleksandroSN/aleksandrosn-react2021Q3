import { useState } from "react";
import { Order } from "../../api/types";
import { listSortButtons } from "../../utils/listSortButtons";
import { SortButton } from "./sort-buttons/sort-button";
import "./sort.scss";

interface SortProps {
  sortBy: (order: Order, param: string) => void;
}

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
      <div className="App-sort">
        <button
          className="App-sort__button"
          title="Filter"
          type="button"
          data-testid="toggleButton"
          onClick={() => setToogleSort((x) => !x)}
        >
          <img src="./icons/filter.svg" alt="filter icon" />
        </button>
        <ul
          className={
            toogleSort ? "App-sort__options" : "App-sort__options hide"
          }
        >
          Sort by
          {sortButtons}
        </ul>
      </div>
    </>
  );
};
