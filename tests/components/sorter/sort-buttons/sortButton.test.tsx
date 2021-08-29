import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Order } from "../../../../src/api/types";
import { SortButton } from "../../../../src/components/sorter/sort-buttons/sort-button";
import { PropsListSortButtons } from "../../../../src/utils/listSortButtons";

interface sortData {
  onSort: (order: Order, param: string) => void;
}

const testState = {
  sortOrder: "",
  sortParam: "",
};

const testData: PropsListSortButtons & sortData = {
  sortBy: "Name :",
  param: "name",
  onSort(order, param) {
    testState.sortOrder = order;
    testState.sortParam = param;
  },
};

describe("test sort buttons", () => {
  it("sort by ASC", () => {
    const { getByTestId } = render(
      <SortButton sortButton={testData} sortBy={testData.onSort} />
    );
    const ascButton = getByTestId(/asc/i);
    userEvent.click(ascButton);
    expect(testState.sortOrder).toBe("ASC");
  });
  it("sort by DESC", () => {
    const { getByTestId } = render(
      <SortButton sortButton={testData} sortBy={testData.onSort} />
    );
    const ascButton = getByTestId(/desc/i);
    userEvent.click(ascButton);
    expect(testState.sortOrder).toBe("DESC");
  });
});
