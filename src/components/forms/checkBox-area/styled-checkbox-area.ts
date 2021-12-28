import styled from "styled-components";

export const FromCheckBoxArea = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #24ef43;

  & label {
    display: block;
    padding: 6px 8px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    transition: all 0.4s 0s ease;
  }

  & input[type="radio"] {
    display: none;
  }

  & input[type="radio"]:checked + label {
    background-color: gold;
  }
`;
