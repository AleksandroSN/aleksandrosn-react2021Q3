import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Pagination } from "../../../src/components/pagination/pagination";
import {
  activePage,
  PaginationItem,
} from "../../../src/components/pagination/paginationHelper";

describe("active page test", () => {
  it("active page equal number page", () => {
    expect(activePage(1, 1)).toBe("pagination-item__button selected");
  });

  it("active page not equal number page", () => {
    expect(activePage(1, 2)).toBe("pagination-item__button");
  });
});

const onChangePage = (page: number) => {
  return new Promise((res) => {
    res(page + 1);
  });
};

const testState = {
  totalCount: 1118,
  pageSize: 20,
  currentPage: 1,
  setPage(page: number) {
    // eslint-disable-next-line no-return-assign
    return (testState.currentPage = page);
  },
  async changePage(page: number) {
    onChangePage(page);
  },
};

const setInfiniteScroll = jest.fn();
const setPageSize = jest.fn();

test("check render dots", () => {
  const { getAllByText } = render(
    <Pagination
      totalCount={testState.totalCount}
      currentPage={testState.currentPage}
      onPageChange={testState.setPage}
      pageSize={testState.pageSize}
      changePage={testState.changePage}
      setInfiniteScroll={setInfiniteScroll}
      setPageSize={setPageSize}
    />
  );
  const dots = getAllByText(/.../i);
  dots.forEach((dot) => {
    expect(dot).toBeInTheDocument();
  });
});

test("check render page", () => {
  const { getByRole } = render(
    <PaginationItem
      pageNumber={2}
      currentPage={testState.currentPage}
      onPageChange={testState.setPage}
      changePage={testState.changePage}
      setInfiniteScroll={setInfiniteScroll}
    />
  );
  const secondPageButton = getByRole("button");
  userEvent.click(secondPageButton);
  expect(testState.currentPage).toBe(2);
});
