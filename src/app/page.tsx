'use client';

import HomeAbout from '@/components/Molecules/HomeAbout/HomeAbout';
import Loader from '@/components/Molecules/Loader/Loader';
import ArticlesList from '@/components/Organism/ArticlesList/ArticlesList';
import { BlogWrapper } from '@/components/Organism/BlogWrapper/BlogWrapper.styles';
import { HomeBlogInnerWrapper } from '@/components/Organism/HomeBlogInnerWrapper/HomeBlogInnerWrapper';
import { useGetArticlesQuery } from '@/store';

const Home = () => {
  const { data: articles, isLoading, error } = useGetArticlesQuery();

  return (
    <>
      <BlogWrapper>
        <section>
          <h2>Latest on blog</h2>
          <Loader
            isLoading={isLoading}
            isError={!!error}
            isReady={!!articles}
          />
          <HomeBlogInnerWrapper>
            {articles ? <ArticlesList articles={articles.data} /> : null}
            <HomeAbout />
          </HomeBlogInnerWrapper>
        </section>
      </BlogWrapper>
      <section>Lorem insta dolor</section>
    </>
  );
};

export default Home;
