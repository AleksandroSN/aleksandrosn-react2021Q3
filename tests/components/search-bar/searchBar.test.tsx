import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { SearchBar } from "../../../src/components/search-bar/searchBar";
import { MainPageState } from "../../../src/pages/main-page/controller/mainPageReducer";

const testState: MainPageState = {
  cards: [],
  // cardsPromises: [],
  paginationState: {
    next: "",
    previous: "",
    count: 0,
  },
  sortConfig: "ASC",
  sortParam: null,
  page: 1,
  pageSize: 20,
  infinityScroll: false,
};

describe("test Search bar component", () => {
  const mockSearchFn = jest.fn();
  const mockChangeFn = jest.fn();
  it("Render component", () => {
    const { getByPlaceholderText } = render(
      <SearchBar
        state={testState}
        searchPage={mockSearchFn}
        changePage={mockChangeFn}
      />
    );
    const searchInput = getByPlaceholderText(/Search/i);
    expect(searchInput).toBeInTheDocument();
  });
  it("Submit with value", () => {
    const { getByPlaceholderText } = render(
      <SearchBar
        state={testState}
        searchPage={mockSearchFn}
        changePage={mockChangeFn}
      />
    );
    const searchInput = getByPlaceholderText(/Search/i);
    userEvent.type(searchInput, "saur{enter}");
    expect(searchInput).toHaveValue("saur");
    expect(mockSearchFn).toBeCalled();
  });
  it("Submit without value", () => {
    const { getByPlaceholderText } = render(
      <SearchBar
        state={testState}
        searchPage={mockSearchFn}
        changePage={mockChangeFn}
      />
    );
    const searchInput = getByPlaceholderText(/Search/i);
    userEvent.type(searchInput, "{enter}");
    expect(searchInput).toHaveValue("");
    expect(mockChangeFn).toBeCalled();
  });
});
