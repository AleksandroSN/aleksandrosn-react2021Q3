import { useMemo } from "react";

interface PaginationHookProps {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  siblingCount: number;
}

const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (x, i) => i + start);
};

export const DOTS = "...";

export const usePagination = ({
  currentPage,
  totalCount,
  pageSize,
  siblingCount = 1,
}: PaginationHookProps): (string | number)[] | null => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    const pages = ["firstPage", "lastPage", "currentPage"];
    const leftAndRightDots = [DOTS, DOTS];
    const totalPageNumbers =
      siblingCount + pages.length + leftAndRightDots.length;

    if (totalPageNumbers >= totalPageCount) {
      return range(firstPageIndex, lastPageIndex);
    }

    const leftSiblingIndex = Math.max(
      currentPage - siblingCount,
      firstPageIndex
    );
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const shouldShowLeftDots = leftSiblingIndex > leftAndRightDots.length;

    const shouldShowRightDots =
      rightSiblingIndex < totalPageCount - leftAndRightDots.length;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount =
        pages.length + leftAndRightDots.length * siblingCount;
      const leftRange = range(firstPageIndex, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount =
        pages.length + leftAndRightDots.length * siblingCount;
      const rightRange = range(
        totalPageCount - rightItemCount + firstPageIndex,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    return null;
  }, [currentPage, totalCount, pageSize, siblingCount]);

  return paginationRange;
};
