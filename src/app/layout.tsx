'use client';

import StyledComponentsRegistry from '../../lib/registry';
import GlobalStyle from '@/styles/GlobalStyle';
import { theme } from './utils/theme';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en'>
      <body>
        <GlobalStyle theme={theme} />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
