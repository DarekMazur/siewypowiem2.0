import { IArticleType } from '@/mocks/types';
import GoToBlog from '@/components/Atoms/GoToBlog/GoToBlog';
import { usePathname } from 'next/navigation';
import ArticlesListItem from './ArticlesListItem/ArticlesListItem';
import { ArticlesWrapper, StyledArticleList } from './ArticlesList.styles';

const ArticlesList = ({ articles }: { articles: Array<IArticleType> }) => {
  const pathname = usePathname();

  return (
    <ArticlesWrapper>
      <StyledArticleList>
        {articles
          ? articles.map((article) => <ArticlesListItem article={article} />)
          : null}
      </StyledArticleList>
      {pathname === '/' ? <GoToBlog /> : null}
    </ArticlesWrapper>
  );
};

export default ArticlesList;
