import { MocksData } from "./interfaces";

export const DummyMocks = async (): Promise<MocksData> => {
  try {
    const response = await fetch("../assets/dummydb.json");
    const json = (await response.json()) as MocksData;
    return json;
  } catch (e) {
    throw new Error(`${e}`);
  }
};
