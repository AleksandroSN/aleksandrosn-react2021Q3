import { PokemonData } from "../../api/interfaces";
import "./cards.scss";

export const CardsMarkup = ({
  pokemonNumber,
  pokemonName,
  pokemonImg,
  pokemonType,
  pokemonStats,
}: PokemonData): JSX.Element => {
  const stats = pokemonStats.map((pokst) => {
    return (
      <div>
        <p>{pokst.stat}</p>
        {pokst.value}
      </div>
    );
  });

  return (
    <div className="App-main__container-card--wrapper">
      <div className="App-main__container-card">
        <div className="App-main__container-card--body">
          <div className="App-main__container-card-imgbox">
            <img
              src={pokemonImg}
              alt={`pokemon ${pokemonNumber}`}
              className="App-main__container-card-img"
            />
          </div>
          <div className="App-main__container-card-text">
            <p className="App-main__container-card-id">{pokemonNumber}</p>
            <p className="App-main__container-card-name">{pokemonName}</p>
            <p className="App-main__container-card-type">{pokemonType}</p>
            <div className="App-main__container-card-stats">{stats}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
