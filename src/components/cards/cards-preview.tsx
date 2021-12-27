import { FunctionComponent } from "react";
import {
  CardBodyPreview,
  CardContainerPreview,
  CardId,
  CardImgBoxPreview,
  CardImgPreview,
  CardName,
  CardTextContainer,
  CardWrapper,
} from "./styled-cards";
import { CardsPreviewProps } from "./types";

export const CardsPreview: FunctionComponent<CardsPreviewProps> = ({
  name,
  url,
}: CardsPreviewProps) => {
  const regEx = /(\d+)(?!.*\d)/g;
  const imgIdx = url.substring(url.search(regEx)).slice(0, -1);

  return (
    <CardWrapper>
      <CardContainerPreview>
        <CardBodyPreview>
          <CardImgBoxPreview>
            <CardImgPreview
              src={`https://cdn.traction.one/pokedex/pokemon/${imgIdx}.png`}
              alt={`pokemon ${imgIdx}`}
            />
          </CardImgBoxPreview>
          <CardTextContainer>
            <CardName>{name}</CardName>
            <CardId>#{imgIdx}</CardId>
          </CardTextContainer>
        </CardBodyPreview>
      </CardContainerPreview>
    </CardWrapper>
  );
};
