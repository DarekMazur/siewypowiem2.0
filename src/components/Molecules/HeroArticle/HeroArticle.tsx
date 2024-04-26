import ArticleDate from '@/components/Atoms/ArticleDate/ArticleDate';
import { Handwritting } from '@/components/Atoms/Handwritting/Handwritting.styles';
import HeroTitle from '@/components/Atoms/HeroTitle/HeroTitle';
import HeroCategories from '@/components/Atoms/HeroCategories/HeroCategories';
import { useGetLastArticleQuery } from '@/store';
import { dateFormat } from '@/utils/dateFormat';
import Link from 'next/link';
import { StyledHeroArticle } from './HeroArticle.styles';

const HeroArticle = () => {
  const { data: article } = useGetLastArticleQuery();

  return (
    <>
      {article ? (
        <StyledHeroArticle>
          <Link href='/'>
            <HeroTitle title={article.data[0].attributes.title} />
            <Handwritting>
              by {article.data[0].attributes.author.data.attributes.username}
            </Handwritting>
            {article.data[0].attributes.categories.length > 0 ? (
              <HeroCategories
                categories={article.data[0].attributes.categories}
              />
            ) : null}
            <ArticleDate
              date={dateFormat(article.data[0].attributes.publishedAt)}
            />
          </Link>
        </StyledHeroArticle>
      ) : (
        <p>Nothing to see...</p>
      )}
    </>
  );
};

export default HeroArticle;
