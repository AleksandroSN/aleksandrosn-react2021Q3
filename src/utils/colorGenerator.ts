const hexString = "0123456789abcdef";

export const randomColor = (): string => {
  let hexCode = "#";
  for (let i = 0; i < 6; i += 1) {
    hexCode += hexString[Math.floor(Math.random() * hexString.length)];
  }
  return hexCode;
};

export const generateGrad = (): string => {
  const colorOne = randomColor();
  const colorTwo = randomColor();
  return `linear-gradient(to bottom right, ${colorOne}, ${colorTwo})`;
};
