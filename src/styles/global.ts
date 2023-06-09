import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme['base-background']};
  }

  body, input, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    line-height: 1.625rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`
