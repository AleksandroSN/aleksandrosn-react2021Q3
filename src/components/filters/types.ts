import { Order } from "../../api/types";

export interface FiltersProps {
  pageNumber: number;
  searchPage: (searchElement: string) => Promise<void>;
  sortBy: (order: Order, param: string) => void;
  changePage: (page: number) => Promise<void>;
}
