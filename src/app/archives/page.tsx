import { getSortedArchives } from '@/lib/archives';
import ArchiveListView from '@/components/Views/ArchiveListView/ArchiveListView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Archiwum',
};

const HomePage = () => {
  const articles = getSortedArchives();

  return <ArchiveListView articles={articles} />;
};

export default HomePage;
