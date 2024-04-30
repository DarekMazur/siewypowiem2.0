import { usePathname } from 'next/navigation';
import Link from 'next/link';
import slugify from 'slugify';
import ArticleDate from '@/components/Atoms/ArticleDate/ArticleDate';
import { Handwritting } from '@/components/Atoms/Handwritting/Handwritting.styles';
import HeroTitle from '@/components/Atoms/HeroTitle/HeroTitle';
import HeroCategories from '@/components/Atoms/HeroCategories/HeroCategories';
import { useGetArticlesQuery, useGetLastArticleQuery } from '@/store';
import { dateFormat } from '@/utils/dateFormat';
import { StyledLink } from '@/components/Atoms/Link/Link.styles';
import { StyledHeroArticle } from './HeroArticle.styles';

const HeroArticleContent = ({ uuid }: { uuid?: string }) => {
  const { data: article } = useGetLastArticleQuery();
  const { data: singleArticle } = useGetArticlesQuery({ uuid });
  return (
    <>
      {article ? (
        <>
          <HeroTitle
            title={
              singleArticle?.data.length === 1
                ? singleArticle?.data[0].attributes.title
                : article.data[0].attributes.title
            }
          />
          <Handwritting>
            by{' '}
            <StyledLink
              href={`/authors/${singleArticle?.data.length === 1 ? slugify(singleArticle?.data[0].attributes.author.data.attributes.username, { lower: true }) : slugify(article.data[0].attributes.author.data.attributes.username, { lower: true })}`}
              target='_blank'
              rel='noreferer'
              style={{ padding: 0 }}
            >
              {singleArticle?.data.length === 1
                ? singleArticle?.data[0].attributes.author.data.attributes
                    .username
                : article.data[0].attributes.author.data.attributes.username}
            </StyledLink>
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
        </>
      ) : (
        <p>Nothing to see...</p>
      )}
    </>
  );
};

const HeroArticle = ({ uuid }: { uuid?: string }) => {
  const pathname = usePathname();
  const { data: article } = useGetLastArticleQuery();

  return (
    <>
      {article ? (
        <StyledHeroArticle>
          {pathname === '/' ? (
            <Link
              href={`/article/${slugify(article.data[0].attributes.title, { lower: true })}`}
            >
              <HeroArticleContent />
            </Link>
          ) : (
            <HeroArticleContent uuid={uuid} />
          )}
        </StyledHeroArticle>
      ) : null}
    </>
  );
};

export default HeroArticle;
