import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  html,
  body,
  #root {
    min-height: 100vh;
  }

  body {
    background: ${({ theme }) => theme.background};
    -webkit-font-smoothing: antialiased !important;
    transition: background 0.3s;
  }

  body,
  button,
  input,
  textarea,
  select {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500,
  }

  button {
    cursor: pointer;
  }
`;
