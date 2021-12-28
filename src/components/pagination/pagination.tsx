import { usePagination } from "./usePagination";
// import "./pagination.scss";
import { DOTS } from "../../utils";
import { PaginationProps } from "./types";
import {
  PaginationContainer,
  PaginationFieldSize,
  PaginationFieldSizeSelect,
  PaginationItemWrapper,
  PaginationItemWrapperButton,
  PaginationList,
  PaginationWrapper,
} from "./styled-pagination";
import { PaginationDots, PaginationItem } from "./paginationHelper";

export const Pagination = ({
  totalCount,
  siblingCount = 2,
  currentPage,
  pageSize,
  onPageChange,
  changePage,
  setInfiniteScroll,
  setPageSize,
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
    <PaginationWrapper>
      <PaginationFieldSize>
        <label htmlFor="pageSize">
          Elements on page
          <PaginationFieldSizeSelect
            name="pageSize"
            id="pageSize"
            onChange={(ev) => setPageSize(Number(ev.target.value))}
            defaultValue={pageSize}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </PaginationFieldSizeSelect>
        </label>
      </PaginationFieldSize>
      <PaginationContainer>
        <PaginationList>
          <PaginationItemWrapper>
            <PaginationItemWrapperButton
              type="button"
              className="arrow left"
              disabled={currentPage === 1}
              onClick={() => {
                onPrevious();
              }}
            >
              prev
            </PaginationItemWrapperButton>
          </PaginationItemWrapper>
          {paginationItem}
          <PaginationItemWrapper>
            <PaginationItemWrapperButton
              type="button"
              className="arrow right"
              disabled={currentPage === lastPage}
              onClick={() => {
                onNext();
              }}
            >
              next
            </PaginationItemWrapperButton>
          </PaginationItemWrapper>
        </PaginationList>
      </PaginationContainer>
    </PaginationWrapper>
  );
};
