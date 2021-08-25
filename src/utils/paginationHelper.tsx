export const activePage = (page: number, currentPage: number): string => {
  if (page === currentPage) {
    return "pagination-item__button selected";
  }
  return "pagination-item__button";
};

export const PaginationDots = (): JSX.Element => {
  return (
    <li className="pagination-item">
      <button type="button" className="pagination-item__button dots">
        &#8230;
      </button>
    </li>
  );
};

interface PaginationItemProps {
  pageNumber: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  changePage: (page: number) => Promise<void>;
}

export const PaginationItem = ({
  pageNumber,
  currentPage,
  onPageChange,
  changePage,
}: PaginationItemProps): JSX.Element => {
  return (
    <li className="pagination-item">
      <button
        className={activePage(pageNumber, currentPage)}
        onClick={() => {
          onPageChange(pageNumber as number);
          changePage(pageNumber as number);
        }}
        type="button"
        role="button"
      >
        {pageNumber}
      </button>
    </li>
  );
};
