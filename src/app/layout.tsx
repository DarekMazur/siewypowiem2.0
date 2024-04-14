'use client';

import GlobalStyle from '@/styles/GlobalStyle';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '@/components/Organism/Header/Header';
import { store } from '@/store';
import { Provider } from 'react-redux';
import dynamic from 'next/dynamic';
import StyledComponentsRegistry from '../../lib/registry';
import theme from '../utils/theme';
import Intro from '../components/Molecules/Intro/Intro';
import MSWConfig from './MSWConfig';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [runIntro, setRunIntro] = useState(false);

  const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false,
  });

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
        <MSWConfig>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <AnimatedCursor
                color='37,54,61'
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={1.6}
                outerAlpha={0.9}
              />
              <GlobalStyle />
              <StyledComponentsRegistry>
                {!runIntro ? <Intro /> : null}
                <Header />
                {children}
              </StyledComponentsRegistry>
            </ThemeProvider>
          </Provider>
        </MSWConfig>
      </body>
    </html>
  );
};

export default RootLayout;
