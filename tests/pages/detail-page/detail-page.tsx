import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import fetchMock from "jest-fetch-mock"
import { Provider } from "react-redux";
import { store } from "../../../src/store/store";
import { MemoryRouter, Route } from "react-router-dom";
import { DetailPage } from "../../../src/pages/detail-page/detail-page";
import { getDetailData } from "../../../src/store/api/apiAsyncThunk";

const pokemonName = "bulbasaur";

describe("Test detail page", () => {
  beforeEach(() => {
    fetchMock.resetMocks();   
  });

  it("is Detail page not render ?", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/details/${pokemonName}`]}>
          <Route path="/details/:name">
            <DetailPage/>
          </Route>
        </MemoryRouter>
      </Provider>
    );
   return store.dispatch(getDetailData("bulba")).then(async () => {
     const state = store.getState();
     expect(state.error).toBe("error");
   })
  });
  it("is Detail page render ?", async () => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/details/${pokemonName}`]}>
          <Route path="/details/:name">
            <DetailPage/>
          </Route>
        </MemoryRouter>
      </Provider>
    );
   return store.dispatch(getDetailData(`${pokemonName}`)).then(async () => {
     const pokTitle = await getByText(/bulbasaur/i);
     expect(pokTitle).toBeInTheDocument();
   })
  });
});
