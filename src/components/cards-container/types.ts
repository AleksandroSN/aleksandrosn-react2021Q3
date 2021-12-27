import { PokemonDetailProps, PokemonProps } from "../../api/interfaces";

export interface CardsContainerProps {
  state: PokemonProps[];
  updateCards: (modState: PokemonDetailProps) => void;
}
