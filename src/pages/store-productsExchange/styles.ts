import styled from "styled-components";

const BoxField = styled.ul`
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 10px;
  grid-row-gap: 5px;
  grid-column-gap: 5px;
  width: 100%;
`;

const StyleStore = styled.div`
  font-family: "Manrope";
  height: 100vh;
  margin: 25px auto;
  padding: 0.5rem;

  max-width: 600px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h4 {
    font-weight: 700;
    font-size: 18px;
  }
`;

export { StyleStore, BoxField };
