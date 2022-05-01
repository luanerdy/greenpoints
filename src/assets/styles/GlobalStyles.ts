import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    --color-Dark-Button: #025940;
    --color-Light-Button: #03A64A;
  }

  * {
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100vh;
    max-width: 600px;
    margin: 0 auto;

    padding: 20px 20px 0;

    box-shadow: 0 0 15px rgba(0, 0, 0, .3)
  }

  body * {
    max-width: 600px;
  }
`;