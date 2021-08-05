export interface InputStringProps {
  label: string;
  type: string;
  placeholder: string;
  atrrValue: string;
  nameClass: string;
  errorValue: string;
}

export interface InputCB {
  [key: string]: (inputvalue: string) => void;
}

export type InputType = "text" | "number" | "date";
