import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Pagination } from "../src/components/pagination/pagination";
import { activePage, PaginationItem } from "../src/utils/paginationHelper";

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
  })
}

const testState = {
  totalCount: 1118,
  pageSize: 20,
  currentPage: 1,
  setPage(page: number) {
    return (testState.currentPage = page);
  },
  async changePage(page: number){
    onChangePage(page)
  },
};

test("check render dots", () => {
  const { getAllByText } = render(
    <Pagination
      totalCount={testState.totalCount}
      currentPage={testState.currentPage}
      onPageChange={testState.setPage}
      pageSize={testState.pageSize}
      changePage={testState.changePage}
    />
  );
  const dots = getAllByText(/.../i);
  dots.forEach((dot) => {
    expect(dot).toBeInTheDocument();
  })
});

test("check render page", () => {
  const { getByRole } = render(
    <PaginationItem 
    pageNumber={2}
    currentPage={testState.currentPage}
    onPageChange={testState.setPage}
    changePage={testState.changePage}/>
  )
  const secondPageButton = getByRole("button");
  userEvent.click(secondPageButton);
  expect(testState.currentPage).toBe(2);
})
