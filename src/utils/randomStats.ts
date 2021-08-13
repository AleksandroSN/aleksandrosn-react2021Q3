import { FullListData } from "../api/interfaces";
import { listSelects } from "./listSelects";

export const randomStats = (): number[] => {
  const arr = [...Array(6)];
  const arrStats = arr.map(() => Math.floor(Math.random() * 80));
  return arrStats;
};

export const fullListSelects = (): FullListData[] => {
  const copy = [...listSelects];
  const fullList = copy.map((item) => {
    const randomValue = randomStats();
    return { ...item, randomValue };
  });

  return fullList;
};
