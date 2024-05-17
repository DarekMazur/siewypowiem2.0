import Header from '@/components/Organism/Header/Header';
import Footer from '@/components/Organism/Footer/Footer';
import { Metadata } from 'next';
import AppProviders from '@/utils/providers/AppProviders';

export const metadata: Metadata = {
  title: {
    template: '%s | SięWypowiem',
    default: 'SięWypowiem',
  },
  description: '',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en'>
      <body>
        <AppProviders>
          <Header />
          {children}
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
};

export default RootLayout;
