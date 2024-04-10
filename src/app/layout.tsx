'use client';

import GlobalStyle from '@/styles/GlobalStyle';
import { useState } from 'react';
import StyledComponentsRegistry from '../../lib/registry';
import theme from '../utils/theme';
import Intro from '../components/Intro/Intro';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [runIntro, setRunIntro] = useState(true);

  const intro = () => setTimeout(() => setRunIntro(false), 3000);

  intro();

  return (
    <html lang='en'>
      <body>
        <GlobalStyle theme={theme} />
        <StyledComponentsRegistry>
          {runIntro ? <Intro /> : children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
