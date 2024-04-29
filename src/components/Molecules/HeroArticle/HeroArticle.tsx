import ArticleDate from '@/components/Atoms/ArticleDate/ArticleDate';
import { Handwritting } from '@/components/Atoms/Handwritting/Handwritting.styles';
import HeroTitle from '@/components/Atoms/HeroTitle/HeroTitle';
import HeroCategories from '@/components/Atoms/HeroCategories/HeroCategories';
import { useGetArticlesQuery, useGetLastArticleQuery } from '@/store';
import { dateFormat } from '@/utils/dateFormat';
import Link from 'next/link';
import { StyledHeroArticle } from './HeroArticle.styles';

const HeroArticle = ({ uuid }: { uuid?: string }) => {
  const { data: article } = useGetLastArticleQuery();
  const { data: singleArticle } = useGetArticlesQuery({ uuid });

  return (
    <>
      {article ? (
        <StyledHeroArticle>
          <Link href='/'>
            <HeroTitle
              title={
                singleArticle?.data.length === 1
                  ? singleArticle?.data[0].attributes.title
                  : article.data[0].attributes.title
              }
            />
            <Handwritting>
              by{' '}
              {singleArticle?.data.length === 1
                ? singleArticle?.data[0].attributes.author.data.attributes
                    .username
                : article.data[0].attributes.author.data.attributes.username}
            </Handwritting>
            {article.data[0].attributes.categories.data.length > 0 ||
            (singleArticle &&
              singleArticle.data[0].attributes.categories.data.length > 0) ? (
              <HeroCategories
                categories={
                  singleArticle?.data.length === 1 &&
                  singleArticle.data[0].attributes.categories.data.length > 0
                    ? singleArticle.data[0].attributes.categories.data
                    : article.data[0].attributes.categories.data
                }
              />
            ) : null}
            <ArticleDate
              date={dateFormat(
                singleArticle?.data.length === 1
                  ? singleArticle?.data[0].attributes.publishedAt
                  : article.data[0].attributes.publishedAt,
              )}
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
