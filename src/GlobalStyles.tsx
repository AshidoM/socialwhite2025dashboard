// src/GlobalStyles.tsx

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Futursita';
    src: url('/assets/fonts/Futursita-Regular.woff2') format('woff2'),
         url('/assets/fonts/Futursita-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Futursita';
    src: url('/assets/fonts/Futursita-Bold.woff2') format('woff2'),
         url('/assets/fonts/Futursita-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Futursita', sans-serif;
    background-color: #ffffff; /* Fondo blanco */
    color: #000000; /* Texto negro */
  }

  a {
    text-decoration: none;
    color: inherit; /* Hereda el color del padre (negro) */
  }
`;

export default GlobalStyle;
