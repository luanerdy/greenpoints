import styled from "styled-components";

const SignUpField = styled.form`
  font-family: "Monrope", sans-serif;
  /* height: 100vh; */
  display: grid;
  padding: 0.5em;
  grid-template-rows: 5% 80% 10%;

  h1 {
    font-size: 24px;
  }

  #row {
    margin-bottom: 50px;
  }
`;

const MainContent = styled.div`
  margin: 15px auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Field = styled.div`
  margin: 25px auto;

  h2 {
    margin: 10px 0;
  }
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;

  h2 {
    margin-left: 15px;
    font-size: 12px;
  }

  input {
    width: 24px;
    height: 24px;
  }
`;

const Hr = styled.hr`
  background-color: #e0e0e0;
  height: 7px;
  width: 90%;
  padding: 5px;
  display: flex;
  border: none;
  border-radius: 15px;

  &::before {
    content: "";
    width: 90%;
    background-color: var(--primary-variation);
    height: auto;
    border-radius: 15px;
  }
`;

export { SignUpField, Header, Hr, Field, MainContent, Checkbox };
