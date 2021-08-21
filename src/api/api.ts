import { PokemonBaseRequest, PokemonDetailProps } from "./interfaces";

export const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

// export const getDetailData = async (
//   name: string
// ): Promise<PokemonDetailProps> => {
//   try {
//     const res = await fetch(`${BASE_URL}/${name}`);
//     const json = (await res.json()) as PokemonDetailProps;
//     return json;
//   } catch (e) {
//     throw new Error(`${e}`);
//   }
// };

// export const getData = async (
//   offset: string,
//   limit: string
// ): Promise<PokemonBaseRequest> => {
//   try {
//     const res = await fetch(`${BASE_URL}/?offset=${offset}&limit=${limit}`);
//     const json = (await res.json()) as PokemonBaseRequest;
//     return json;
//   } catch (e) {
//     throw new Error(`${e}`);
//   }
// };

// export const nextOrPrevPage = async (
//   url: string
// ): Promise<PokemonBaseRequest> => {
//   try {
//     const res = await fetch(url);
//     const json = (await res.json()) as PokemonBaseRequest;
//     return json;
//   } catch (e) {
//     throw new Error(`${e}`);
//   }
// };
