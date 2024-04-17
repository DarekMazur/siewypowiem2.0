import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledArticleCateogries } from './ArticleCategories.styles';

const ArticleCategories = ({ categories }: { categories: string }) => {
  return (
    <>
      {categories ? (
        <StyledArticleCateogries>
          <FontAwesomeIcon icon={['fas', 'tag']} /> {categories}
        </StyledArticleCateogries>
      ) : null}
    </>
  );
};

export default ArticleCategories;
