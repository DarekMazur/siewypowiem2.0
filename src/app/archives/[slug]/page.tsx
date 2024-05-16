/* eslint-disable react/no-danger */
import { getArchiveData } from '@/lib/archives';
import { dateFormat } from '@/utils/methods/dateFormat';

const SingleArchive = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArchiveData(params.slug);

  return (
    <section>
      <h2>{articleData.title}</h2>
      <p>by Jillian</p>
      <div>
        <p>{dateFormat(articleData.date.toString())}</p>
      </div>
      <article dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
    </section>
  );
};

export default SingleArchive;
