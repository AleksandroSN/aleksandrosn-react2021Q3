import { Order } from "../../../api/types";
import { PropsListSortButtons } from "../../../utils/listSortButtons";

interface SortButtonProps {
  sortBy: (order: Order, param: string) => void;
  sortButton: PropsListSortButtons;
}

export const SortButton = ({
  sortBy,
  sortButton,
}: SortButtonProps): JSX.Element => {
  return (
    <li className="App-sort__options-item">
      <div className="App-sort__options-title">{sortButton.sortBy}</div>
      <button
        className="App-sort__options-button button--asc"
        type="button"
        onClick={() => {
          sortBy("ASC", `${sortButton.param}`);
        }}
      >
        <img src="./icons/asc.png" alt="sort asc icon" />
      </button>{" "}
      <button
        className="App-sort__options-button button--asc"
        type="button"
        onClick={() => {
          sortBy("DESC", `${sortButton.param}`);
        }}
      >
        <img src="./icons/desc.png" alt="sort desc icon" />
      </button>
    </li>
  );
};
