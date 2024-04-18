import { StyledArticleCta } from './ArticleCta.styles';

const ArticleCta = ({ call }: { call: string }) => {
  return (
    <StyledArticleCta>
      <span>{call}</span>
    </StyledArticleCta>
  );
};

export default ArticleCta;
