import { usePagination } from "./usePagination";
import "./pagination.scss";
import { PaginationDots, PaginationItem } from "../../utils/paginationHelper";
import { PaginationProps } from "./types";
import { DOTS } from "../../utils/constants";

export const Pagination = ({
  totalCount,
  siblingCount = 2,
  currentPage,
  pageSize,
  onPageChange,
  changePage,
  setInfiniteScroll,
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

  // TO-DO перенести или объединить ?

  const onNext = () => {
    setInfiniteScroll(false);
    onPageChange(currentPage + 1);
    changePage(currentPage + 1);
  };

  const onPrevious = () => {
    setInfiniteScroll(false);
    onPageChange(currentPage - 1);
    changePage(currentPage - 1);
  };

  const lastPage = paginationRange![paginationRange!.length - 1];

  // TO-DO fix many dots
  const paginationItem = paginationRange!.map((pageNumber) => {
    if (pageNumber === DOTS) {
      return <PaginationDots key={pageNumber} />;
    }
    return (
      <PaginationItem
        key={pageNumber}
        pageNumber={pageNumber as number}
        currentPage={currentPage}
        onPageChange={onPageChange}
        changePage={changePage}
        setInfiniteScroll={setInfiniteScroll}
      />
    );
  });

  return (
    <div className="App-main__pagination__wrapper">
      <ul className="App-main__pagination__list">
        <li className="pagination-item">
          <button
            type="button"
            className="pagination-item__button arrow left"
            disabled={currentPage === 1}
            onClick={() => {
              onPrevious();
            }}
          >
            prev
          </button>
        </li>
        {paginationItem}
        <li className="pagination-item">
          <button
            type="button"
            className="pagination-item__button arrow right"
            disabled={currentPage === lastPage}
            onClick={() => {
              onNext();
            }}
          >
            next
          </button>
        </li>
      </ul>
    </div>
  );
};
