import { PokemonData } from "./interfaces";

export const DummyMocks = async (): Promise<PokemonData[]> => {
  try {
    const response = await fetch("./dummydb.json");
    const json = (await response.json()) as PokemonData[];
    return json;
  } catch (e) {
    throw new Error(`${e}`);
  }
};
