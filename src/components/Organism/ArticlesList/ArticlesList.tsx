import GoToBlog from '@/components/Atoms/GoToBlog/GoToBlog';
import { usePathname } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { getArticles } from '@/utils/getArticles';
import { useInView } from 'react-intersection-observer';
import ArticlesLoader from '@/components/Atoms/ArticlesLoader/ArticlesLoader';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { IArticleTypes, IMetaTypes } from '@/utils/types';
import { ArticlesWrapper, StyledArticleList } from './ArticlesList.styles';
import ArticlesListItem from './ArticlesListItem/ArticlesListItem';

interface IArticlesListProps {
  articles: Array<IArticleTypes>;
  meta: IMetaTypes;
  categoryUuid?: string;
  authorUuid?: string;
}

const ArticlesList: FC<IArticlesListProps> = ({
  articles,
  meta,
  categoryUuid,
  authorUuid,
}) => {
  const pathname = usePathname();
  const { ref, inView } = useInView();
  const sortValue = useSelector((state: RootState) => state.sortValue);
  const sortDirection = useSelector((state: RootState) => state.sortDirection);

  const filtersForCategories = useSelector(
    (state: RootState) => state.filteredCategories,
  );
  const filtersForUsers = useSelector(
    (state: RootState) => state.filteredUsers,
  );
  const filtersForSticky = useSelector(
    (state: RootState) => state.filteredPinned,
  );

  const [articlesList, setArticlesList] = useState([...articles]);
  const [page, setPage] = useState(
    meta?.pagination.page ? meta.pagination.page + 1 : 2,
  );

  const loadMoreArticles = async () => {
    const apiArticles = await getArticles(
      page,
      meta.pagination.pageSize || 25,
      sortValue,
      sortDirection as 'desc' | 'asc',
      categoryUuid,
      authorUuid,
    );
    setArticlesList([...articlesList, ...apiArticles]);
    setPage(page + 1);
  };

  const filterArticles = (articlesToFilter: Array<IArticleTypes>) => {
    const toDisplay: Array<IArticleTypes> = [];
    const categoriesFiltered: Array<IArticleTypes> = [];
    const usersFiltered: Array<IArticleTypes> = [];

    if (pathname === '/') {
      return articlesToFilter;
    }

    articlesToFilter.forEach((article) => {
      if (
        article.attributes.categories.data.length === 0 &&
        filtersForCategories.includes(-1)
      ) {
        categoriesFiltered.push(article);
      }
    });

    categoriesFiltered.push(
      ...articlesToFilter.filter((articleWithCategories) =>
        articleWithCategories.attributes.categories.data.some((articleCat) =>
          filtersForCategories.includes(articleCat.id),
        ),
      ),
    );

    usersFiltered.push(
      ...categoriesFiltered.filter((article) =>
        filtersForUsers.includes(
          article.attributes.author.data.attributes.uuid,
        ),
      ),
    );

    toDisplay.push(
      ...usersFiltered.filter((article) =>
        article.attributes.isSticky
          ? filtersForSticky.includes('pinned')
          : filtersForSticky.includes('not_pinned'),
      ),
    );
    return toDisplay;
  };

  useEffect(() => {
    setPage(2);
    setArticlesList([...articles]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortDirection, sortValue]);

  useEffect(() => {
    if (
      ((articlesList.length < meta.pagination.total && inView) ||
        (document.querySelector('main') as HTMLElement).offsetHeight <
          window.innerHeight) &&
      pathname !== '/'
    ) {
      loadMoreArticles();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    inView,
    filtersForCategories,
    filtersForUsers,
    filtersForSticky,
    articlesList,
  ]);

  return (
    <ArticlesWrapper>
      <StyledArticleList>
        {articlesList
          ? filterArticles(articlesList).map((article) => (
              <div key={article.id} ref={ref}>
                <ArticlesListItem article={article} />
              </div>
            ))
          : null}
      </StyledArticleList>
      {articlesList.length < (meta?.pagination.total || articles.length) &&
      pathname !== '/' ? (
        <ArticlesLoader />
      ) : null}
      {pathname === '/' ? <GoToBlog /> : null}
    </ArticlesWrapper>
  );
};

export default ArticlesList;
