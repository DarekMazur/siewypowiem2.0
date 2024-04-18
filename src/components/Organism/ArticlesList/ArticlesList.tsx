import { IArticleType, IMetaType } from '@/mocks/types';
import GoToBlog from '@/components/Atoms/GoToBlog/GoToBlog';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getArticles } from '@/utils/getArticles';
import { useInView } from 'react-intersection-observer';
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

  useEffect(() => {
    if (inView) {
      loadMoreArticles();
    }
  }, [inView]);

  return (
    <ArticlesWrapper>
      <StyledArticleList>
        {articlesList
          ? articlesList.map((article) => (
              <ArticlesListItem article={article} key={article.id} />
            ))
          : null}
        {articlesList.length < (meta?.pagination.total || articles.length) ? (
          <div ref={ref}>Loading...</div>
        ) : null}
      </StyledArticleList>
      {pathname === '/' ? <GoToBlog /> : null}
    </ArticlesWrapper>
  );
};

export default ArticlesList;
