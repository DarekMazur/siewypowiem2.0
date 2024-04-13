'use client';

import GlobalStyle from '@/styles/GlobalStyle';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '@/components/Organism/Header/Header';
import StyledComponentsRegistry from '../../lib/registry';
import theme from '../utils/theme';
import Intro from '../components/Molecules/Intro/Intro';
import { MockProvider } from './mockProvider';

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
        <MockProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <StyledComponentsRegistry>
              {!runIntro ? <Intro /> : null}
              <Header />
              {children}
            </StyledComponentsRegistry>
          </ThemeProvider>
        </MockProvider>
      </body>
    </html>
  );
};

export default RootLayout;
