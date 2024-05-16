/* eslint-disable react/no-danger */
import { getArchiveData } from '@/lib/archives';

const SingleArchive = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArchiveData(params.slug);

  return (
    <section>
      <h2>{articleData.title}</h2>
      <p>by Jillian</p>
      <div>
        <p>{articleData.date.toString()}</p>
      </div>
      <article dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
    </section>
  );
};

export default SingleArchive;
