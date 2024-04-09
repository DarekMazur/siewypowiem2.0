import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
      font-size: 62.5%;
      font-family: ${({ theme }) => theme.fonts.main};
      background-color: ${({ theme }) => theme.colors.white};
    }
    
  body {
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 2rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.headers};
  }
`;

export default GlobalStyle;
