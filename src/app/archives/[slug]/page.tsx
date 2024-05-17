/* eslint-disable react/no-danger */
import ArchiveView from '@/components/Views/ArchiveView/ArchiveView';
import { getArchiveData } from '@/lib/archives';

const SingleArchive = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArchiveData(params.slug);

  return <ArchiveView archiveData={articleData} />;
};

export default SingleArchive;
