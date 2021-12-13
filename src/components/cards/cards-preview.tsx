import React from "react";
import "./cards.scss";
import "./cards-preview.scss";

interface CardsPreviewProps {
  name: string;
  url: string;
}

export const CardsPreview: React.FC<CardsPreviewProps> = ({
  name,
  url,
}: CardsPreviewProps) => {
  const regEx = /(\d+)(?!.*\d)/g;
  const imgIdx = url.substring(url.search(regEx)).slice(0, -1);

  return (
    <div className="App-main__container-card--wrapper">
      <div className="App-main__container-card App-main__container-card--preview">
        <div className="App-main__container-card-body App-main__container-card-body--preview">
          <div className="App-main__container-card-imgbox App-main__container-card-imgbox--preview">
            <img
              src={`https://cdn.traction.one/pokedex/pokemon/${imgIdx}.png`}
              alt={`pokemon ${imgIdx}`}
              className="App-main__container-card-img App-main__container-card-img--preview"
            />
          </div>
          <div className="App-main__container-card-text">
            <p className="App-main__container-card-name">{name}</p>
            <p className="App-main__container-card-id">#{imgIdx}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
