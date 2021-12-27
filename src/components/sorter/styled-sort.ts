import styled from "styled-components";

export const SortWrapper = styled.div`
  display: flex;
  position: relative;

  @media screen and (max-width: 768px) {
    flex: 100%;
    padding: 0 1rem 1rem;
    gap: 20px;
    align-items: flex-start;
  }
`;

export const SortShowButton = styled.button`
  background-color: transparent;
  border-width: 0;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }

  & img {
    height: 20px;
    width: 20px;
    filter: drop-shadow(0px 5px 3px rgba(0, 0, 0, 0.7));
  }
`;

export const SortListOptions = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: calc(160px / 4);
  width: 160px;

  &.hide {
    display: none;
  }

  @media screen and (max-width: 768px) {
    position: static;
  }
`;
