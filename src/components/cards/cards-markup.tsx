import { PokemonData } from "../../api/interfaces";
import {
  CardBody,
  CardContainer,
  CardId,
  CardImg,
  CardImgBox,
  CardName,
  CardStats,
  CardTextContainer,
  CardType,
  CardWrapper,
} from "./styled-cards";

export const CardsMarkup: React.FC<PokemonData> = ({
  pokemonImg,
  pokemonNumber,
  pokemonName,
  pokemonType,
  pokemonStats,
}: PokemonData) => {
  const stats = pokemonStats.map((pokst) => {
    return (
      <div key={pokst.stat.name}>
        <p>{pokst.stat.name}</p>
        {pokst.base_stat}
      </div>
    );
  });

  const types = pokemonType.map((x) => {
    return <span key={x.type.name}>{x.type.name}</span>;
  });

  return (
    <CardWrapper>
      <CardContainer>
        <CardBody>
          <CardImgBox>
            <CardImg
              src={`https://cdn.traction.one/pokedex/pokemon/${pokemonImg}.png`}
              alt={`pokemon ${pokemonNumber}`}
            />
          </CardImgBox>
          <CardTextContainer>
            <CardId>#{pokemonNumber}</CardId>
            <CardName>{pokemonName}</CardName>
            <CardType>{types}</CardType>
            <CardStats>{stats}</CardStats>
          </CardTextContainer>
        </CardBody>
      </CardContainer>
    </CardWrapper>
  );
};
