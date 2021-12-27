import { Order } from "../../api/types";

export interface SortProps {
  sortBy: (order: Order, param: string) => void;
}
