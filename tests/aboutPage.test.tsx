import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { AboutPage } from "../src/pages/about-page/aboutPage";

it("check 404 page render", () => {
  const { getByText } = render(<AboutPage />);
  const text = getByText(/About/i);
  expect(text).toBeInTheDocument();
});
