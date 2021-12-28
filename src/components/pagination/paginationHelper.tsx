import {
  PaginationItemWrapper,
  PaginationItemWrapperButton,
} from "./styled-pagination";
import { PaginationItemProps } from "./types";
import { DOTS } from "../../utils";

export const activePage = (page: number, currentPage: number): string => {
  if (page === currentPage) {
    return "selected";
  }
  return "";
};

export const PaginationDots = (): JSX.Element => {
  return (
    <PaginationItemWrapper>
      <PaginationItemWrapperButton type="button" className="dots">
        {DOTS}
      </PaginationItemWrapperButton>
    </PaginationItemWrapper>
  );
};

export const PaginationItem = ({
  pageNumber,
  currentPage,
  onPageChange,
  changePage,
  setInfiniteScroll,
}: PaginationItemProps): JSX.Element => {
  return (
    <PaginationItemWrapper>
      <PaginationItemWrapperButton
        className={activePage(pageNumber, currentPage)}
        onClick={() => {
          setInfiniteScroll(false);
          onPageChange(pageNumber as number);
          changePage(pageNumber as number);
        }}
        type="button"
      >
        {pageNumber}
      </PaginationItemWrapperButton>
    </PaginationItemWrapper>
  );
};

export const range = (start: number, end: number): number[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => i + start);
};
