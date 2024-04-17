'use client';

import Loader from '@/components/Molecules/Loader/Loader';
import ArticlesList from '@/components/Organism/ArticlesList/ArticlesList';
import { useGetArticlesQuery } from '@/store';

export const Blog = () => {
  const { data: articles, isLoading, error } = useGetArticlesQuery();
  return (
    <main
      style={{
        paddingBottom: '3rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Loader isLoading={isLoading} isError={!!error} isReady={!!articles} />
      {articles ? <ArticlesList articles={articles.data} /> : null}
    </main>
  );
};

export default Blog;
