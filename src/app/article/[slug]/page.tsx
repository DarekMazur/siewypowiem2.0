import ArticleView from '@/components/Views/ArticleView/ArticleView';
import { IArticleTypes } from '@/utils/types';
import slugify from 'slugify';

const Article = async ({ params }: { params: { slug: string } }) => {
  async function getData() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=*pagination[pageSize]=9999`,
      {
        cache: 'no-store',
      },
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  }

  const allArticles: { data: Array<IArticleTypes> } = await getData();
  const currentArticle = allArticles.data.filter(
    (article) =>
      slugify(article.attributes.title, { lower: true }) === params.slug,
  );

  return <ArticleView article={currentArticle[0]} />;
};

export default Article;
