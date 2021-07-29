import { CardData } from "../../api/interfaces";

export const CardsMarkup = ({ word, translation }: CardData) => {
  return (
    <div className="App-main__container-card">
      <p>{word}</p>
      <p>{translation}</p>
    </div>
  );
};
