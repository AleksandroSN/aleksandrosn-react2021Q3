import { FullListData } from "../api/interfaces";
import { listSelects } from "./listSelects";
import { randomStats } from "./randomStats";

export const fullListSelects = (): FullListData[] => {
  const copy = [...listSelects];
  const fullList = copy.map((item) => {
    const randomValue = randomStats();
    return { ...item, randomValue };
  });

  return fullList;
};