import { IArticleType } from '@/mocks/types';
import GoToBlog from '@/components/Atoms/GoToBlog/GoToBlog';
import ArticlesListItem from './ArticlesListItem/ArticlesListItem';
import { StyledArticleList } from './ArticlesList.styles';

const ArticlesList = ({ articles }: { articles: Array<IArticleType> }) => {
  return (
    <div>
      <StyledArticleList>
        {articles
          ? articles
              ?.slice(1, 7)
              .map((article) => <ArticlesListItem article={article} />)
          : null}
      </StyledArticleList>
      <GoToBlog />
    </div>
  );
};

export default ArticlesList;
