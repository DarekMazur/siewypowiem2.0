import { IArticleType, IMetaType } from '@/mocks/types';
import GoToBlog from '@/components/Atoms/GoToBlog/GoToBlog';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getArticles } from '@/utils/getArticles';
import { useInView } from 'react-intersection-observer';
import ArticlesLoader from '@/components/Atoms/ArticlesLoader/ArticlesLoader';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { ArticlesWrapper, StyledArticleList } from './ArticlesList.styles';
import ArticlesListItem from './ArticlesListItem/ArticlesListItem';

const ArticlesList = ({
  articles,
  meta,
}: {
  articles: Array<IArticleType>;
  meta?: IMetaType;
}) => {
  const pathname = usePathname();
  const { ref, inView } = useInView();

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
      meta?.pagination.pageSize || 25,
    );
    setArticlesList([...articlesList, ...apiArticles]);
    setPage(page + 1);
  };

  const filterArticles = (articlesToFilter: Array<IArticleType>) => {
    const toDisplay: Array<IArticleType> = [];
    const categoriesFiltered: Array<IArticleType> = [];
    const usersFiltered: Array<IArticleType> = [];

    articlesToFilter.forEach((article) => {
      if (
        article.attributes.categories.length === 0 &&
        filtersForCategories.includes(-1)
      ) {
        categoriesFiltered.push(article);
      }
    });

    categoriesFiltered.push(
      ...articlesToFilter.filter((articleWithCategories) =>
        articleWithCategories.attributes.categories.some((articleCat) =>
          filtersForCategories.includes(articleCat.id),
        ),
      ),
    );

    usersFiltered.push(
      ...categoriesFiltered.filter((article) =>
        filtersForUsers.includes(article.attributes.author.uuid),
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
    if (
      inView ||
      ((document.querySelector('main') as HTMLElement).offsetHeight <
        window.innerHeight &&
        articlesList.length < (meta as IMetaType).pagination.total)
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
      {articlesList.length < (meta?.pagination.total || articles.length) ? (
        <ArticlesLoader />
      ) : null}
      {pathname === '/' ? <GoToBlog /> : null}
    </ArticlesWrapper>
  );
};

export default ArticlesList;
