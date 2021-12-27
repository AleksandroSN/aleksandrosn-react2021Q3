import styled from "styled-components";

export const SearchBarForm = styled.form`
  display: flex;
  justify-content: center;
  width: 70%;

  @media screen and (max-width: 768px) {
    flex: 100%;
  }
`;

export const SearchBarLabel = styled.label`
  width: 100%;
`;

export const SearchBarInput = styled.input`
  margin-left: 10px;
  color: rgb(51, 51, 51);
  height: 34px;
  background-color: rgb(242, 242, 242);
  padding: 0px 50px 0px 12px;
  border-radius: 8px;
  border-style: none;
  transition: all 0.3s;
  outline: none;
  width: 100%;

  &:hover {
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.2) 0 4px 12px 0;
  }

  &:focus {
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.2) 0 4px 12px 0;
  }
`;

export const SearchBarBtnSbmt = styled.button`
  border-width: 0;
  cursor: pointer;
  height: 34px;
  background-color: hsl(0deg 0% 80%);
  border-radius: 8px;
  padding: 5px;
`;
