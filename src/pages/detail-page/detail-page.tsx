import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getDetailData } from "../../api/api";
import { PokemonAllData } from "../../api/interfaces";
import { CardsMarkup } from "../../components/cards/cards-markup";

interface ParamsDetailPage {
  name: string;
}

export const DetailPage = () => {
  const [pokemonDetail, setPokemonDetail] = useState<PokemonAllData | null>(
    null
  );
  const { name } = useParams<ParamsDetailPage>();

  useEffect(() => {
    (async function sendReq() {
      const data = await getDetailData(name);
      setPokemonDetail(data);
    })();
  }, [name]);

  return (
    <>
      {pokemonDetail !== null && (
        <CardsMarkup
          key={pokemonDetail.name}
          pokemonName={pokemonDetail.name as string}
          pokemonNumber={pokemonDetail.id}
          pokemonType={pokemonDetail.types}
          pokemonImg={pokemonDetail.id}
          pokemonStats={pokemonDetail.stats}
        />
      )}
      <div>
        <p>heigth: {pokemonDetail?.height}</p>
        <p>weigth: {pokemonDetail?.weight}</p>
      </div>
    </>
  );
};
