import "@testing-library/jest-dom/extend-expect";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../src/store/store";
import { App } from "../../src/App";
import React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import { Page404 } from "../../src/pages/404/page404";

describe("Test routes", () => {
  it("isRender Home Page ?", () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(container.innerHTML).toMatch(/redux/i);
  });
  it("isRender About Page ?", () => {
    const { container, getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const aboutLink = getByText(/About/i);
    userEvent.click(aboutLink);
    expect(container.innerHTML).toMatch(/About Page/i);
  });
  it("isRender 404 Page ?", () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["*"]}>
          <Route path="*">
            <Page404/>
          </Route>
        </MemoryRouter>
      </Provider>
    );
    expect(container.innerHTML).toMatch(/404/i);
  });

});