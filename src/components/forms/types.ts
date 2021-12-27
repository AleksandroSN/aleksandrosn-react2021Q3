import { PokemonDetailProps } from "../../api/interfaces";

export interface CreateFormProps {
  updateCards: (modState: PokemonDetailProps) => void;
}
