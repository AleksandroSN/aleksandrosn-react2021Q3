import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Page404 } from "../src/pages/404/page404";

it("check 404 page render", () => {
  const { getByText } = render(<Page404 />);
  const text = getByText(/404/i);
  expect(text).toBeInTheDocument();
});
