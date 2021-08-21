import { DOTS, usePagination } from "./usePagination";
import "./pagination.scss";
import { PaginationDots, PaginationItem } from "../../utils/paginationHelper";

interface PaginationProps {
  changePage: (page: number) => Promise<void>;
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
  changePage,
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
    onPageChange(currentPage + 1);
    changePage(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
    changePage(currentPage - 1);
  };

  const lastPage = paginationRange![paginationRange!.length - 1];

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
