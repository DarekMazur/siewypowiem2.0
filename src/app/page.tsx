'use client';

import HomeAbout from '@/components/Molecules/HomeAbout/HomeAbout';
import Loader from '@/components/Molecules/Loader/Loader';
import ArticlesList from '@/components/Organism/ArticlesList/ArticlesList';
import { HomeWrapper } from '@/components/Organism/HomeWrapper/HomeWrapper.styles';
import { HomeBlogInnerWrapper } from '@/components/Organism/HomeBlogInnerWrapper/HomeBlogInnerWrapper';
import { useGetArticlesQuery, useGetInstaQuery } from '@/store';
import InstaWrapper from '@/components/Organism/InstaWrapper/InstaWrapper';

const Home = () => {
  const { data: articles, isLoading, error } = useGetArticlesQuery();
  const {
    data: instagram,
    isLoading: isInstaLoading,
    error: instaError,
  } = useGetInstaQuery();

  return (
    <HomeWrapper>
      <section>
        <h2>Latest on blog</h2>
        <Loader isLoading={isLoading} isError={!!error} isReady={!!articles} />
        <HomeBlogInnerWrapper>
          {articles ? <ArticlesList articles={articles.data} /> : null}
          <HomeAbout />
        </HomeBlogInnerWrapper>
      </section>
      <Loader
        isLoading={isInstaLoading}
        isError={!!instaError}
        isReady={!!instagram}
      />
      {instagram && instagram.data.length > 0 ? (
        <InstaWrapper instagram={instagram.data} />
      ) : null}
    </HomeWrapper>
  );
};

export default Home;
