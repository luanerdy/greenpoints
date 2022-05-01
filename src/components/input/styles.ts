import styled from "styled-components";

export const Styleinput = styled.input`
  font-family: "Manrope", sans-serif;
  background-color: #ffffff;

  border: solid 1px #e0e0e0;
  padding: 5px;

  width: 328px;
  height: 40px;

  &::placeholder {
    color: var(--placeholder);
  }
`;
