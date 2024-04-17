import { StyledArticleCta } from './ArticleCta.styles';

const ArticleCta = ({ call, isOver }: { call: string; isOver: boolean }) => {
  return (
    <StyledArticleCta $isOver={isOver}>
      <span>{call}</span>
    </StyledArticleCta>
  );
};

export default ArticleCta;
