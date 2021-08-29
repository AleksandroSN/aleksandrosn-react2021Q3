import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CreateForm } from "../../../src/components/forms/form";

describe("Test for forms", () => {
  const mockUpdateFn = jest.fn();
  it("Base render", () => {
    const { getByRole } = render(<CreateForm updateCards={mockUpdateFn} />);
    const formSbmBtn = getByRole("button");
    expect(formSbmBtn).toBeInTheDocument();
  });
  it("Should valid input name", () => {
    const { getByPlaceholderText } = render(
      <CreateForm updateCards={mockUpdateFn} />
    );
    const inputName = getByPlaceholderText(/Name/i);
    userEvent.type(inputName, "bulba");
    expect(inputName).toHaveValue("bulba");
    expect(inputName).toHaveClass("App-main__container-form__input");
  });
  it("Should not valid input name", () => {
    const { getByPlaceholderText, getByText } = render(
      <CreateForm updateCards={mockUpdateFn} />
    );
    const inputName = getByPlaceholderText(/Name/i);
    userEvent.type(inputName, "123");
    const errMsg = getByText(/Please enter/i);
    expect(errMsg).toBeInTheDocument();
  });
  it("Should valid input number", () => {
    const { getByPlaceholderText } = render(
      <CreateForm updateCards={mockUpdateFn} />
    );
    const inputNumber = getByPlaceholderText(/Number/i);
    userEvent.type(inputNumber, "22");
    expect(inputNumber).toHaveValue(22);
    expect(inputNumber).toHaveClass("App-main__container-form__input");
  });
  it("Should not valid input number", () => {
    const { getByPlaceholderText, getByText } = render(
      <CreateForm updateCards={mockUpdateFn} />
    );
    const inputNumber = getByPlaceholderText(/Number/i);
    userEvent.type(inputNumber, "1");
    const errMsg = getByText(/Please enter/i);
    expect(errMsg).toBeInTheDocument();
  });
  it("Should valid input date", () => {
    const { getByLabelText } = render(
      <CreateForm updateCards={mockUpdateFn} />
    );
    const inputDate = getByLabelText(/Born date/i);
    userEvent.clear(inputDate);
    userEvent.type(inputDate, "2021-08-18");
    expect(inputDate).toHaveValue("2021-08-18");
    expect(inputDate).toHaveClass("App-main__container-form__input");
  });
  it("Should not valid input date", () => {
    const { getByLabelText, getByText } = render(
      <CreateForm updateCards={mockUpdateFn} />
    );
    const inputDate = getByLabelText(/Born date/i);
    userEvent.clear(inputDate);
    userEvent.type(inputDate, "2021-08-18{backspace}");
    userEvent.clear(inputDate);
    expect(inputDate).toHaveClass("App-main__container-form__input invalid");
    const errMsg = getByText(/Please enter full Date/i);
    expect(errMsg).toBeInTheDocument();
  });
  it("Should valid all input selects", () => {
    const { getAllByRole } = render(<CreateForm updateCards={mockUpdateFn} />);
    const inputsSelect = getAllByRole("combobox");
    inputsSelect.forEach((select) => {
      userEvent.selectOptions(select, "0");
      const firstOption = screen.getByRole("option", { name: "64" });
      expect((firstOption as HTMLOptionElement).selected).toBe(true);
    });
  });
  it("Should not valid all input selects", () => {
    const { getByText } = render(<CreateForm updateCards={mockUpdateFn} />);
    const errMsg = getByText(/select all/i);
    expect(errMsg).toBeInTheDocument();
  });
  it("Should click on radio inputs", () => {
    const { getAllByRole } = render(<CreateForm updateCards={mockUpdateFn} />);
    const radioBtns = getAllByRole("radio");
    userEvent.click(radioBtns[0]);
    expect((radioBtns[0] as HTMLInputElement).checked).toBe(true);
  });
  it("Should click on checkbox inputs", () => {
    const { getByRole } = render(<CreateForm updateCards={mockUpdateFn} />);
    const checkBoxBtn = getByRole("checkbox");
    userEvent.click(checkBoxBtn);
    expect((checkBoxBtn as HTMLInputElement).checked).toBe(true);
  });
  it("Test submit if all valid", () => {
    const { getByRole, getByPlaceholderText, getByLabelText, getAllByRole } =
      render(<CreateForm updateCards={mockUpdateFn} />);

    const inputName = getByPlaceholderText(/Name/i);
    const inputNumber = getByPlaceholderText(/Number/i);
    const inputDate = getByLabelText(/Born date/i);
    const inputsSelect = getAllByRole("combobox");
    const radioBtns = getAllByRole("radio");
    const checkBoxBtn = getByRole("checkbox");
    const submitBtn = getByRole("button");

    userEvent.type(inputName, "bulba");
    userEvent.type(inputNumber, "22");
    userEvent.type(inputDate, "2021-08-18");
    inputsSelect.forEach((select) => {
      userEvent.selectOptions(select, "0");
    });
    userEvent.click(radioBtns[0]);
    userEvent.click(checkBoxBtn);
    userEvent.click(submitBtn);
    expect(mockUpdateFn).toBeCalledTimes(1);
  });
});
