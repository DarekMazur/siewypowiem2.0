'use client';

import {
  useGetArticlesQuery,
  useGetCategoriesQuery,
  useGetStickyArticlesQuery,
  useGetUsersQuery,
} from '@/store';
import Filter from '../Molecules/Filter/Filter';
import ArticlesList from '../Organism/ArticlesList/ArticlesList';
import Loader from '../Molecules/Loader/Loader';
import { SectionTitle } from '../Atoms/SectionTitle/SectionTitle.styles';
import CustomSlider from '../Organism/Slider/Slider';

const CategoryView = ({ categoryUuid }: { categoryUuid: string }) => {
  const { data: stickyPosts } = useGetStickyArticlesQuery({
    categoryUuid,
  });
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
        <Filter users={users} categories={categories.data} />
      ) : (
        <Loader isLoading={false} isError isReady={false} />
      )}
      {stickyPosts && stickyPosts.data.length > 0 ? (
        <div>
          <SectionTitle>Hey, check this out!</SectionTitle>
          <CustomSlider stickyPosts={stickyPosts.data} />
        </div>
      ) : null}
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
