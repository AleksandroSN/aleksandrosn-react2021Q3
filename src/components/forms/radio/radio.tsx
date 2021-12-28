import { RadioButtonProps } from "./types";

export const RadioButton = ({
  name,
  id,
  label,
  updateType,
}: RadioButtonProps): JSX.Element => {
  return (
    <>
      <input
        type="radio"
        name={name}
        id={id}
        value={label}
        onChange={(ev) => updateType(ev.target.value)}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
};
