import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: ${({ theme }) => theme.fonts.main};
    background-color: ${({ theme }) => theme.colors.white};
  }
    
  body {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 2rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.headers};
    margin: 0;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    line-height: calc(${({ theme }) => theme.fontSize.xxl} * 1.5);
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    line-height: calc(${({ theme }) => theme.fontSize.xl} * 1.5)
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.l};
    line-height: calc(${({ theme }) => theme.fontSize.l} * 1.5)
  }

  h4, h5, h6 {
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: calc(${({ theme }) => theme.fontSize.m} * 1.5)
  }
`;

export default GlobalStyle;
