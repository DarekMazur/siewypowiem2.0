import ArticleDate from '@/components/Atoms/ArticleDate/ArticleDate';
import { Handwritting } from '@/components/Atoms/Handwritting/Handwritting.styles';
import HeroTitle from '@/components/Atoms/HeroTitle/HeroTitle';
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
            <HeroTitle title={article[0].attributes.title} />
            <Handwritting>
              by {article[0].attributes.author.username}
            </Handwritting>
            <ArticleDate date={dateFormat(article[0].attributes.publishedAt)} />
          </Link>
        </StyledHeroArticle>
      ) : (
        <p>Nothing to see...</p>
      )}
    </>
  );
};

export default HeroArticle;
