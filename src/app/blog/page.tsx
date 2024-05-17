import PageView from '@/components/Views/PageView/PageView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
};

const Page = () => {
  return <PageView />;
};

export default Page;
