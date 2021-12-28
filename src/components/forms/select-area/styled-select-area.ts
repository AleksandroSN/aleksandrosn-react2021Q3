import styled from "styled-components";

export const FormSelectArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 10px;
  justify-items: center;
`;

export const FormSelectAreaInvalid = styled.p`
  grid-column: 1/4;
  color: #ff0000;
`;
