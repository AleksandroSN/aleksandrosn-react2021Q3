import { Order } from "../../../api/types";
import { PropsListSortButtons } from "../../../utils";

export interface SortButtonProps {
  sortBy: (order: Order, param: string) => void;
  sortButton: PropsListSortButtons;
}
