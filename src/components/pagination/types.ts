export interface PaginationHookProps {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  siblingCount: number;
}

export interface PaginationProps {
  changePage: (page: number) => Promise<void>;
  onPageChange: (page: number) => void;
  setInfiniteScroll: (flag: boolean) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}
