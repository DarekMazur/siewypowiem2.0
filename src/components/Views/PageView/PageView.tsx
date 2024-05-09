'use client';

import {
  RootState,
  useGetArticlesQuery,
  useGetCategoriesQuery,
  useGetStickyArticlesQuery,
  useGetUsersQuery,
} from '@/store';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import Filter from '../../Molecules/Filter/Filter';
import ArticlesList from '../../Organism/ArticlesList/ArticlesList';
import Loader from '../../Molecules/Loader/Loader';
import { SectionTitle } from '../../Atoms/SectionTitle/SectionTitle.styles';
import CustomSlider from '../../Organism/Slider/Slider';
import { MainWrapper } from './PageView.styles';

interface IPageViewProps {
  categoryUuid?: string;
  authorUuid?: string;
}

const PageView: FC<IPageViewProps> = ({ categoryUuid, authorUuid }) => {
  const sortDirection = useSelector((state: RootState) => state.sortDirection);
  const sortValue = useSelector((state: RootState) => state.sortValue);
  const { data: stickyPosts } = useGetStickyArticlesQuery({
    categoryUuid,
    authorUuid,
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
    sort: sortValue,
    sortDir: sortDirection as 'asc' | 'desc',
    categoryUuid,
    authorUuid,
  });

  return (
    <MainWrapper>
      <Loader isLoading={isLoading} isError={!!error} isReady={!!articles} />
      {users && categories ? (
        <Filter users={users} categories={categories.data} />
      ) : (
        <Loader isLoading={false} isError isReady={false} />
      )}
      {stickyPosts && stickyPosts.data.length > 0 ? (
        <div>
          <SectionTitle>Sprawdź koniecznie! ⬇️</SectionTitle>
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
            authorUuid={authorUuid}
          />
        </>
      ) : null}
    </MainWrapper>
  );
};

export default PageView;
