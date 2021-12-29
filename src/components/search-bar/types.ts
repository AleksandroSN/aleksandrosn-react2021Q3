export interface SearchBarProps {
  changePage: (page: number) => Promise<void>;
  searchPage: (searchElement: string) => Promise<void>;
  pageNumber: number;
}
