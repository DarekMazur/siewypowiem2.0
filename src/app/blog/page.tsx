'use client';

import Filter from '@/components/Molecules/Filter/Filter';
import Loader from '@/components/Molecules/Loader/Loader';
import ArticlesList from '@/components/Organism/ArticlesList/ArticlesList';
import {
  useGetArticlesQuery,
  useGetCategoriesQuery,
  useGetUsersQuery,
} from '@/store';

/*
! important features list:
TODO pinned articles on homepage
TODO hero section with dynamic content depend of path
TODO blog page filters
TODO blog page sorting
*/

export const Blog = () => {
  const {
    data: articles,
    isLoading,
    error,
  } = useGetArticlesQuery({ pageSize: 6, page: 1 });

  const { data: categories } = useGetCategoriesQuery({ pageSize: 25, page: 1 });

  const { data: users } = useGetUsersQuery({ pageSize: 25, page: 1 });

  return (
    <main
      style={{
        paddingBottom: '3rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Loader isLoading={isLoading} isError={!!error} isReady={!!articles} />
      {users && categories ? (
        <Filter users={users.data} categories={categories.data} />
      ) : (
        <Loader isLoading={false} isError isReady={false} />
      )}
      {articles ? (
        <ArticlesList articles={articles.data} meta={articles.meta} />
      ) : null}
    </main>
  );
};

export default Blog;
