import styled from "styled-components";

export const PaginationWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    gap: 5px;
  }
`;

export const PaginationFieldSize = styled.div``;
export const PaginationFieldSizeSelect = styled.select`
  margin-left: 1rem;
  border-radius: 15px;
  padding: 0px 12px;
  height: 32px;
  color: rgba(0, 0, 0, 0.87);
  background-color: rgba(0, 0, 0, 0.08);
  border-width: 0;
  outline: none;
  cursor: pointer;
`;

export const PaginationContainer = styled.div``;

export const PaginationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 768px) {
    gap: 5px;
  }
`;

export const PaginationItemWrapper = styled.li`
  color: rgba(0, 0, 0, 0.87);
`;

export const PaginationItemWrapperButton = styled.button`
  border-width: 0;
  background-color: transparent;
  padding: 0 12px;
  height: 32px;
  margin: auto 4px;
  border-radius: 50%;
  cursor: pointer;

  &:disabled {
    pointer-events: none;

    &:hover {
      background-color: transparent;
      cursor: default;
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  &.selected {
    background-color: rgba(0, 0, 0, 0.08);
  }

  &.dots:hover {
    background-color: transparent;
    cursor: default;
  }

  &.arrow {
    font-size: 0;

    &:disabled {
      &::before {
        border-right: 0.12rem solid rgba(0, 0, 0, 0.5);
        border-top: 0.12rem solid rgba(0, 0, 0, 0.5);
      }
    }

    &::before {
      position: relative;
      content: "";
      display: inline-block;
      width: 0.4rem;
      height: 0.4rem;
      border-right: 0.12rem solid rgba(0, 0, 0, 0.87);
      border-top: 0.12rem solid rgba(0, 0, 0, 0.87);
    }

    &.left {
      transform: rotate(-135deg) translateY(-1px);
    }

    &.right {
      transform: rotate(45deg) translateY(-1px);
    }
  }
`;
