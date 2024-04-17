import { StyledArticleCateogries } from './ArticleCategories.styles';

const ArticleCategories = ({ categories }: { categories: string }) => {
  return <StyledArticleCateogries>{categories}</StyledArticleCateogries>;
};

export default ArticleCategories;
