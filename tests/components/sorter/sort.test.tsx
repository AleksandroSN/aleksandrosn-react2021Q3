import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Order } from "../../../src/api/types";
import { Sort } from "../../../src/components/sorter/sort";

const onSort = (order: Order, param: string) => {

}

it("check toggle sort button", () => {
  const { getByTestId, getByText } = render(<Sort sortBy={onSort}/>);
  const sortButton = getByTestId("toggleButton");
  userEvent.click(sortButton);
  const list = getByText(/Sort/i);
  expect(list).toHaveClass("App-sort__options");
})