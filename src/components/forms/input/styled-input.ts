import styled from "styled-components";

export const StyledInput = styled.input`
  margin-left: 15px;
  color: #333;
  height: 34px;
  width: 90%;
  background-color: #f2f2f2;
  padding: 0 50px 0 12px;
  border-radius: 8px;
  border-style: none;
  outline: none;

  &.invalid {
    border: 2px solid red;
  }
`;

export const InputWrapper = styled.div``;

export const InputName = styled.p`
  margin-bottom: 10px;
`;

export const InputSpan = styled.span`
  color: #ff0000;
`;
