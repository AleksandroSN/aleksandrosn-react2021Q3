import { validateField } from "../src/utils/validateField";

describe("Test validity fields", () => {
  it("validity is true", () => {
    expect(validateField(/^\p{Letter}{1,30}$/iu, "test")).toBeTruthy();
  });

  it("validity is false", () => {
    expect(validateField(/^\p{Letter}{1,30}$/iu, "")).toBeFalsy();
  });
});
