import { createGlobalStyle } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far);

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: ${({ theme }) => theme.fonts.main};
    scroll-behavior: smooth;
  }
  
  body {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 2;
    background-color: ${({ theme }) => theme.colors.white};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.headers};
    margin: 0;
    line-height: 1.5;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  h4, h5, h6 {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export default GlobalStyle;
