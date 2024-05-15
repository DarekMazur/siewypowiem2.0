import PageView from '@/components/Views/PageView/PageView';
import { server } from '@/mocks/server';
import { IUserTypes } from '@/utils/data/types';
import slugify from 'slugify';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  server.listen();
}

const Author = async ({ params }: { params: { slug: string } }) => {
  async function getData() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
        cache: 'no-store',
      },
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  }

  const allAuthors: Array<IUserTypes> = await getData();
  const currentAuthor = allAuthors.filter(
    (author) => slugify(author.username, { lower: true }) === params.slug,
  );

  return <PageView authorUuid={currentAuthor[0].uuid} />;
};

export default Author;
