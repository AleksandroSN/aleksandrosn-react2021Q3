export interface PropsListSortButtons {
  sortBy: string;
  param: string;
}

export const listSortButtons: PropsListSortButtons[] = [
  {
    sortBy: "Number :",
    param: "id",
  },
  {
    sortBy: "Name :",
    param: "name",
  },
  {
    sortBy: "Type :",
    param: "types",
  },
];
