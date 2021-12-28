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
  setPageSize: (currentPageSize: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

export interface PaginationItemProps {
  pageNumber: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  changePage: (page: number) => Promise<void>;
  setInfiniteScroll: (flag: boolean) => void;
}
