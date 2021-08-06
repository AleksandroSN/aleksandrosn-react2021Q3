import { PokemonBaseRequest, PokemonDetailProps } from "./interfaces";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon"
const BASE_URL_PAGINATION = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"

export const getDetailData = async (name: string): Promise<PokemonDetailProps> => {
  try {
    const res = await fetch(`${BASE_URL}/${name}`);
    const json = await res.json() as PokemonDetailProps;
    return json;
  } catch (e) {
   throw new Error(`${e}`);   
  }
  
}

export const getData = async (): Promise<PokemonBaseRequest> => {
  try {
    const res = await fetch(BASE_URL_PAGINATION);
    const json = await res.json() as PokemonBaseRequest;
    return json;
  } catch (e) {
    throw new Error(`${e}`);   
  }
}
