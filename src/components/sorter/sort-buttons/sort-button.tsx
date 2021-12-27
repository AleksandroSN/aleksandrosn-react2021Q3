import {
  SortOptionsButton,
  SortOptionsItem,
  SortOptionsTitle,
} from "./styled-sort-button";
import { SortButtonProps } from "./types";

export const SortButton = ({
  sortBy,
  sortButton,
}: SortButtonProps): JSX.Element => {
  return (
    <SortOptionsItem>
      <SortOptionsTitle>{sortButton.sortBy}</SortOptionsTitle>
      <SortOptionsButton
        data-testid="sort-button-asc"
        type="button"
        onClick={() => {
          sortBy("ASC", `${sortButton.param}`);
        }}
      >
        <img src="./icons/asc.png" alt="sort asc icon" />
      </SortOptionsButton>
      <SortOptionsButton
        data-testid="sort-button-desc"
        type="button"
        onClick={() => {
          sortBy("DESC", `${sortButton.param}`);
        }}
      >
        <img src="./icons/desc.png" alt="sort desc icon" />
      </SortOptionsButton>
    </SortOptionsItem>
  );
};
