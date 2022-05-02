import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    --color-Dark-Button: #025940;
    --color-Light-Button: #03A64A;
    --placeholder : #BDBDBD;
    --primary-variation:#67B187;
    --primary:#017D37;
  }
  html {
    font-size: 62.5%
    }
`;
