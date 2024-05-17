import PrivacyView from '@/components/Views/PrivacyView/PrivacyView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Polityka prywatności',
};

const Privacy = () => {
  return <PrivacyView />;
};

export default Privacy;
