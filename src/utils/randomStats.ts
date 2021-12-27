export const randomStats = (): number[] => {
  const arr = [...Array(6)];
  const arrStats = arr.map(() => Math.floor(Math.random() * 80));
  return arrStats;
};
