import styled from "styled-components";

export const FilterWrapper = styled.section`
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 3rem 0;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    padding: 2rem 0.5rem 0 0;
  }
`;
