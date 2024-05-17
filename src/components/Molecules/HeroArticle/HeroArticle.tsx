import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import slugify from 'slugify';
import ArticleDate from '@/components/Atoms/ArticleDate/ArticleDate';
import { Handwritting } from '@/components/Atoms/Handwritting/Handwritting.styles';
import HeroTitle from '@/components/Atoms/HeroTitle/HeroTitle';
import HeroCategories from '@/components/Atoms/HeroCategories/HeroCategories';
import { dateFormat } from '@/utils/methods/dateFormat';
import {
  RootState,
  useGetArticlesQuery,
  useGetLastArticleQuery,
} from '@/store';
import { StyledLink } from '@/components/Atoms/Link/Link.styles';
import { StyledHeroArticle } from './HeroArticle.styles';

const HeroArticleContent = ({ uuid }: { uuid?: string }) => {
  const { data: article } = useGetLastArticleQuery();
  const { data: singleArticle } = useGetArticlesQuery({ uuid });
  const pathname = usePathname();
  const archiveHero = useSelector((state: RootState) => state.archiveHero);

  return (
    <>
      {article ? (
        <>
          <HeroTitle
            title={
              pathname.includes('/archives/') && archiveHero.title
                ? archiveHero.title
                : singleArticle?.data.length === 1
                  ? singleArticle?.data[0].attributes.title
                  : article.data[0].attributes.title
            }
          />
          <Handwritting>
            by{' '}
            {pathname.includes('/archives/') && archiveHero.author ? (
              archiveHero.author
            ) : (
              <StyledLink
                href={`/authors/${singleArticle?.data.length === 1 ? slugify(singleArticle?.data[0].attributes.author.data.attributes.username, { lower: true }) : slugify(article.data[0].attributes.author.data.attributes.username, { lower: true })}`}
                target='_blank'
                rel='noreferer'
                style={{ padding: 0 }}
              >
                {singleArticle?.data.length === 1
                  ? singleArticle?.data[0].attributes.author.data.attributes
                      .username
                  : article &&
                    article.data[0].attributes.author.data.attributes.username}
              </StyledLink>
            )}
          </Handwritting>
          {article.data[0].attributes.categories.data.length > 0 ||
          (singleArticle &&
            singleArticle.data[0].attributes.categories.data.length > 0) ? (
            <HeroCategories
              categories={
                pathname.includes('/archives/') && archiveHero.category
                  ? archiveHero.category
                  : singleArticle?.data.length === 1 &&
                      singleArticle.data[0].attributes.categories.data.length >
                        0
                    ? singleArticle.data[0].attributes.categories.data
                    : article.data[0].attributes.categories.data
              }
            />
          ) : null}
          <ArticleDate
            date={
              (pathname.includes('/archives/') && archiveHero.date) ||
              dateFormat(
                singleArticle?.data.length === 1
                  ? singleArticle?.data[0].attributes.publishedAt
                  : article.data[0].attributes.publishedAt,
              )
            }
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
          ) : pathname === '/archives' ? (
            <HeroArticleContent />
          ) : (
            <HeroArticleContent uuid={uuid} />
          )}
        </StyledHeroArticle>
      ) : null}
    </>
  );
};

export default HeroArticle;
