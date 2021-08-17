import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailData } from "../../api/api";
import { PokemonAllData } from "../../api/interfaces";
import { CardsMarkup } from "../../components/cards/cards-markup";
import "./detail-page.scss";

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
      <div className="App-main__detail-page">
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
          <p className="App-main__detail-page__text">
            heigth: {pokemonDetail?.height}
          </p>
          <p className="App-main__detail-page__text">
            weigth: {pokemonDetail?.weight}
          </p>
        </div>
      </div>
    </>
  );
};
