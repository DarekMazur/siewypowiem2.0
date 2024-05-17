import { getSortedArchives } from '@/lib/archives';
import ArchiveListView from '@/components/Views/ArchiveListView/ArchiveListView';

const HomePage = () => {
  const articles = getSortedArchives();

  return <ArchiveListView articles={articles} />;
};

export default HomePage;
