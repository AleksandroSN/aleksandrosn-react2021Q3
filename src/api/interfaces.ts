export interface PokemonData {
  pokemonNumber: number;
  pokemonName: string;
  pokemonImg: number;
  pokemonType: PokemonType[];
  pokemonStats: PokemonStat[];
}

export interface PokemonStats {
  stat: string;
  value: string;
}

export interface FullListData {
  randomValue: number[];
  labelValue: string;
  attrName: string;
}

export interface PokemonProps {
  name: string;
  url: string;
}

export interface PokemonBaseRequest {
  count: number;
  next: string;
  previous: string;
  results: PokemonProps[];
}

export type PokemonPagination = Omit<PokemonBaseRequest, "results">;
export interface PokemonDetailProps {
  id: number;
  name: string;
  types: PokemonType[];
  stats: PokemonStat[];
}

export interface PokemonType {
  slot: number;
  type: PokemonProps;
}

export interface PokemonStat {
  base_stat: number;
  stat: PokemonProps;
}
