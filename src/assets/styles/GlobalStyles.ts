import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    --color-Dark-Button: #025940;
    --color-Light-Button: #03A64A;
  }
  
  * {
  padding: 0;
  margin: 0;
  
  box-sizing: border-box
  }

  html {
    font-size: 62.5%
    }
    
`
