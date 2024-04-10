'use client';

import GlobalStyle from '@/styles/GlobalStyle';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '../../lib/registry';
import theme from '../utils/theme';
import Intro from '../components/Intro/Intro';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [runIntro, setRunIntro] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (
        !(
          sessionStorage.getItem('isIntroShown') &&
          JSON.parse(sessionStorage.getItem('isIntroShown') as string).value
        )
      ) {
        const intro = () => setRunIntro(false);
        setTimeout(() => {
          sessionStorage.isIntroShown = JSON.stringify({ value: true });
          setRunIntro(true);
        }, 3000);

        intro();
      } else {
        setRunIntro(true);
      }
    }
  }, []);

  return (
    <html lang='en'>
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <StyledComponentsRegistry>
            {!runIntro ? <Intro /> : null}
            {children}
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
