'use client';

import {
  useGetArticlesQuery,
  useGetCategoriesQuery,
  useGetUsersQuery,
} from '@/store';
import Filter from '../Molecules/Filter/Filter';
import ArticlesList from '../Organism/ArticlesList/ArticlesList';
import Loader from '../Molecules/Loader/Loader';

const CategoryView = ({ categoryUuid }: { categoryUuid: string }) => {
  const { data: categories } = useGetCategoriesQuery({ pageSize: 25, page: 1 });
  const { data: users } = useGetUsersQuery({ pageSize: 25, page: 1 });
  const {
    data: articles,
    isLoading,
    error,
  } = useGetArticlesQuery({
    pageSize: 6,
    page: 1,
    categoryUuid,
  });

  return (
    <main
      style={{
        paddingBottom: '3rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '1rem 2rem',
      }}
    >
      <Loader isLoading={isLoading} isError={!!error} isReady={!!articles} />
      {users && categories ? (
        <Filter users={users.data} categories={categories.data} />
      ) : (
        <Loader isLoading={false} isError isReady={false} />
      )}
      {articles ? (
        <>
          <ArticlesList
            articles={articles.data}
            meta={articles.meta}
            key={articles.data[0].id}
            categoryUuid={categoryUuid}
          />
        </>
      ) : null}
    </main>
  );
};

export default CategoryView;
