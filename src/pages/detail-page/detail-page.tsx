import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PokemonAllData } from "../../api/interfaces";
import { CardsMarkup, Loader } from "../../components";
import { detailReq, loadStatus, useAppSelector } from "../../store/store";
import { getDetailData } from "../../store/api/apiAsyncThunk";
import "./detail-page.scss";

interface ParamsDetailPage {
  name: string;
}

export const DetailPage: FunctionComponent = (): JSX.Element => {
  const [pokemonDetail, setPokemonDetail] = useState<PokemonAllData | null>(
    null
  );
  const detailRequest = useAppSelector(detailReq);
  const isLoading = useAppSelector(loadStatus);
  const reduxDispatch = useDispatch();
  const { name } = useParams<ParamsDetailPage>();

  useEffect(() => {
    reduxDispatch(getDetailData(name));
  }, [reduxDispatch, name]);

  useEffect(() => {
    if ((detailRequest as PokemonAllData).id) {
      setPokemonDetail(detailRequest as PokemonAllData);
    }
  }, [detailRequest]);

  return (
    <>
      <div className="App-main__detail-page">
        {isLoading ? (
          <Loader />
        ) : (
          pokemonDetail !== null && (
            <CardsMarkup
              key={pokemonDetail.name}
              pokemonName={pokemonDetail.name as string}
              pokemonNumber={pokemonDetail.id}
              pokemonType={pokemonDetail.types}
              pokemonImg={pokemonDetail.id}
              pokemonStats={pokemonDetail.stats}
            />
          )
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
