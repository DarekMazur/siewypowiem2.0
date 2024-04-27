'use client';

import { SectionTitle } from '@/components/Atoms/SectionTitle/SectionTitle.styles';
import Filter from '@/components/Molecules/Filter/Filter';
import Loader from '@/components/Molecules/Loader/Loader';
import ArticlesList from '@/components/Organism/ArticlesList/ArticlesList';
import CustomSlider from '@/components/Organism/Slider/Slider';
import {
  RootState,
  useGetArticlesQuery,
  useGetCategoriesQuery,
  useGetStickyArticlesQuery,
  useGetUsersQuery,
} from '@/store';
import { useSelector } from 'react-redux';

export const Page = () => {
  const sortDirection = useSelector((state: RootState) => state.sortDirection);
  const sortValue = useSelector((state: RootState) => state.sortValue);

  const {
    data: articles,
    isLoading,
    error,
  } = useGetArticlesQuery({
    pageSize: 6,
    page: 1,
    sort: sortValue,
    sortDir: sortDirection as 'asc' | 'desc',
  });

  const { data: stickyPosts } = useGetStickyArticlesQuery();
  const { data: categories } = useGetCategoriesQuery({ pageSize: 25, page: 1 });
  const { data: users } = useGetUsersQuery({ pageSize: 25, page: 1 });

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
          {stickyPosts && stickyPosts.data.length > 0 ? (
            <div>
              <SectionTitle>Hey, check this out!</SectionTitle>
              <CustomSlider stickyPosts={stickyPosts.data} />
            </div>
          ) : null}
          <ArticlesList
            articles={articles.data}
            meta={articles.meta}
            key={articles.data[0].id}
          />
        </>
      ) : null}
    </main>
  );
};

export default Page;
