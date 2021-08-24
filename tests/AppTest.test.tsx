import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../src/store/store";
import { App } from "../src/App";

test('renders learn react link', () => {
  const { getByText } = render(<Provider store={store}>
    <App />
  </Provider>);
  const linkElement = getByText(/Pokemon/i);
  expect(linkElement).toBeInTheDocument();
});