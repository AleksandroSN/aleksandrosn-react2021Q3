import { NavLink } from "react-router-dom";
import { PokemonData } from "../../api/interfaces";
import { CardsMarkup } from "./cards-markup";
import "./cards.scss";

export const Cards = ({
  pokemonNumber,
  pokemonName,
  pokemonImg,
  pokemonType,
  pokemonStats,
}: PokemonData): JSX.Element => {
  return (
    <NavLink to={`/details/${pokemonName}`}>
      <CardsMarkup
        key={pokemonName}
        pokemonName={pokemonName}
        pokemonNumber={pokemonNumber}
        pokemonType={pokemonType}
        pokemonImg={pokemonImg}
        pokemonStats={pokemonStats}
      />
    </NavLink>
  );
};
