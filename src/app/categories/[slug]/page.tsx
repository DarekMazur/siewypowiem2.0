import slugify from 'slugify';
import { server } from '@/mocks/server';
import { ICategoryTypes } from '@/utils/data/types';
import PageView from '@/components/Views/PageView/PageView';

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

  const allCategories: { data: Array<ICategoryTypes> } = await getData();
  const currentCategory = allCategories.data.filter(
    (category) =>
      slugify(category.attributes.title, { lower: true }) === params.slug,
  );

  return <PageView categoryUuid={currentCategory[0].attributes.uuid} />;
};

export default Category;

export async function generateStaticParams() {
  const categories: { data: Array<ICategoryTypes> } = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/categories?populate=*`,
  ).then((res) => res.json());

  return categories.data.map((category) => ({
    slug: slugify(category.attributes.title, { lower: true }),
  }));
}
