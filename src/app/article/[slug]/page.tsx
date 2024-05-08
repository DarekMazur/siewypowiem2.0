import ArticleView from '@/components/Views/ArticleView/ArticleView';
import { IArticleTypes } from '@/utils/data/types';
import slugify from 'slugify';

const Article = async ({ params }: { params: { slug: string } }) => {
  async function getData() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=*&sort=publishedAt:desc&pagination[pageSize]=9999`,
      {
        cache: 'no-store',
      },
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  }

  let currentIndex: number = -1;

  const allArticles: { data: Array<IArticleTypes> } = await getData();
  const currentArticle = allArticles.data.filter(
    (article) =>
      slugify(article.attributes.title, { lower: true }) === params.slug,
  );

  allArticles.data.forEach((article, index) => {
    if (slugify(article.attributes.title, { lower: true }) === params.slug) {
      currentIndex = index;
    }
  });

  const articleTags = currentArticle[0].attributes.tags.split(', ');

  const similarTags = allArticles.data.filter(
    (article) =>
      article.id !== currentArticle[0].id &&
      articleTags.some((tag) =>
        article.attributes.tags.split(', ').includes(tag),
      ),
  );

  const similarArticles = [...similarTags];

  const nextArticle =
    currentIndex !== 0 ? allArticles.data[currentIndex - 1] : null;

  const previousArticle =
    currentIndex !== allArticles.data.length - 1
      ? allArticles.data[currentIndex + 1]
      : null;

  return (
    <ArticleView
      similar={similarArticles}
      article={currentArticle[0]}
      next={nextArticle?.attributes.title}
      previous={previousArticle?.attributes.title}
    />
  );
};

export default Article;
