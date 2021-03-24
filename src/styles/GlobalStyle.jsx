import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {

  }

  body {
    width: 100vw;
    height: 100vh;
      /* background: linear-gradient(90deg, #9a2626, #460941); */
    overflow-X: hidden;
  }
`;