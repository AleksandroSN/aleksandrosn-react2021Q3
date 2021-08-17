export const validateField = (regExp: RegExp, value: string): boolean => {
  const resValid = regExp.test(value);
  return resValid;
};
