import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  border: 2px solid darkseagreen;
  border-radius: 10px;
  margin-bottom: 100px;
  padding: 10px;
  text-align: center;
`;

export const FormTitle = styled.h2``;

export const FormBtnSbmt = styled.button`
  border-radius: 9999px;
  border: 2px solid #24ef43;
  cursor: pointer;
  padding: 10px 30px;
  font-size: 1.2rem;

  &:disabled {
    background-color: rgba($color: #808080, $alpha: 0.3);
    border: 2px solid #ff0000;
  }
`;
