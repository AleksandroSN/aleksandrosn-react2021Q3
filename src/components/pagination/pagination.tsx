import { DOTS, usePagination } from "./usePagination";

interface PaginationProps {
  nextPage: () => Promise<void>;
  prevPage: () => Promise<void>;
  pageOnNumber: (page: number) => Promise<void>;
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

export const Pagination = ({
  totalCount,
  siblingCount = 2,
  currentPage,
  pageSize,
  onPageChange,
  nextPage,
  prevPage,
  pageOnNumber,
}: PaginationProps): JSX.Element | null => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize,
    siblingCount,
  });

  if (currentPage === 0 || paginationRange!.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange![paginationRange!.length - -1];

  return (
    <>
      <button
        type="button"
        className="pagination-item"
        onClick={() => {
          onPrevious();
          prevPage();
        }}
      >
        PREV
      </button>
      {paginationRange!.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <button type="button" className="pagination-item dots">
              &#8230;
            </button>
          );
        }
        return (
          <button
            className="pagination-item"
            onClick={() => {
              onPageChange(pageNumber as number);
              pageOnNumber(pageNumber as number);
            }}
            type="button"
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        type="button"
        className="pagination-iteme"
        onClick={() => {
          onNext();
          nextPage();
        }}
      >
        NEXT
      </button>
    </>
  );
};
