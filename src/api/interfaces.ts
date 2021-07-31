export interface PokemonData {
  pokemonNumber: string;
  pokemonName: string;
  pokemonImg: string;
  pokemonType: string;
  pokemonStats: PokemonStats[];
}

export interface PokemonStats {
  stat: string;
  value: string;
}

// export interface MocksData {
//   cards: PokemonData[];
// }
