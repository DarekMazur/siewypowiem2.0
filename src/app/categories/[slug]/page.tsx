import slugify from 'slugify';
import { server } from '@/mocks/server';
import { ICategoryType } from '@/mocks/types';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  server.listen();
}

const Category = async ({ params }: { params: { slug: string } }) => {
  async function getData() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/categories?populate=*`,
      {
        cache: 'no-store',
      },
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  }

  const cats = await getData();
  const currentCategory: Array<ICategoryType> = cats.data.filter(
    (category) =>
      slugify(category.attributes.title, { lower: true }) === params.slug,
  );

  return (
    <>
      <h2>{currentCategory[0].attributes.title}</h2>
      <p>{currentCategory[0].attributes.description}</p>
      {currentCategory[0].attributes.articles.data.map((article) =>
        article.attributes.isSticky ? (
          <h3 key={article.attributes.uuid}>{article.attributes.title}</h3>
        ) : (
          <p>NOT STICKY!!!</p>
        ),
      )}
    </>
  );
};

export default Category;

export async function generateStaticParams() {
  const categories: Array<ICategoryType> = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/categories?populate=*`,
  ).then((res) => res.json());

  return categories.data.map((category) => ({
    slug: slugify(category.attributes.title, { lower: true }),
  }));
}
