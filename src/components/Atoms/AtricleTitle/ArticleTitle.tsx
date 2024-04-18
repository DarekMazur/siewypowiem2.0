import { StyledArticleTitle } from './ArticleTitle.styled';

const ArticleTitle = ({
  size,
  title,
  tag,
}: {
  size?: number;
  title: string;
  tag?: 'h1' | 'h2' | 'h3';
}) => {
  return (
    <StyledArticleTitle
      as={['h1', 'h2', 'h3'].includes(String(tag)) ? tag : 'h3'}
      $size={size}
    >
      {title}
    </StyledArticleTitle>
  );
};

export default ArticleTitle;
