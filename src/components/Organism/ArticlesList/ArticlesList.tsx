import { IArticleType, IMetaType } from '@/mocks/types';
import GoToBlog from '@/components/Atoms/GoToBlog/GoToBlog';
import { usePathname } from 'next/navigation';
import ArticlesListItem from './ArticlesListItem/ArticlesListItem';
import { ArticlesWrapper, StyledArticleList } from './ArticlesList.styles';

const ArticlesList = ({
  articles,
  meta,
}: {
  articles: Array<IArticleType>;
  meta?: IMetaType;
}) => {
  const pathname = usePathname();

  return (
    <ArticlesWrapper>
      <StyledArticleList>
        {articles
          ? articles.map((article) => (
              <ArticlesListItem article={article} key={article.id} />
            ))
          : null}
      </StyledArticleList>
      {console.log(meta)}
      {pathname === '/' ? <GoToBlog /> : null}
    </ArticlesWrapper>
  );
};

export default ArticlesList;
