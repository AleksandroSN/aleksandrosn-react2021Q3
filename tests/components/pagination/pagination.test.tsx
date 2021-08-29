import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Pagination } from "../../../src/components/pagination/pagination";

const testState = {
  totalCount: 1118,
  pageSize: 20,
  currentPage: 5,
  setPage(page: number) {
    return (testState.currentPage = page);
  },
};

describe("Tests for Pagination component", () => {
  const mockChangePage = jest.fn();
  const { totalCount, pageSize, currentPage, setPage } = testState;
  it("Incr and decr work ?", () => {
    const { getByText } = render(
      <Pagination
        totalCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        siblingCount={2}
        onPageChange={setPage}
        changePage={mockChangePage}
      />
    );
    const prevButton = getByText(/prev/i);
    const nextButton = getByText(/next/i);
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    userEvent.click(nextButton);
    expect(testState.currentPage).toBe(6);
    userEvent.click(prevButton);
    expect(testState.currentPage).toBe(4);
  });
});
