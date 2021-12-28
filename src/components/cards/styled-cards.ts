import styled from "styled-components";
import { generateGrad } from "../../utils/colorGenerator";
import { StyledCardImgProps } from "./types";

export const CardWrapper = styled.div`
  position: relative;
  margin-bottom: 7rem;
`;

// TO-DO : every 3rd container have self color
export const CardContainer = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;
  max-width: 450px;
  margin: 0 auto;
  background: ${generateGrad()};
`;

export const CardContainerPreview = styled(CardContainer)`
  border-radius: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
`;

export const CardBody = styled.div`
  padding: 140px 10px 12px 10px;
  position: relative;
`;

export const CardBodyPreview = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const CardImgBoxPreview = styled.div`
  background-color: #fff;
  border-radius: 200px;
  display: flex;
`;

export const CardImgBox = styled(CardImgBoxPreview)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CardImg = styled.img<StyledCardImgProps>`
  ${(props) => (props.prewiew ? `max-width: 300px` : `max-width: 200px;`)};
  filter: drop-shadow(4px 8px 3px rgba(0, 0, 0, 0.7));
`;

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  color: #fff;
`;

export const CardId = styled.p`
  color: #000;
  border-radius: 100px;
  border: 2px solid #fff;
  padding: 3px 15px;
  font-size: 1.2rem;
  background-color: #fff;
`;

export const CardName = styled.p`
  text-transform: capitalize;
  font-size: 2rem;
`;

export const CardType = styled.p`
  span {
    color: #000;
    border-radius: 100px;
    border: 2px solid #fff;
    padding: 3px 15px;
    font-size: 1.2rem;
    &:last-child {
      margin-left: 10px;
    }
  }
`;

export const CardStats = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #fff;
  color: #000;
  gap: 10px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  padding: 20px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  width: 100%;

  & div {
    text-transform: uppercase;
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
  }
`;
