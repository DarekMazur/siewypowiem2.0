'use client';

import { ReactNode, useEffect, useState } from 'react';
import GlobalStyle from '@/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { store } from '@/store';
import { Provider } from 'react-redux';
import dynamic from 'next/dynamic';
import StyledComponentsRegistry from '../../../lib/registry';
import theme from '../styles/theme';
import Intro from '../../components/Molecules/Intro/Intro';
import MSWConfig from '../../app/MSWConfig';

const AppProviders = ({ children }: { children: ReactNode }) => {
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
    <MSWConfig>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AnimatedCursor
            color='252,252,255'
            innerSize={0}
            outerSize={30}
            innerScale={1}
            outerScale={2}
            outerAlpha={0.8}
            showSystemCursor
            outerStyle={{
              mixBlendMode: 'difference',
            }}
          />
          <GlobalStyle />
          <StyledComponentsRegistry>
            {!runIntro ? <Intro /> : null}
            {children}
          </StyledComponentsRegistry>
        </ThemeProvider>
      </Provider>
    </MSWConfig>
  );
};

export default AppProviders;
