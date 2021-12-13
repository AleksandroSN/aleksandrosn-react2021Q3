export interface InfiniteScrollProps {
  pageNumber: number;
  loadNewPage: (page: number) => Promise<void>;
  setNewPage: (page: number) => void;
  setInfiniteScroll: (flag: boolean) => void;
}
