import { PokemonData } from "../../api/interfaces";

export const CardsMarkup: React.FC<PokemonData> = ({
  pokemonImg,
  pokemonNumber,
  pokemonName,
  pokemonType,
  pokemonStats,
}: PokemonData) => {
  const stats = pokemonStats.map((pokst) => {
    return (
      <div>
        <p>{pokst.stat.name}</p>
        {pokst.base_stat}
      </div>
    );
  });

  const types = pokemonType.map((x) => {
    return <span>{x.type.name}</span>;
  });

  return (
    <div className="App-main__container-card--wrapper">
      <div className="App-main__container-card">
        <div className="App-main__container-card--body">
          <div className="App-main__container-card-imgbox">
            <img
              src={`https://cdn.traction.one/pokedex/pokemon/${pokemonImg}.png`}
              alt={`pokemon ${pokemonNumber}`}
              className="App-main__container-card-img"
            />
          </div>
          <div className="App-main__container-card-text">
            <p className="App-main__container-card-id">#{pokemonNumber}</p>
            <p className="App-main__container-card-name">{pokemonName}</p>
            <p className="App-main__container-card-type">{types}</p>
            <div className="App-main__container-card-stats">{stats}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
